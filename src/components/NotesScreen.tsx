import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
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

  // Auto-save effect
  useEffect(() => {
    if (!editing) return;
    const timer = setTimeout(() => handleSave(editing), 800);
    return () => clearTimeout(timer);
  }, [editing, handleSave]);

  if (editing) {
    return (
      <div className="pb-24 max-w-lg mx-auto animate-fade-in">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-border px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => { handleSave(editing); setEditing(null); }}
            className="p-1.5 -ml-1 rounded-lg hover:bg-muted"
          >
            <ArrowLeft size={20} />
          </button>
          <span className="flex-1 text-xs text-muted-foreground">Auto-saving...</span>
          <button
            onClick={() => handleDelete(editing.id)}
            className="p-1.5 rounded-lg hover:bg-destructive/10 text-destructive"
          >
            <Trash2 size={18} />
          </button>
        </div>
        <div className="px-4 pt-4">
          <input
            type="text"
            placeholder="Note Title (e.g. Sunday Sermon)"
            value={editing.title}
            onChange={e => setEditing({ ...editing, title: e.target.value })}
            className="w-full text-xl font-display font-bold text-foreground bg-transparent border-0 outline-none placeholder:text-muted-foreground/50 mb-4"
          />
          <textarea
            placeholder="Start writing your notes..."
            value={editing.content}
            onChange={e => setEditing({ ...editing, content: e.target.value })}
            className="w-full min-h-[60vh] text-foreground bg-transparent border-0 outline-none resize-none font-serif leading-relaxed placeholder:text-muted-foreground/50"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 max-w-lg mx-auto animate-fade-in">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md px-4 pt-5 pb-3">
        <h1 className="text-2xl font-display font-bold text-foreground">Notes</h1>
      </div>
      <div className="px-4 mt-2 space-y-2">
        {notes.length === 0 && (
          <p className="text-center text-muted-foreground text-sm py-12">
            No notes yet. Tap + to create one.
          </p>
        )}
        {notes.map(note => (
          <button
            key={note.id}
            onClick={() => setEditing(note)}
            className="w-full text-left p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
          >
            <p className="text-sm font-semibold text-foreground truncate">{note.title || "Untitled"}</p>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{note.content || "Empty note"}</p>
            <p className="text-[10px] text-muted-foreground mt-2">{note.date}</p>
          </button>
        ))}
      </div>

      {/* FAB */}
      <button
        onClick={handleNew}
        className="fixed bottom-20 right-5 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-40"
      >
        <Plus size={24} />
      </button>
    </div>
  );
};

export default NotesScreen;
