import { useState } from "react";
import { ArrowLeft, Bookmark } from "lucide-react";
import { bibleBooks, getVerses } from "@/data/bible";
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
  const [, setTick] = useState(0);
  const fontSize = getFontSize();

  const bookData = bibleBooks.find(b => b.name === selectedBook);
  const otBooks = bibleBooks.filter(b => b.testament === "OT");
  const ntBooks = bibleBooks.filter(b => b.testament === "NT");

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

  // Reading view
  if (view === "reading") {
    const verses = getVerses(selectedBook, selectedChapter);
    const bookmarks = getBookmarks();

    return (
      <div className="pb-24 max-w-lg mx-auto animate-fade-in">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-border px-4 py-3 flex items-center gap-3">
          <button onClick={goBack} className="p-1.5 -ml-1 rounded-lg hover:bg-muted">
            <ArrowLeft size={20} />
          </button>
          <h2 className="font-display font-bold text-foreground">
            {selectedBook} {selectedChapter}
          </h2>
        </div>
        <div className="px-5 pt-4 space-y-3">
          {verses.map((text, i) => {
            const ref = `${selectedBook}:${selectedChapter}:${i + 1}`;
            const isBookmarked = bookmarks.includes(ref);
            return (
              <div key={i} className="flex gap-2 group">
                <span className="text-xs font-bold text-primary mt-1 shrink-0 w-6 text-right">
                  {i + 1}
                </span>
                <p
                  className="bible-text text-foreground flex-1"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {text}
                </p>
                <button
                  onClick={() => { toggleBookmark(ref); setTick(t => t + 1); }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 shrink-0"
                >
                  <Bookmark
                    size={14}
                    className={isBookmarked ? "fill-accent text-accent" : "text-muted-foreground"}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Chapters view
  if (view === "chapters" && bookData) {
    const chapters = Array.from({ length: bookData.chapters }, (_, i) => i + 1);
    return (
      <div className="pb-24 max-w-lg mx-auto animate-fade-in">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-border px-4 py-3 flex items-center gap-3">
          <button onClick={goBack} className="p-1.5 -ml-1 rounded-lg hover:bg-muted">
            <ArrowLeft size={20} />
          </button>
          <h2 className="font-display font-bold text-foreground">{selectedBook}</h2>
        </div>
        <div className="px-4 pt-4">
          <p className="text-sm text-muted-foreground mb-3">Select a chapter</p>
          <div className="grid grid-cols-6 gap-2">
            {chapters.map(ch => (
              <button
                key={ch}
                onClick={() => handleChapterSelect(ch)}
                className="aspect-square rounded-lg bg-muted hover:bg-primary/10 hover:text-primary flex items-center justify-center text-sm font-medium transition-colors"
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
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md px-4 pt-5 pb-3">
        <h1 className="text-2xl font-display font-bold text-foreground mb-3">Bible</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setTestament("OT")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              testament === "OT"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            Old Testament
          </button>
          <button
            onClick={() => setTestament("NT")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              testament === "NT"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            New Testament
          </button>
        </div>
      </div>
      <div className="px-4 mt-2 space-y-1">
        {books.map(b => (
          <button
            key={b.name}
            onClick={() => handleBookSelect(b.name)}
            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors text-left"
          >
            <span className="text-sm font-medium text-foreground">{b.name}</span>
            <span className="text-xs text-muted-foreground">{b.chapters} ch</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BibleScreen;
