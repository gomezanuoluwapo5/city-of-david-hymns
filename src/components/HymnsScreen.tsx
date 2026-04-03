import { useState } from "react";
import { Search, Heart, ArrowLeft, Plus, Minus, Music, ChevronDown, ChevronUp } from "lucide-react";
import { hymns } from "@/data/hymns";
import { isFavorite, toggleFavorite, setLastHymn, getFontSize } from "@/lib/store";
import { useHymnOverrides } from "@/hooks/useHymnOverrides";
import { useCustomHymns } from "@/hooks/useCustomHymns";

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
  const { getOverride } = useHymnOverrides();
  const { customHymns } = useCustomHymns();

  const allHymns = [...hymns, ...customHymns];

  const filtered = allHymns.filter(h =>
    h.title.toLowerCase().includes(search.toLowerCase()) ||
    h.titleYoruba.toLowerCase().includes(search.toLowerCase()) ||
    String(h.number).includes(search)
  );

  const hymn = selectedHymn ? allHymns.find(h => h.number === selectedHymn) : null;

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
            <h2 className="text-sm font-display font-semibold truncate">Hymn {hymn.number}</h2>
            <p className="text-[11px] text-muted-foreground truncate">{hymn.title}</p>
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
        <div className="px-5 pt-6">
          {/* Title block */}
          <div className="text-center mb-8 pb-6 border-b border-border/40">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-primary shadow-soft mb-4">
              <span className="text-lg font-bold text-primary-foreground">{hymn.number}</span>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground leading-tight">{hymn.title}</h3>
            <p className="text-sm text-primary/80 italic mt-2 font-serif">{hymn.titleYoruba}</p>
            {hymn.key && (
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="text-[10px] font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-full uppercase tracking-wider border border-border/50">
                  Key: {hymn.key}
                </span>
                <span className="text-[10px] font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-full uppercase tracking-wider border border-border/50">
                  {hymn.tempo}
                </span>
              </div>
            )}
          </div>

          {/* Musical Info Toggles */}
          {(hymn.solfa || hymn.chords) && (
            <div className="mb-8 space-y-2.5">
              {hymn.solfa && (
                <div className="rounded-2xl border border-border/60 overflow-hidden shadow-card">
                  <button
                    onClick={() => setShowSolfa(!showSolfa)}
                    className="w-full flex items-center gap-3 px-4 py-3.5 bg-card hover:bg-muted/50 transition-colors text-left"
                  >
                    <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
                      <Music size={14} className="text-primary-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-foreground flex-1">Solfa Notation</span>
                    {showSolfa ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
                  </button>
                  {showSolfa && (
                    <div className="px-4 py-4 bg-muted/20 border-t border-border/40">
                      <pre className="text-xs font-mono text-foreground whitespace-pre-wrap leading-relaxed">{hymn.solfa}</pre>
                    </div>
                  )}
                </div>
              )}

              {hymn.chords && (
                <div className="rounded-2xl border border-border/60 overflow-hidden shadow-card">
                  <button
                    onClick={() => setShowChords(!showChords)}
                    className="w-full flex items-center gap-3 px-4 py-3.5 bg-card hover:bg-muted/50 transition-colors text-left"
                  >
                    <div className="w-9 h-9 rounded-xl gradient-gold flex items-center justify-center shadow-soft">
                      <span className="text-primary-foreground font-bold text-xs">♯</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground flex-1">Chord Progression</span>
                    {showChords ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
                  </button>
                  {showChords && (
                    <div className="px-4 py-4 bg-muted/20 border-t border-border/40">
                      <pre className="text-xs font-mono text-foreground whitespace-pre-wrap leading-relaxed">{hymn.chords}</pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Verses */}
          {hymn.verses.map((verse, i) => (
            <div key={i} className="mb-7 animate-fade-in" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-[11px] font-bold text-primary border border-primary/15">
                  {i + 1}
                </span>
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                  Verse {i + 1}
                </span>
                <div className="flex-1 h-px bg-border/40" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-card border border-border/60 shadow-card">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    English
                  </p>
                  <p
                    className="hymn-text text-foreground whitespace-pre-line"
                    style={{ fontSize: `${fontSize}px`, lineHeight: 1.85 }}
                  >
                    {verse.english}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-primary/[0.04] border border-primary/10 shadow-card">
                  <p className="text-[10px] font-bold text-church-gold uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-church-gold" />
                    Yorùbá
                  </p>
                  <p
                    className="hymn-text text-foreground whitespace-pre-line"
                    style={{ fontSize: `${fontSize}px`, lineHeight: 1.85 }}
                  >
                    {getOverride(hymn.number, i) || verse.yoruba}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Chorus */}
          {hymn.chorus && (
            <div className="mb-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-primary text-lg">♪</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  Chorus
                </span>
                <div className="flex-1 h-px bg-primary/20" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl gradient-primary border border-primary/20 shadow-soft">
                  <p className="text-[10px] font-bold text-primary-foreground/70 uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    English
                  </p>
                  <p
                    className="hymn-text text-primary-foreground whitespace-pre-line font-medium"
                    style={{ fontSize: `${fontSize}px`, lineHeight: 1.85 }}
                  >
                    {hymn.chorus.english}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-church-gold/10 border border-church-gold/20 shadow-card">
                  <p className="text-[10px] font-bold text-church-gold uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-church-gold" />
                    Yorùbá
                  </p>
                  <p
                    className="hymn-text text-foreground whitespace-pre-line font-medium"
                    style={{ fontSize: `${fontSize}px`, lineHeight: 1.85 }}
                  >
                    {getOverride(hymn.number, null) || hymn.chorus.yoruba}
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
        <h1 className="text-2xl font-display font-bold text-foreground mb-4">Hymnal</h1>
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by title, number, or Yorùbá..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-card border border-border/60 shadow-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
          />
        </div>
      </div>

      {/* Hymn List */}
      <div className="px-4 mt-3 space-y-2">
        {filtered.map((h, idx) => (
          <button
            key={h.number}
            onClick={() => handleSelect(h.number)}
            className="w-full flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-elevated hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-200 text-left group animate-fade-in"
            style={{ animationDelay: `${Math.min(idx * 30, 300)}ms` }}
          >
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-soft group-hover:scale-105 transition-transform">
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
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Music size={28} className="text-muted-foreground/40" />
            </div>
            <p className="text-sm font-display text-foreground mb-1">No hymns found</p>
            <p className="text-xs text-muted-foreground font-body">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HymnsScreen;
