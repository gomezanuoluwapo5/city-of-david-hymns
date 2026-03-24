import { useState, useEffect } from "react";
import { ArrowLeft, Bookmark, Loader2 } from "lucide-react";
import { bibleBooks } from "@/data/bible";
import { fetchChapter, type BibleVerse } from "@/lib/bibleApi";
import { setLastBible, getFontSize, toggleBookmark, getBookmarks } from "@/lib/store";

interface BibleScreenProps {
  initialBook?: string | null;
  initialChapter?: number | null;
}

type View = "books" | "chapters" | "reading";

const BibleScreen = ({ initialBook, initialChapter }: BibleScreenProps) => {
  const [view, setView] = useState<View>(initialBook ? "reading" : "books");
  const [selectedBook, setSelectedBook] = useState(initialBook || "");
  const [selectedChapter, setSelectedChapter] = useState(initialChapter || 1);
  const [testament, setTestament] = useState<"OT" | "NT">("OT");
  const [verses, setVerses] = useState<BibleVerse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [, setTick] = useState(0);
  const fontSize = getFontSize();

  const bookData = bibleBooks.find(b => b.name === selectedBook);
  const otBooks = bibleBooks.filter(b => b.testament === "OT");
  const ntBooks = bibleBooks.filter(b => b.testament === "NT");

  // Fetch verses when reading
  useEffect(() => {
    if (view !== "reading" || !selectedBook) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    
    fetchChapter(selectedBook, selectedChapter)
      .then(data => {
        if (!cancelled) {
          setVerses(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError("Unable to load verses. Check your connection.");
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [view, selectedBook, selectedChapter]);

  const handleBookSelect = (name: string) => {
    setSelectedBook(name);
    setView("chapters");
  };

  const handleChapterSelect = (ch: number) => {
    setSelectedChapter(ch);
    setLastBible({ book: selectedBook, chapter: ch });
    setView("reading");
  };

  const goBack = () => {
    if (view === "reading") setView("chapters");
    else if (view === "chapters") setView("books");
  };

  // Navigate between chapters
  const goToChapter = (ch: number) => {
    setSelectedChapter(ch);
    setLastBible({ book: selectedBook, chapter: ch });
    window.scrollTo(0, 0);
  };

  // Reading view
  if (view === "reading") {
    const bookmarks = getBookmarks();
    const maxChapter = bookData?.chapters || 1;

    return (
      <div className="pb-24 max-w-lg mx-auto animate-fade-in">
        <div className="sticky top-0 z-10 glass border-b border-border/50 px-4 py-3 flex items-center gap-3">
          <button onClick={goBack} className="p-2 -ml-1 rounded-xl hover:bg-muted transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1 min-w-0">
            <h2 className="font-display text-foreground truncate">
              {selectedBook} {selectedChapter}
            </h2>
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={28} className="animate-spin text-primary" />
            <span className="ml-3 text-sm text-muted-foreground">Loading verses...</span>
          </div>
        )}

        {error && (
          <div className="mx-5 mt-6 p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-center">
            <p className="text-sm text-destructive">{error}</p>
            <button
              onClick={() => { setLoading(true); setError(null); fetchChapter(selectedBook, selectedChapter).then(setVerses).catch(() => setError("Still offline.")).finally(() => setLoading(false)); }}
              className="mt-2 text-xs font-semibold text-primary underline"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="px-5 pt-5 space-y-4">
              {verses.map((v) => {
                const ref = `${selectedBook}:${selectedChapter}:${v.verse}`;
                const isBookmarked = bookmarks.includes(ref);
                return (
                  <div key={v.verse} className="flex gap-3 group">
                    <span className="text-xs font-bold text-primary mt-1.5 shrink-0 w-7 text-right tabular-nums">
                      {v.verse}
                    </span>
                    <p
                      className="bible-text text-foreground flex-1"
                      style={{ fontSize: `${fontSize}px` }}
                    >
                      {v.text}
                    </p>
                    <button
                      onClick={() => { toggleBookmark(ref); setTick(t => t + 1); }}
                      className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity p-1.5 shrink-0 rounded-lg hover:bg-muted"
                    >
                      <Bookmark
                        size={14}
                        className={isBookmarked ? "fill-church-gold text-church-gold" : "text-muted-foreground"}
                      />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Chapter navigation */}
            <div className="flex items-center justify-between px-5 py-6 mt-4">
              {selectedChapter > 1 ? (
                <button
                  onClick={() => goToChapter(selectedChapter - 1)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted text-sm font-medium text-foreground hover:bg-primary/10 transition-colors"
                >
                  <ArrowLeft size={16} />
                  Ch {selectedChapter - 1}
                </button>
              ) : <div />}
              {selectedChapter < maxChapter && (
                <button
                  onClick={() => goToChapter(selectedChapter + 1)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Ch {selectedChapter + 1}
                  <ArrowLeft size={16} className="rotate-180" />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    );
  }

  // Chapters view
  if (view === "chapters" && bookData) {
    const chapters = Array.from({ length: bookData.chapters }, (_, i) => i + 1);
    return (
      <div className="pb-24 max-w-lg mx-auto animate-fade-in">
        <div className="sticky top-0 z-10 glass border-b border-border/50 px-4 py-3 flex items-center gap-3">
          <button onClick={goBack} className="p-2 -ml-1 rounded-xl hover:bg-muted transition-colors">
            <ArrowLeft size={20} />
          </button>
          <h2 className="font-display text-foreground">{selectedBook}</h2>
        </div>
        <div className="px-5 pt-5">
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest font-semibold">Select a chapter</p>
          <div className="grid grid-cols-6 gap-2.5">
            {chapters.map(ch => (
              <button
                key={ch}
                onClick={() => handleChapterSelect(ch)}
                className="aspect-square rounded-xl bg-card border border-border shadow-card hover:shadow-elevated hover:border-primary/30 hover:text-primary flex items-center justify-center text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                {ch}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Books view
  const books = testament === "OT" ? otBooks : ntBooks;
  return (
    <div className="pb-24 max-w-lg mx-auto animate-fade-in">
      <div className="sticky top-0 z-10 glass px-5 pt-6 pb-4">
        <h1 className="text-3xl font-display text-foreground mb-4">Bible</h1>
        <div className="flex gap-2 p-1 bg-muted rounded-2xl">
          <button
            onClick={() => setTestament("OT")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              testament === "OT"
                ? "gradient-primary text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Old Testament
          </button>
          <button
            onClick={() => setTestament("NT")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              testament === "NT"
                ? "gradient-primary text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            New Testament
          </button>
        </div>
      </div>
      <div className="px-4 mt-2 space-y-1">
        {books.map((b, i) => (
          <button
            key={b.name}
            onClick={() => handleBookSelect(b.name)}
            className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-card hover:shadow-card transition-all duration-200 text-left group"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center text-xs font-bold text-primary">
                {i + 1}
              </span>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{b.name}</span>
            </div>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{b.chapters} ch</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BibleScreen;
