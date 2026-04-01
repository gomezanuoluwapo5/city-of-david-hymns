import { BookOpen, Share2, Copy, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { getDailyVerse } from "@/lib/dailyVerse";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DailyVerseCard = () => {
  const [verse] = useState(() => getDailyVerse());
  const [showPrayer, setShowPrayer] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const { toast } = useToast();

  const shareText = `📖 *Daily Bible Verse*\n\n"${verse.text}"\n\n— ${verse.reference}\n\n🙏 ${verse.prayer}\n\n— CDCCG App`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      toast({ title: "Copied to clipboard!" });
    } catch {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
    setShowShare(false);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
    setShowShare(false);
  };

  return (
    <div className="rounded-2xl bg-card border border-border shadow-card overflow-hidden">
      {/* Header */}
      <div className="px-5 py-3 border-b border-border/50 flex items-center gap-2">
        <BookOpen size={14} className="text-primary" />
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest flex-1">
          Daily Verse & Prayer
        </span>
        <button
          onClick={() => setShowShare(!showShare)}
          className="p-1.5 rounded-lg hover:bg-muted transition-colors"
          aria-label="Share"
        >
          <Share2 size={14} className="text-muted-foreground" />
        </button>
      </div>

      {/* Share dropdown */}
      {showShare && (
        <div className="px-5 py-2 border-b border-border/50 flex gap-2 animate-fade-in">
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-green-500/10 text-green-700 dark:text-green-400 text-xs font-medium hover:bg-green-500/20 transition-colors flex-1"
          >
            <MessageCircle size={14} />
            WhatsApp
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted text-foreground text-xs font-medium hover:bg-muted/80 transition-colors flex-1"
          >
            <Copy size={14} />
            Copy
          </button>
        </div>
      )}

      {/* Verse */}
      <div className="p-5 pb-3">
        <p className="text-sm text-foreground leading-relaxed font-serif italic">
          "{verse.text}"
        </p>
        <p className="text-xs font-semibold text-primary mt-3">
          — {verse.reference}
        </p>
      </div>

      {/* Prayer toggle */}
      <div className="px-5 pb-4">
        <button
          onClick={() => setShowPrayer(!showPrayer)}
          className="w-full flex items-center gap-2 py-2 px-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
        >
          <span className="text-xs font-semibold text-primary flex-1 text-left">
            🙏 Today's Prayer
          </span>
          {showPrayer ? (
            <ChevronUp size={14} className="text-primary" />
          ) : (
            <ChevronDown size={14} className="text-primary" />
          )}
        </button>

        {showPrayer && (
          <div className="mt-3 p-4 rounded-xl bg-muted/50 border border-border/50 animate-fade-in">
            <p className="text-xs text-foreground leading-relaxed font-serif italic">
              {verse.prayer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyVerseCard;
