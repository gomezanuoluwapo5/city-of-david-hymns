import { Music, BookOpen, StickyNote, Heart, Clock, Sparkles } from "lucide-react";
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
    <div className="pb-24 max-w-lg mx-auto animate-fade-in">
      {/* Hero Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--church-gold)/0.3),transparent_60%)]" />
        <div className="relative px-6 pt-10 pb-8 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-[3px] border-primary-foreground/30 shadow-elevated mb-4 animate-scale-in">
            <img
              src={churchLogo}
              alt="City of David Covenant Church of God"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-display text-primary-foreground drop-shadow-sm">
            COD Hymns & Bible
          </h1>
          <p className="text-sm text-primary-foreground/80 mt-1 font-body">
            Citadel of Praise — Welcome to Church
          </p>
        </div>
        {/* Curved bottom edge */}
        <div className="absolute -bottom-1 left-0 right-0 h-6 bg-background rounded-t-[2rem]" />
      </div>

      <div className="px-5 -mt-1">
        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { id: "hymns", label: "Hymns", icon: Music, color: "primary" },
            { id: "bible", label: "Bible", icon: BookOpen, color: "accent" },
            { id: "notes", label: "Notes", icon: StickyNote, color: "church-blue" },
          ].map((item, i) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center gap-2.5 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200 group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <item.icon className={`text-${item.color}`} size={24} />
              </div>
              <span className="text-xs font-semibold text-foreground">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="flex items-center gap-2 mb-4">
          <Clock size={14} className="text-muted-foreground" />
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Recent Activity
          </h2>
        </div>

        <div className="space-y-3">
          {lastHymnData && (
            <button
              onClick={() => onOpenHymn(lastHymnData.number)}
              className="w-full flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-200 text-left group"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-soft group-hover:scale-105 transition-transform">
                <Music size={20} className="text-primary-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground truncate">Hymn {lastHymnData.number}</p>
                <p className="text-xs text-muted-foreground truncate mt-0.5">{lastHymnData.title}</p>
              </div>
              <span className="text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded-full">Last played</span>
            </button>
          )}

          {lastBible && (
            <button
              onClick={() => onOpenBible(lastBible.book, lastBible.chapter)}
              className="w-full flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:border-accent/20 transition-all duration-200 text-left group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 shadow-soft group-hover:scale-105 transition-transform">
                <BookOpen size={20} className="text-accent-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground truncate">{lastBible.book}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Chapter {lastBible.chapter}</p>
              </div>
              <span className="text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded-full">Last read</span>
            </button>
          )}

          {recentNotes.map(note => (
            <div
              key={note.id}
              className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-church-blue/10 flex items-center justify-center shrink-0">
                <StickyNote size={20} className="text-church-blue" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{note.title || "Untitled"}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{note.date}</p>
              </div>
            </div>
          ))}

          {!lastHymnData && !lastBible && recentNotes.length === 0 && (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Sparkles size={28} className="text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground mb-1">Welcome to Church!</p>
              <p className="text-xs text-muted-foreground">Start exploring hymns, Bible, or take notes</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
