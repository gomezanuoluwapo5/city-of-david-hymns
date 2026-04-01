import { BookOpen, RefreshCw } from "lucide-react";
import { getDailyVerse } from "@/lib/dailyVerse";
import { useState } from "react";

const DailyVerseCard = () => {
  const [verse] = useState(() => getDailyVerse());

  return (
    <div className="rounded-2xl bg-card border border-border shadow-card overflow-hidden">
      <div className="px-5 py-3 border-b border-border/50 flex items-center gap-2">
        <BookOpen size={14} className="text-primary" />
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
          Daily Verse
        </span>
      </div>
      <div className="p-5">
        <p className="text-sm text-foreground leading-relaxed font-serif italic">
          "{verse.text}"
        </p>
        <p className="text-xs font-semibold text-primary mt-3">
          — {verse.reference}
        </p>
      </div>
    </div>
  );
};

export default DailyVerseCard;
