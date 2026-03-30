import { useState } from "react";
import { ArrowLeft, Lock, Save, Check, Edit3, Music, ChevronDown, ChevronRight } from "lucide-react";
import { hymns } from "@/data/hymns";
import { useHymnOverrides, saveHymnOverride } from "@/hooks/useHymnOverrides";
import { toast } from "@/hooks/use-toast";

const ADMIN_PASSWORD = "cdccg2026";

interface AdminPanelProps {
  onBack: () => void;
}

const AdminPanel = ({ onBack }: AdminPanelProps) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const { overrides, loading, getOverride, refetch } = useHymnOverrides();
  const [expandedHymn, setExpandedHymn] = useState<number | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [saving, setSaving] = useState(false);
  const [editorName, setEditorName] = useState(() => localStorage.getItem("cod_editor_name") || "");

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const startEdit = (hymnNumber: number, verseIndex: number | null, currentYoruba: string) => {
    const key = `${hymnNumber}-${verseIndex}`;
    const override = getOverride(hymnNumber, verseIndex);
    setEditingField(key);
    setEditText(override || currentYoruba);
  };

  const handleSave = async (hymnNumber: number, verseIndex: number | null) => {
    if (!editText.trim()) return;
    setSaving(true);
    if (editorName) localStorage.setItem("cod_editor_name", editorName);
    
    const { error } = await saveHymnOverride(hymnNumber, verseIndex, editText.trim(), editorName);
    setSaving(false);
    
    if (error) {
      toast({ title: "Error saving", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Saved!", description: "Yorùbá lyrics updated successfully." });
      setEditingField(null);
      refetch();
    }
  };

  if (!authenticated) {
    return (
      <div className="pb-24 max-w-lg mx-auto animate-fade-in">
        <div className="sticky top-0 z-10 glass border-b border-border/50 px-4 py-3 flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-1 rounded-xl hover:bg-muted transition-colors">
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-sm font-display">Admin Panel</h2>
        </div>

        <div className="px-5 pt-12 flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-elevated">
            <Lock size={32} className="text-primary-foreground" />
          </div>
          <h3 className="font-display text-xl text-foreground mb-2">Admin Access</h3>
          <p className="text-sm text-muted-foreground text-center mb-8 max-w-xs">
            Enter the admin password to edit Yorùbá hymn translations.
          </p>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setPasswordError(false); }}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="w-full max-w-xs px-4 py-3 rounded-2xl bg-card border border-border shadow-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-center"
          />
          {passwordError && (
            <p className="text-xs text-destructive mt-2">Incorrect password. Please try again.</p>
          )}
          <button
            onClick={handleLogin}
            className="mt-4 px-8 py-3 rounded-2xl gradient-primary text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-elevated transition-all"
          >
            Unlock
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 max-w-lg mx-auto animate-fade-in">
      {/* Header */}
      <div className="sticky top-0 z-10 glass border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button onClick={onBack} className="p-2 -ml-1 rounded-xl hover:bg-muted transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1">
          <h2 className="text-sm font-display">Edit Yorùbá Lyrics</h2>
          <p className="text-[10px] text-muted-foreground">Tap a hymn to expand and edit</p>
        </div>
      </div>

      {/* Editor Name */}
      <div className="px-5 pt-4 pb-2">
        <div className="flex items-center gap-2">
          <label className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Your Name</label>
          <input
            type="text"
            placeholder="Optional — for tracking edits"
            value={editorName}
            onChange={(e) => setEditorName(e.target.value)}
            className="flex-1 px-3 py-1.5 rounded-xl bg-card border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Hymn List */}
      <div className="px-4 mt-2 space-y-2">
        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">Loading hymns...</p>
          </div>
        ) : (
          hymns.map((hymn) => {
            const isExpanded = expandedHymn === hymn.number;
            const hasOverrides = overrides.some((o) => o.hymn_number === hymn.number);

            return (
              <div key={hymn.number} className="rounded-2xl bg-card border border-border shadow-card overflow-hidden">
                {/* Hymn Header */}
                <button
                  onClick={() => setExpandedHymn(isExpanded ? null : hymn.number)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary-foreground">{hymn.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{hymn.title}</p>
                    <p className="text-[10px] text-muted-foreground truncate italic font-serif">{hymn.titleYoruba}</p>
                  </div>
                  {hasOverrides && (
                    <span className="text-[9px] font-bold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Edited
                    </span>
                  )}
                  {isExpanded ? (
                    <ChevronDown size={16} className="text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronRight size={16} className="text-muted-foreground shrink-0" />
                  )}
                </button>

                {/* Expanded Edit Area */}
                {isExpanded && (
                  <div className="border-t border-border/50 px-4 py-4 space-y-4 animate-fade-in">
                    {/* Verses */}
                    {hymn.verses.map((verse, i) => {
                      const fieldKey = `${hymn.number}-${i}`;
                      const isEditing = editingField === fieldKey;
                      const override = getOverride(hymn.number, i);

                      return (
                        <div key={i} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                              Verse {i + 1}
                            </span>
                            {override && (
                              <Check size={12} className="text-green-500" />
                            )}
                          </div>
                          
                          {/* English reference */}
                          <div className="p-3 rounded-xl bg-muted/50 border border-border/50">
                            <p className="text-[9px] font-bold text-primary uppercase tracking-widest mb-1">English (Reference)</p>
                            <p className="text-xs text-foreground/70 whitespace-pre-line leading-relaxed">{verse.english}</p>
                          </div>

                          {/* Yoruba editable */}
                          {isEditing ? (
                            <div className="space-y-2">
                              <textarea
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                rows={5}
                                className="w-full px-3 py-2 rounded-xl bg-card border-2 border-primary/30 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none font-serif"
                                placeholder="Enter correct Yorùbá translation..."
                              />
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleSave(hymn.number, i)}
                                  disabled={saving}
                                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl gradient-primary text-primary-foreground text-xs font-semibold shadow-soft"
                                >
                                  <Save size={12} />
                                  {saving ? "Saving..." : "Save"}
                                </button>
                                <button
                                  onClick={() => setEditingField(null)}
                                  className="px-4 py-2 rounded-xl bg-muted text-xs font-semibold text-muted-foreground"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => startEdit(hymn.number, i, verse.yoruba)}
                              className="w-full p-3 rounded-xl bg-accent/5 border border-accent/20 text-left hover:bg-accent/10 transition-colors group"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <p className="text-[9px] font-bold text-accent uppercase tracking-widest">Yorùbá</p>
                                <Edit3 size={12} className="text-muted-foreground group-hover:text-accent transition-colors" />
                              </div>
                              <p className="text-xs text-foreground whitespace-pre-line leading-relaxed font-serif">
                                {override || verse.yoruba}
                              </p>
                              {override && (
                                <p className="text-[9px] text-green-500 mt-1 font-semibold">✓ Custom translation</p>
                              )}
                            </button>
                          )}
                        </div>
                      );
                    })}

                    {/* Chorus */}
                    {hymn.chorus && (() => {
                      const fieldKey = `${hymn.number}-null`;
                      const isEditing = editingField === fieldKey;
                      const override = getOverride(hymn.number, null);

                      return (
                        <div className="space-y-2 pt-2 border-t border-border/50">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                              <Music size={10} /> Chorus
                            </span>
                            {override && <Check size={12} className="text-green-500" />}
                          </div>

                          <div className="p-3 rounded-xl bg-muted/50 border border-border/50">
                            <p className="text-[9px] font-bold text-primary uppercase tracking-widest mb-1">English (Reference)</p>
                            <p className="text-xs text-foreground/70 whitespace-pre-line leading-relaxed">{hymn.chorus.english}</p>
                          </div>

                          {isEditing ? (
                            <div className="space-y-2">
                              <textarea
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                rows={4}
                                className="w-full px-3 py-2 rounded-xl bg-card border-2 border-primary/30 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none font-serif"
                                placeholder="Enter correct Yorùbá chorus..."
                              />
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleSave(hymn.number, null)}
                                  disabled={saving}
                                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl gradient-primary text-primary-foreground text-xs font-semibold shadow-soft"
                                >
                                  <Save size={12} />
                                  {saving ? "Saving..." : "Save"}
                                </button>
                                <button
                                  onClick={() => setEditingField(null)}
                                  className="px-4 py-2 rounded-xl bg-muted text-xs font-semibold text-muted-foreground"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => startEdit(hymn.number, null, hymn.chorus!.yoruba)}
                              className="w-full p-3 rounded-xl bg-accent/5 border border-accent/20 text-left hover:bg-accent/10 transition-colors group"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <p className="text-[9px] font-bold text-accent uppercase tracking-widest">Yorùbá</p>
                                <Edit3 size={12} className="text-muted-foreground group-hover:text-accent transition-colors" />
                              </div>
                              <p className="text-xs text-foreground whitespace-pre-line leading-relaxed font-serif">
                                {override || hymn.chorus!.yoruba}
                              </p>
                              {override && (
                                <p className="text-[9px] text-green-500 mt-1 font-semibold">✓ Custom translation</p>
                              )}
                            </button>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
