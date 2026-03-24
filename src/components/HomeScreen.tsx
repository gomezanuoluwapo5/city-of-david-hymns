import { Music, BookOpen, StickyNote, Heart, Clock } from "lucide-react";
import churchLogo from "@/assets/church-logo.jpeg";
import { getLastHymn, getLastBible, getNotes } from "@/lib/store";
import { hymns } from "@/data/hymns";

interface HomeScreenProps {
  onNavigate: (tab: string) => void;
  onOpenHymn: (num: number) => void;
  onOpenBible: (book: string, chapter: number) => void;
}

const HomeScreen = ({ onNavigate, onOpenHymn, onOpenBible }: HomeScreenProps) => {
  const lastHymn = getLastHymn();
  const lastBible = getLastBible();
  const recentNotes = getNotes().slice(0, 2);
  const lastHymnData = lastHymn ? hymns.find(h => h.number === lastHymn) : null;

  return (
    <div className="px-5 pt-6 pb-24 max-w-lg mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <img
          src={churchLogo}
          alt="City of David Covenant Church of God"
          className="w-20 h-20 rounded-full object-cover mb-3 shadow-lg"
        />
        <h1 className="text-xl font-display font-bold text-foreground">
          COD Hymns & Bible
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Citadel of Praise — Welcome to Church
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <button
          onClick={() => onNavigate("hymns")}
          className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/10 hover:bg-primary/15 transition-colors"
        >
          <Music className="text-primary" size={28} />
          <span className="text-xs font-semibold text-foreground">Hymns</span>
        </button>
        <button
          onClick={() => onNavigate("bible")}
          className="flex flex-col items-center gap-2 p-4 rounded-xl bg-accent/10 hover:bg-accent/15 transition-colors"
        >
          <BookOpen className="text-accent" size={28} />
          <span className="text-xs font-semibold text-foreground">Bible</span>
        </button>
        <button
          onClick={() => onNavigate("notes")}
          className="flex flex-col items-center gap-2 p-4 rounded-xl bg-church-blue/10 hover:bg-church-blue/15 transition-colors"
        >
          <StickyNote className="text-church-blue" size={28} />
          <span className="text-xs font-semibold text-foreground">Notes</span>
        </button>
      </div>

      {/* Recent Activity */}
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
        <Clock size={14} /> Recent
      </h2>
      <div className="space-y-2.5">
        {lastHymnData && (
          <button
            onClick={() => onOpenHymn(lastHymnData.number)}
            className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Music size={18} className="text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Hymn {lastHymnData.number}</p>
              <p className="text-xs text-muted-foreground truncate">{lastHymnData.title}</p>
            </div>
          </button>
        )}
        {lastBible && (
          <button
            onClick={() => onOpenBible(lastBible.book, lastBible.chapter)}
            className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <BookOpen size={18} className="text-accent" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{lastBible.book}</p>
              <p className="text-xs text-muted-foreground">Chapter {lastBible.chapter}</p>
            </div>
          </button>
        )}
        {recentNotes.map(note => (
          <div
            key={note.id}
            className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border"
          >
            <div className="w-10 h-10 rounded-lg bg-church-blue/10 flex items-center justify-center shrink-0">
              <StickyNote size={18} className="text-church-blue" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{note.title || "Untitled"}</p>
              <p className="text-xs text-muted-foreground">{note.date}</p>
            </div>
          </div>
        ))}
        {!lastHymnData && !lastBible && recentNotes.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Heart size={32} className="mx-auto mb-2 opacity-40" />
            <p className="text-sm">Start exploring hymns, Bible, or take notes!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
