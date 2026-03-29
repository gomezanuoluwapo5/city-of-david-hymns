import { Bookmark, Highlighter } from "lucide-react";
import { useState } from "react";
import { toggleBookmark, getHighlight, setHighlight, removeHighlight } from "@/lib/store";
import type { BibleVerse } from "@/lib/bibleApi";

interface VerseItemProps {
  verse: BibleVerse;
  bookName: string;
  chapter: number;
  fontSize: number;
  isBookmarked: boolean;
  onUpdate: () => void;
}

const HIGHLIGHT_COLORS = [
  { key: "yellow", bg: "bg-yellow-200/50 dark:bg-yellow-400/20", label: "Yellow" },
  { key: "green", bg: "bg-green-200/50 dark:bg-green-400/20", label: "Green" },
  { key: "blue", bg: "bg-blue-200/50 dark:bg-blue-400/20", label: "Blue" },
  { key: "pink", bg: "bg-pink-200/50 dark:bg-pink-400/20", label: "Pink" },
  { key: "orange", bg: "bg-orange-200/50 dark:bg-orange-400/20", label: "Orange" },
];

const VerseItem = ({ verse, bookName, chapter, fontSize, isBookmarked, onUpdate }: VerseItemProps) => {
  const ref = `${bookName}:${chapter}:${verse.verse}`;
  const [showColors, setShowColors] = useState(false);
  const highlightColor = getHighlight(ref);
  const colorData = HIGHLIGHT_COLORS.find(c => c.key === highlightColor);

  const handleHighlight = (color: string) => {
    if (highlightColor === color) {
      removeHighlight(ref);
    } else {
      setHighlight(ref, color);
    }
    setShowColors(false);
    onUpdate();
  };

  return (
    <div data-verse={verse.verse} className={`flex gap-3 group rounded-xl px-2 py-1.5 transition-colors ${colorData?.bg || ""}`}>
      <span className="text-xs font-bold text-primary mt-1.5 shrink-0 w-7 text-right tabular-nums">
        {verse.verse}
      </span>
      <p className="bible-text text-foreground flex-1" style={{ fontSize: `${fontSize}px` }}>
        {verse.text}
      </p>
      <div className="flex flex-col gap-1 shrink-0 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
        <button
          onClick={() => { toggleBookmark(ref); onUpdate(); }}
          className="p-1.5 rounded-lg hover:bg-muted"
          title="Bookmark"
        >
          <Bookmark
            size={14}
            className={isBookmarked ? "fill-accent text-accent" : "text-muted-foreground"}
          />
        </button>
        <button
          onClick={() => setShowColors(!showColors)}
          className="p-1.5 rounded-lg hover:bg-muted"
          title="Highlight"
        >
          <Highlighter
            size={14}
            className={highlightColor ? "text-accent" : "text-muted-foreground"}
          />
        </button>
      </div>

      {showColors && (
        <div className="absolute right-12 mt-6 z-30 flex gap-1.5 p-2 rounded-xl bg-card border border-border shadow-elevated animate-fade-in">
          {HIGHLIGHT_COLORS.map(c => (
            <button
              key={c.key}
              onClick={() => handleHighlight(c.key)}
              className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 ${
                highlightColor === c.key ? "border-foreground scale-110" : "border-transparent"
              }`}
              style={{
                backgroundColor: c.key === "yellow" ? "#fde68a" : c.key === "green" ? "#bbf7d0" : c.key === "blue" ? "#bfdbfe" : c.key === "pink" ? "#fbcfe8" : "#fed7aa"
              }}
              title={c.label}
            />
          ))}
          {highlightColor && (
            <button
              onClick={() => { removeHighlight(ref); setShowColors(false); onUpdate(); }}
              className="w-7 h-7 rounded-full border-2 border-border flex items-center justify-center text-xs text-muted-foreground hover:text-destructive"
              title="Remove"
            >
              ✕
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default VerseItem;
