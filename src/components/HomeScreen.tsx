import { Music, BookOpen, StickyNote, Heart, Clock, Sparkles } from "lucide-react";
import churchLogo from "@/assets/church-logo.jpeg";
import churchHeroBg from "@/assets/church-hero-bg.jpg";
import { getLastHymn, getLastBible, getNotes } from "@/lib/store";
import { hymns } from "@/data/hymns";
import DailyVerseCard from "@/components/DailyVerseCard";
import PrayerRequestForm from "@/components/PrayerRequestForm";
import ChurchEventsCard from "@/components/ChurchEventsCard";

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
      {/* Hero Section with Background Image */}
      <div className="relative overflow-hidden" style={{ minHeight: '340px' }}>
        <img
          src={churchHeroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          width={1024}
          height={768}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />
        
        <div className="relative flex flex-col items-center justify-center text-center px-6 pt-12 pb-16">
          {/* Logo */}
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/20 shadow-elevated mb-5 animate-scale-in bg-muted/30 backdrop-blur-sm">
            <img
              src={churchLogo}
              alt="City of David Covenant Church of God"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Church Name */}
          <h1 className="text-3xl font-display font-bold text-white drop-shadow-lg tracking-wide text-center leading-snug" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            City of David Covenant
          </h1>
          <p className="text-xl font-display font-bold text-white drop-shadow-lg tracking-wide mt-1" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            Church of God
          </p>
          <p className="text-xs font-body font-bold text-white/80 uppercase tracking-[0.3em] mt-3">
            CDCCG
          </p>
        </div>

        {/* Curved bottom */}
        <div className="absolute -bottom-1 left-0 right-0 h-8 bg-background rounded-t-[2.5rem]" />
      </div>

      {/* Feature Cards */}
      <div className="px-5 -mt-2">
        <div className="grid grid-cols-5 gap-3 mb-8">
          {/* Hymnal - Large Card */}
          <button
            onClick={() => onNavigate("hymns")}
            className="col-span-3 flex flex-col justify-between p-5 rounded-2xl gradient-primary shadow-elevated hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-left min-h-[140px] group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <Music className="text-white" size={24} />
            </div>
            <div className="mt-auto">
              <p className="text-lg font-display text-white">Hymnal</p>
              <p className="text-xs text-white/70 font-body mt-0.5">{hymns.length} Bilingual Hymns</p>
            </div>
          </button>

          {/* Bible + Notes stacked */}
          <div className="col-span-2 flex flex-col gap-3">
            <button
              onClick={() => onNavigate("bible")}
              className="flex-1 flex flex-col justify-between p-4 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="text-accent" size={20} />
              </div>
              <div className="mt-2">
                <p className="text-sm font-display text-foreground">Bible</p>
                <p className="text-[10px] text-muted-foreground font-body">KJV</p>
              </div>
            </button>

            <button
              onClick={() => onNavigate("notes")}
              className="flex-1 flex flex-col justify-between p-4 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-church-pink/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                <StickyNote className="text-church-pink" size={20} />
              </div>
              <div className="mt-2">
                <p className="text-sm font-display text-foreground">Notes</p>
                <p className="text-[10px] text-muted-foreground font-body">Sermons</p>
              </div>
            </button>
          </div>
        </div>

        {/* Daily Verse */}
        <div className="mb-6">
          <DailyVerseCard />
        </div>

        {/* Church Events */}
        <div className="mb-6">
          <ChurchEventsCard />
        </div>

        {/* Prayer Request */}
        <div className="mb-6">
          <PrayerRequestForm />
        </div>

        {/* Recent Activity */}
        <div className="flex items-center gap-2 mb-4">
          <Clock size={14} className="text-muted-foreground" />
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest font-body">
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
                <p className="text-xs text-muted-foreground truncate mt-0.5 font-body">{lastHymnData.title}</p>
              </div>
              <span className="text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded-full font-body">Last played</span>
            </button>
          )}

          {lastBible && (
            <button
              onClick={() => onOpenBible(lastBible.book, lastBible.chapter)}
              className="w-full flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:border-accent/20 transition-all duration-200 text-left group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <BookOpen size={20} className="text-accent" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground truncate">{lastBible.book}</p>
                <p className="text-xs text-muted-foreground mt-0.5 font-body">Chapter {lastBible.chapter}</p>
              </div>
              <span className="text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded-full font-body">Last read</span>
            </button>
          )}

          {recentNotes.map(note => (
            <div
              key={note.id}
              className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-church-pink/10 flex items-center justify-center shrink-0">
                <StickyNote size={20} className="text-church-pink" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{note.title || "Untitled"}</p>
                <p className="text-xs text-muted-foreground mt-0.5 font-body">{note.date}</p>
              </div>
            </div>
          ))}

          {!lastHymnData && !lastBible && recentNotes.length === 0 && (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Sparkles size={28} className="text-muted-foreground" />
              </div>
              <p className="text-sm font-display text-foreground mb-1">Welcome to Church!</p>
              <p className="text-xs text-muted-foreground font-body">Start exploring hymns, Bible, or take notes</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;