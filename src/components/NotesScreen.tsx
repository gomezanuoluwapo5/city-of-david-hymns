import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, Plus, Trash2, StickyNote } from "lucide-react";
import { getNotes, saveNote, deleteNote, type Note } from "@/lib/store";

const NotesScreen = () => {
  const [notes, setNotes] = useState<Note[]>(getNotes());
  const [editing, setEditing] = useState<Note | null>(null);

  const refresh = () => setNotes(getNotes());

  const handleNew = () => {
    const note: Note = {
      id: crypto.randomUUID(),
      title: "",
      content: "",
      date: new Date().toLocaleDateString(),
      updatedAt: new Date().toISOString(),
    };
    setEditing(note);
  };

  const handleSave = useCallback((note: Note) => {
    const updated = { ...note, updatedAt: new Date().toISOString() };
    saveNote(updated);
    refresh();
  }, []);

  const handleDelete = (id: string) => {
    deleteNote(id);
    refresh();
    setEditing(null);
  };

  useEffect(() => {
    if (!editing) return;
    const timer = setTimeout(() => handleSave(editing), 800);
    return () => clearTimeout(timer);
  }, [editing, handleSave]);

  if (editing) {
    return (
      <div className="pb-24 max-w-lg mx-auto animate-fade-in">
        <div className="sticky top-0 z-10 glass border-b border-border/50 px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => { handleSave(editing); setEditing(null); }}
            className="p-2 -ml-1 rounded-xl hover:bg-muted transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <span className="flex-1 text-xs text-muted-foreground italic">Auto-saving...</span>
          <button
            onClick={() => handleDelete(editing.id)}
            className="p-2 rounded-xl hover:bg-destructive/10 text-destructive transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
        <div className="px-5 pt-5">
          <input
            type="text"
            placeholder="Note Title (e.g. Sunday Sermon)"
            value={editing.title}
            onChange={e => setEditing({ ...editing, title: e.target.value })}
            className="w-full text-xl font-display text-foreground bg-transparent border-0 outline-none placeholder:text-muted-foreground/40 mb-4"
          />
          <textarea
            placeholder="Start writing your notes..."
            value={editing.content}
            onChange={e => setEditing({ ...editing, content: e.target.value })}
            className="w-full min-h-[60vh] text-foreground bg-transparent border-0 outline-none resize-none font-serif text-base leading-relaxed placeholder:text-muted-foreground/40"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 max-w-lg mx-auto animate-fade-in">
      <div className="sticky top-0 z-10 glass px-5 pt-6 pb-4">
        <h1 className="text-3xl font-display text-foreground">Notes</h1>
      </div>
      <div className="px-4 mt-3 space-y-2.5">
        {notes.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <StickyNote size={28} className="text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-foreground mb-1">No notes yet</p>
            <p className="text-xs text-muted-foreground">Tap + to create your first note</p>
          </div>
        )}
        {notes.map(note => (
          <button
            key={note.id}
            onClick={() => setEditing(note)}
            className="w-full text-left p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-sm font-semibold text-foreground truncate">{note.title || "Untitled"}</p>
            <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">{note.content || "Empty note"}</p>
            <p className="text-[10px] text-muted-foreground mt-3 uppercase tracking-wider">{note.date}</p>
          </button>
        ))}
      </div>

      {/* FAB */}
      <button
        onClick={handleNew}
        className="fixed bottom-20 right-5 w-14 h-14 rounded-2xl gradient-primary text-primary-foreground shadow-elevated flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-40"
      >
        <Plus size={24} />
      </button>
    </div>
  );
};

export default NotesScreen;
