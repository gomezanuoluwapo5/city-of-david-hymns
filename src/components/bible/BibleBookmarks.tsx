import { Bookmark, ArrowLeft, Trash2, BookOpen } from "lucide-react";
import { getBookmarks, toggleBookmark } from "@/lib/store";
import { useState } from "react";

interface BibleBookmarksProps {
  onClose: () => void;
  onNavigate: (book: string, chapter: number, verse: number) => void;
}

const BibleBookmarks = ({ onClose, onNavigate }: BibleBookmarksProps) => {
  const [bookmarks, setBookmarks] = useState(getBookmarks());

  const handleRemove = (ref: string) => {
    toggleBookmark(ref);
    setBookmarks(getBookmarks());
  };

  const parseRef = (ref: string) => {
    const parts = ref.split(":");
    const verse = Number(parts.pop());
    const chapter = Number(parts.pop());
    const book = parts.join(":");
    return { book, chapter, verse };
  };

  return (
    <div className="pb-24 max-w-lg mx-auto animate-fade-in">
      <div className="sticky top-0 z-10 glass border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button onClick={onClose} className="p-2 -ml-1 rounded-xl hover:bg-muted transition-colors">
          <ArrowLeft size={20} />
        </button>
        <Bookmark size={18} className="text-accent" />
        <h2 className="font-display text-foreground">Bookmarks</h2>
        <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
          {bookmarks.length}
        </span>
      </div>

      {bookmarks.length === 0 ? (
        <div className="text-center py-20 px-6">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Bookmark size={28} className="text-muted-foreground" />
          </div>
          <p className="text-sm font-display text-foreground mb-1">No Bookmarks Yet</p>
          <p className="text-xs text-muted-foreground font-body">
            Tap the bookmark icon on any verse to save it here
          </p>
        </div>
      ) : (
        <div className="px-4 pt-4 space-y-2">
          {bookmarks.map((ref) => {
            const { book, chapter, verse } = parseRef(ref);
            return (
              <div
                key={ref}
                className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border shadow-card group"
              >
                <button
                  onClick={() => onNavigate(book, chapter, verse)}
                  className="flex items-center gap-3 flex-1 min-w-0 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <BookOpen size={18} className="text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {book} {chapter}:{verse}
                    </p>
                    <p className="text-xs text-muted-foreground font-body">Tap to read</p>
                  </div>
                </button>
                <button
                  onClick={() => handleRemove(ref)}
                  className="p-2 rounded-lg hover:bg-destructive/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                >
                  <Trash2 size={14} className="text-destructive" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BibleBookmarks;
