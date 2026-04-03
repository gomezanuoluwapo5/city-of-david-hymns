import { useState, useEffect, useCallback } from "react";
import BottomNav from "@/components/BottomNav";
import HomeScreen from "@/components/HomeScreen";
import HymnsScreen from "@/components/HymnsScreen";
import BibleScreen from "@/components/BibleScreen";
import NotesScreen from "@/components/NotesScreen";
import SettingsScreen from "@/components/SettingsScreen";
import AdminPanel from "@/components/AdminPanel";
import BibleGamesScreen from "@/components/BibleGamesScreen";
import SplashScreen from "@/components/SplashScreen";
import { getDarkMode } from "@/lib/store";
import { initDailyVerseNotifications } from "@/lib/dailyVerse";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [tab, setTab] = useState("home");
  const [hymnToOpen, setHymnToOpen] = useState<number | null>(null);
  const [bibleToOpen, setBibleToOpen] = useState<{ book: string; chapter: number } | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showGames, setShowGames] = useState(false);

  // Initialize dark mode and daily verse notifications
  useEffect(() => {
    if (getDarkMode()) {
      document.documentElement.classList.add("dark");
    }
    initDailyVerseNotifications();
  }, []);

  const handleNavigate = (t: string) => {
    setHymnToOpen(null);
    setBibleToOpen(null);
    setShowAdmin(false);
    setShowGames(false);
    if (t === "games") {
      setShowGames(true);
      return;
    }
    setTab(t);
  };

  const handleOpenHymn = (num: number) => {
    setHymnToOpen(num);
    setTab("hymns");
  };

  const handleOpenBible = (book: string, chapter: number) => {
    setBibleToOpen({ book, chapter });
    setTab("bible");
  };

  const handleSplashFinish = useCallback(() => setShowSplash(false), []);

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto">
        {showAdmin ? (
          <AdminPanel onBack={() => setShowAdmin(false)} />
        ) : showGames ? (
          <BibleGamesScreen onBack={() => setShowGames(false)} />
        ) : (
          <>
            {tab === "home" && (
              <HomeScreen
                onNavigate={handleNavigate}
                onOpenHymn={handleOpenHymn}
                onOpenBible={handleOpenBible}
              />
            )}
            {tab === "hymns" && <HymnsScreen initialHymn={hymnToOpen} />}
            {tab === "bible" && (
              <BibleScreen
                initialBook={bibleToOpen?.book}
                initialChapter={bibleToOpen?.chapter}
              />
            )}
            {tab === "notes" && <NotesScreen />}
            {tab === "settings" && <SettingsScreen onOpenAdmin={() => setShowAdmin(true)} />}
          </>
        )}
      </div>
      <BottomNav active={tab} onNavigate={handleNavigate} />
    </div>
  );
};

export default Index;
