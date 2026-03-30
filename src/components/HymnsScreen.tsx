import { useState } from "react";
import { Search, Heart, ArrowLeft, Plus, Minus, Music, ChevronDown, ChevronUp } from "lucide-react";
import { hymns } from "@/data/hymns";
import { isFavorite, toggleFavorite, setLastHymn, getFontSize } from "@/lib/store";
import { useHymnOverrides } from "@/hooks/useHymnOverrides";

interface HymnsScreenProps {
  onOpenHymn?: (num: number) => void;
  initialHymn?: number | null;
}

const HymnsScreen = ({ initialHymn }: HymnsScreenProps) => {
  const [search, setSearch] = useState("");
  const [selectedHymn, setSelectedHymn] = useState<number | null>(initialHymn ?? null);
  const [fontSize, setFontSizeLocal] = useState(getFontSize());
  const [, setTick] = useState(0);
  const [showSolfa, setShowSolfa] = useState(false);
  const [showChords, setShowChords] = useState(false);

  const filtered = hymns.filter(h =>
    h.title.toLowerCase().includes(search.toLowerCase()) ||
    h.titleYoruba.toLowerCase().includes(search.toLowerCase()) ||
    String(h.number).includes(search)
  );

  const hymn = selectedHymn ? hymns.find(h => h.number === selectedHymn) : null;

  const handleSelect = (num: number) => {
    setSelectedHymn(num);
    setLastHymn(num);
  };

  const handleFav = () => {
    if (hymn) {
      toggleFavorite(hymn.number);
      setTick(t => t + 1);
    }
  };

  if (hymn) {
    return (
      <div className="pb-24 max-w-lg mx-auto animate-fade-in">
        {/* Header */}
        <div className="sticky top-0 z-10 glass border-b border-border/50 px-4 py-3 flex items-center gap-3">
          <button onClick={() => { setSelectedHymn(null); setShowSolfa(false); setShowChords(false); }} className="p-2 -ml-1 rounded-xl hover:bg-muted transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-display truncate">Hymn {hymn.number}</h2>
            <p className="text-xs text-muted-foreground truncate">{hymn.title}</p>
          </div>
          <div className="flex items-center gap-0.5">
            <button onClick={() => setFontSizeLocal(s => Math.max(14, s - 2))} className="p-2 rounded-xl hover:bg-muted transition-colors">
              <Minus size={14} />
            </button>
            <span className="text-xs text-muted-foreground w-7 text-center tabular-nums">{fontSize}</span>
            <button onClick={() => setFontSizeLocal(s => Math.min(28, s + 2))} className="p-2 rounded-xl hover:bg-muted transition-colors">
              <Plus size={14} />
            </button>
            <button onClick={handleFav} className="p-2 rounded-xl hover:bg-muted transition-colors ml-1">
              <Heart
                size={20}
                className={`transition-colors ${isFavorite(hymn.number) ? "fill-primary text-primary" : "text-muted-foreground"}`}
              />
            </button>
          </div>
        </div>

        {/* Hymn Content */}
        <div className="px-5 pt-5">
          {/* Title block */}
          <div className="text-center mb-6 pb-5 border-b border-border/50">
            <h3 className="font-display text-xl text-foreground">{hymn.title}</h3>
            <p className="text-sm text-primary italic mt-1 font-serif">{hymn.titleYoruba}</p>
            {hymn.key && (
              <div className="flex items-center justify-center gap-3 mt-3">
                <span className="text-[10px] font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Key: {hymn.key}
                </span>
                <span className="text-[10px] font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {hymn.tempo}
                </span>
              </div>
            )}
          </div>

          {/* Musical Info Toggles */}
          {(hymn.solfa || hymn.chords) && (
            <div className="mb-6 space-y-2">
              {hymn.solfa && (
                <div className="rounded-2xl border border-border overflow-hidden shadow-card">
                  <button
                    onClick={() => setShowSolfa(!showSolfa)}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-card hover:bg-muted/50 transition-colors text-left"
                  >
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                      <Music size={14} className="text-primary-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-foreground flex-1">Solfa Notation</span>
                    {showSolfa ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
                  </button>
                  {showSolfa && (
                    <div className="px-4 py-4 bg-muted/30 border-t border-border/50">
                      <pre className="text-xs font-mono text-foreground whitespace-pre-wrap leading-relaxed">{hymn.solfa}</pre>
                    </div>
                  )}
                </div>
              )}

              {hymn.chords && (
                <div className="rounded-2xl border border-border overflow-hidden shadow-card">
                  <button
                    onClick={() => setShowChords(!showChords)}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-card hover:bg-muted/50 transition-colors text-left"
                  >
                    <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">♯</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground flex-1">Chord Progression</span>
                    {showChords ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
                  </button>
                  {showChords && (
                    <div className="px-4 py-4 bg-muted/30 border-t border-border/50">
                      <pre className="text-xs font-mono text-foreground whitespace-pre-wrap leading-relaxed">{hymn.chords}</pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Verses */}
          {hymn.verses.map((verse, i) => (
            <div key={i} className="mb-6 animate-fade-in" style={{ animationDelay: `${i * 50}ms` }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                  {i + 1}
                </span>
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                  Verse {i + 1}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-card border border-border shadow-card">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">English</p>
                  <p
                    className="hymn-text text-foreground whitespace-pre-line"
                    style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
                  >
                    {verse.english}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 shadow-card">
                  <p className="text-[10px] font-bold text-church-gold uppercase tracking-widest mb-2">Yorùbá</p>
                  <p
                    className="hymn-text text-foreground whitespace-pre-line"
                    style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
                  >
                    {verse.yoruba}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Chorus */}
          {hymn.chorus && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary text-lg">♪</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  Chorus
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl gradient-primary border border-primary/20 shadow-soft">
                  <p className="text-[10px] font-bold text-primary-foreground/70 uppercase tracking-widest mb-2">English</p>
                  <p
                    className="hymn-text text-primary-foreground whitespace-pre-line font-medium"
                    style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
                  >
                    {hymn.chorus.english}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-church-gold/15 border border-church-gold/25 shadow-card">
                  <p className="text-[10px] font-bold text-church-gold uppercase tracking-widest mb-2">Yorùbá</p>
                  <p
                    className="hymn-text text-foreground whitespace-pre-line font-medium"
                    style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
                  >
                    {hymn.chorus.yoruba}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 max-w-lg mx-auto animate-fade-in">
      {/* Header */}
      <div className="sticky top-0 z-10 glass px-5 pt-6 pb-4">
        <h1 className="text-3xl font-display text-foreground mb-4">Hymns</h1>
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by title, number, or Yorùbá..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-card border border-border shadow-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
          />
        </div>
      </div>

      {/* Hymn List */}
      <div className="px-4 mt-3 space-y-2">
        {filtered.map(h => (
          <button
            key={h.number}
            onClick={() => handleSelect(h.number)}
            className="w-full flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-200 text-left group"
          >
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-soft">
              <span className="text-sm font-bold text-primary-foreground">{h.number}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">{h.title}</p>
              <p className="text-xs text-muted-foreground truncate italic mt-0.5 font-serif">{h.titleYoruba}</p>
            </div>
            {isFavorite(h.number) && (
              <Heart size={16} className="fill-primary text-primary shrink-0" />
            )}
          </button>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <Music size={32} className="mx-auto text-muted-foreground/30 mb-3" />
            <p className="text-sm text-muted-foreground">No hymns found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HymnsScreen;
