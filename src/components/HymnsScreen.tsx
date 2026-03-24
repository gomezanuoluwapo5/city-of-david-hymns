import { useState } from "react";
import { Search, Heart, ArrowLeft, Plus, Minus, Music, ChevronDown, ChevronUp } from "lucide-react";
import { hymns } from "@/data/hymns";
import { isFavorite, toggleFavorite, setLastHymn, getFontSize } from "@/lib/store";

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
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-border px-4 py-3 flex items-center gap-3">
          <button onClick={() => { setSelectedHymn(null); setShowSolfa(false); setShowChords(false); }} className="p-1.5 -ml-1 rounded-lg hover:bg-muted">
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-display font-bold truncate">Hymn {hymn.number}</h2>
            <p className="text-xs text-muted-foreground truncate">{hymn.title}</p>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => setFontSizeLocal(s => Math.max(14, s - 2))} className="p-1.5 rounded-lg hover:bg-muted">
              <Minus size={16} />
            </button>
            <span className="text-xs text-muted-foreground w-6 text-center">{fontSize}</span>
            <button onClick={() => setFontSizeLocal(s => Math.min(28, s + 2))} className="p-1.5 rounded-lg hover:bg-muted">
              <Plus size={16} />
            </button>
            <button onClick={handleFav} className="p-1.5 rounded-lg hover:bg-muted ml-1">
              <Heart
                size={20}
                className={isFavorite(hymn.number) ? "fill-primary text-primary" : "text-muted-foreground"}
              />
            </button>
          </div>
        </div>

        {/* Dual Language Hymn Content */}
        <div className="px-4 pt-4">
          <div className="text-center mb-6">
            <h3 className="font-display font-bold text-lg text-foreground">{hymn.title}</h3>
            <p className="text-sm text-primary italic">{hymn.titleYoruba}</p>
            {hymn.key && (
              <p className="text-xs text-muted-foreground mt-1">
                Key: {hymn.key} • {hymn.tempo}
              </p>
            )}
          </div>

          {/* Musical Info Toggles */}
          {(hymn.solfa || hymn.chords) && (
            <div className="mb-4 space-y-2">
              {hymn.solfa && (
                <div className="rounded-xl border border-border overflow-hidden">
                  <button
                    onClick={() => setShowSolfa(!showSolfa)}
                    className="w-full flex items-center gap-2 px-3 py-2.5 bg-muted/50 hover:bg-muted transition-colors text-left"
                  >
                    <Music size={16} className="text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground flex-1">Solfa Notation</span>
                    {showSolfa ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
                  </button>
                  {showSolfa && (
                    <div className="px-3 py-3 bg-card">
                      <pre className="text-xs font-mono text-foreground whitespace-pre-wrap leading-relaxed">{hymn.solfa}</pre>
                    </div>
                  )}
                </div>
              )}

              {hymn.chords && (
                <div className="rounded-xl border border-border overflow-hidden">
                  <button
                    onClick={() => setShowChords(!showChords)}
                    className="w-full flex items-center gap-2 px-3 py-2.5 bg-muted/50 hover:bg-muted transition-colors text-left"
                  >
                    <span className="text-primary font-bold text-xs shrink-0 w-4 text-center">♯</span>
                    <span className="text-sm font-medium text-foreground flex-1">Chord Progression</span>
                    {showChords ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
                  </button>
                  {showChords && (
                    <div className="px-3 py-3 bg-card">
                      <pre className="text-xs font-mono text-foreground whitespace-pre-wrap leading-relaxed">{hymn.chords}</pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {hymn.verses.map((verse, i) => (
            <div key={i} className="mb-6">
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                Verse {i + 1}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-card border border-border">
                  <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1.5">English</p>
                  <p
                    className="hymn-text text-foreground whitespace-pre-line"
                    style={{ fontSize: `${fontSize}px`, lineHeight: 1.7 }}
                  >
                    {verse.english}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-[10px] font-semibold text-accent uppercase tracking-wider mb-1.5">Yorùbá</p>
                  <p
                    className="hymn-text text-foreground whitespace-pre-line"
                    style={{ fontSize: `${fontSize}px`, lineHeight: 1.7 }}
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
              <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                ♪ Chorus
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1.5">English</p>
                  <p
                    className="hymn-text text-foreground whitespace-pre-line font-medium"
                    style={{ fontSize: `${fontSize}px`, lineHeight: 1.7 }}
                  >
                    {hymn.chorus.english}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <p className="text-[10px] font-semibold text-accent uppercase tracking-wider mb-1.5">Yorùbá</p>
                  <p
                    className="hymn-text text-foreground whitespace-pre-line font-medium"
                    style={{ fontSize: `${fontSize}px`, lineHeight: 1.7 }}
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
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md px-4 pt-5 pb-3">
        <h1 className="text-2xl font-display font-bold text-foreground mb-3">Hymns</h1>
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by title, number, or Yorùbá..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted border-0 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Hymn List */}
      <div className="px-4 mt-2 space-y-1.5">
        {filtered.map(h => (
          <button
            key={h.number}
            onClick={() => handleSelect(h.number)}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors text-left group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary">{h.number}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{h.title}</p>
              <p className="text-xs text-muted-foreground truncate italic">{h.titleYoruba}</p>
            </div>
            {isFavorite(h.number) && (
              <Heart size={14} className="fill-primary text-primary shrink-0" />
            )}
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground text-sm py-8">No hymns found</p>
        )}
      </div>
    </div>
  );
};

export default HymnsScreen;
