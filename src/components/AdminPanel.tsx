import { useState } from "react";
import { ArrowLeft, Lock, Save, Check, Edit3, Music, ChevronDown, ChevronRight, Plus, Trash2, X, Heart } from "lucide-react";
import { hymns } from "@/data/hymns";
import { useHymnOverrides, saveHymnOverride } from "@/hooks/useHymnOverrides";
import { useCustomHymns, saveCustomHymn } from "@/hooks/useCustomHymns";
import { usePrayerRequests, markPrayerRead } from "@/hooks/usePrayerRequests";
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
  const { customHymns, loading: customLoading, refetch: refetchCustom } = useCustomHymns();
  const { requests: prayerRequests, loading: prayerLoading, refetch: refetchPrayer } = usePrayerRequests();
  const [expandedHymn, setExpandedHymn] = useState<number | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [saving, setSaving] = useState(false);
  const [editorName, setEditorName] = useState(() => localStorage.getItem("cod_editor_name") || "");
  const [showAddHymn, setShowAddHymn] = useState(false);
  const [activeTab, setActiveTab] = useState<"edit" | "add" | "prayers">("edit");

  // New hymn form state
  const [newHymnNumber, setNewHymnNumber] = useState("");
  const [newHymnTitle, setNewHymnTitle] = useState("");
  const [newHymnTitleYoruba, setNewHymnTitleYoruba] = useState("");
  const [newHymnKey, setNewHymnKey] = useState("");
  const [newHymnTempo, setNewHymnTempo] = useState("");
  const [newHymnSolfa, setNewHymnSolfa] = useState("");
  const [newHymnChords, setNewHymnChords] = useState("");
  const [newVerses, setNewVerses] = useState<{ english: string; yoruba: string }[]>([{ english: "", yoruba: "" }]);
  const [newChorusEnglish, setNewChorusEnglish] = useState("");
  const [newChorusYoruba, setNewChorusYoruba] = useState("");

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

  const addVerse = () => {
    setNewVerses([...newVerses, { english: "", yoruba: "" }]);
  };

  const removeVerse = (index: number) => {
    if (newVerses.length > 1) {
      setNewVerses(newVerses.filter((_, i) => i !== index));
    }
  };

  const updateVerse = (index: number, field: "english" | "yoruba", value: string) => {
    const updated = [...newVerses];
    updated[index] = { ...updated[index], [field]: value };
    setNewVerses(updated);
  };

  const resetForm = () => {
    setNewHymnNumber("");
    setNewHymnTitle("");
    setNewHymnTitleYoruba("");
    setNewHymnKey("");
    setNewHymnTempo("");
    setNewHymnSolfa("");
    setNewHymnChords("");
    setNewVerses([{ english: "", yoruba: "" }]);
    setNewChorusEnglish("");
    setNewChorusYoruba("");
  };

  const handleAddHymn = async () => {
    const num = parseInt(newHymnNumber);
    if (!num || !newHymnTitle.trim() || !newHymnTitleYoruba.trim()) {
      toast({ title: "Missing fields", description: "Please fill in the hymn number, English title, and Yorùbá title.", variant: "destructive" });
      return;
    }

    const existingNumbers = [...hymns.map(h => h.number), ...customHymns.map(h => h.number)];
    if (existingNumbers.includes(num)) {
      toast({ title: "Duplicate number", description: `Hymn #${num} already exists.`, variant: "destructive" });
      return;
    }

    const hasValidVerses = newVerses.some(v => v.english.trim() || v.yoruba.trim());
    if (!hasValidVerses) {
      toast({ title: "Missing verses", description: "Please add at least one verse.", variant: "destructive" });
      return;
    }

    setSaving(true);
    if (editorName) localStorage.setItem("cod_editor_name", editorName);

    const chorus = (newChorusEnglish.trim() || newChorusYoruba.trim())
      ? { english: newChorusEnglish.trim(), yoruba: newChorusYoruba.trim() }
      : null;

    const { error } = await saveCustomHymn({
      number: num,
      title: newHymnTitle.trim(),
      title_yoruba: newHymnTitleYoruba.trim(),
      verses: newVerses.filter(v => v.english.trim() || v.yoruba.trim()),
      chorus,
      solfa: newHymnSolfa.trim() || undefined,
      chords: newHymnChords.trim() || undefined,
      key: newHymnKey.trim() || undefined,
      tempo: newHymnTempo.trim() || undefined,
      created_by: editorName || undefined,
    });

    setSaving(false);

    if (error) {
      toast({ title: "Error saving hymn", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Hymn added!", description: `Hymn #${num} — ${newHymnTitle} saved successfully.` });
      resetForm();
      refetchCustom();
      setShowAddHymn(false);
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
            Enter the admin password to manage hymns.
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
          <h2 className="text-sm font-display">Admin Panel</h2>
          <p className="text-[10px] text-muted-foreground">Manage hymns and translations</p>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="px-4 pt-3 pb-1">
        <div className="flex gap-1 p-1 rounded-xl bg-muted/50 border border-border/50">
          <button
            onClick={() => setActiveTab("edit")}
            className={`flex-1 py-2 px-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "edit" ? "bg-card shadow-card text-foreground" : "text-muted-foreground"}`}
          >
            <Edit3 size={12} className="inline mr-1" />
            Edit
          </button>
          <button
            onClick={() => setActiveTab("add")}
            className={`flex-1 py-2 px-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "add" ? "bg-card shadow-card text-foreground" : "text-muted-foreground"}`}
          >
            <Plus size={12} className="inline mr-1" />
            Add
          </button>
          <button
            onClick={() => { setActiveTab("prayers"); refetchPrayer(); }}
            className={`flex-1 py-2 px-2 rounded-lg text-xs font-semibold transition-all relative ${activeTab === "prayers" ? "bg-card shadow-card text-foreground" : "text-muted-foreground"}`}
          >
            <Heart size={12} className="inline mr-1" />
            Prayers
            {prayerRequests.filter(r => !r.is_read).length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-[9px] font-bold flex items-center justify-center">
                {prayerRequests.filter(r => !r.is_read).length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Editor Name */}
      <div className="px-5 pt-3 pb-2">
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

      {/* ==================== ADD HYMN TAB ==================== */}
      {activeTab === "add" && (
        <div className="px-4 mt-2 space-y-4 animate-fade-in">
          {/* Custom hymns list */}
          {customHymns.length > 0 && (
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">
                Added Hymns ({customHymns.length})
              </p>
              {customHymns.map(h => (
                <div key={h.number} className="flex items-center gap-3 p-3 rounded-2xl bg-card border border-border shadow-card">
                  <div className="w-9 h-9 rounded-xl bg-green-500/15 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">{h.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{h.title}</p>
                    <p className="text-[10px] text-muted-foreground truncate italic font-serif">{h.titleYoruba}</p>
                  </div>
                  <span className="text-[9px] font-bold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Custom
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Add new hymn form */}
          {!showAddHymn ? (
            <button
              onClick={() => setShowAddHymn(true)}
              className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl border-2 border-dashed border-primary/30 text-primary hover:bg-primary/5 transition-colors"
            >
              <Plus size={18} />
              <span className="text-sm font-semibold">Add New Hymn</span>
            </button>
          ) : (
            <div className="rounded-2xl bg-card border border-border shadow-card overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-primary/5">
                <h3 className="text-sm font-display text-foreground">New Hymn</h3>
                <button onClick={() => { setShowAddHymn(false); resetForm(); }} className="p-1.5 rounded-lg hover:bg-muted transition-colors">
                  <X size={16} className="text-muted-foreground" />
                </button>
              </div>

              <div className="p-4 space-y-4">
                {/* Basic info */}
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 block">Hymn #</label>
                    <input
                      type="number"
                      value={newHymnNumber}
                      onChange={(e) => setNewHymnNumber(e.target.value)}
                      placeholder="71"
                      className="w-full px-3 py-2 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 block">Key</label>
                    <input
                      type="text"
                      value={newHymnKey}
                      onChange={(e) => setNewHymnKey(e.target.value)}
                      placeholder="C Major"
                      className="w-full px-3 py-2 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 block">Tempo</label>
                    <input
                      type="text"
                      value={newHymnTempo}
                      onChange={(e) => setNewHymnTempo(e.target.value)}
                      placeholder="Moderato"
                      className="w-full px-3 py-2 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 block">Title (English)</label>
                  <input
                    type="text"
                    value={newHymnTitle}
                    onChange={(e) => setNewHymnTitle(e.target.value)}
                    placeholder="e.g. Amazing Grace"
                    className="w-full px-3 py-2 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 block">Title (Yorùbá)</label>
                  <input
                    type="text"
                    value={newHymnTitleYoruba}
                    onChange={(e) => setNewHymnTitleYoruba(e.target.value)}
                    placeholder="e.g. Oore-Ofe Iyanu"
                    className="w-full px-3 py-2 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 font-serif italic"
                  />
                </div>

                {/* Verses */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Verses</label>
                    <button onClick={addVerse} className="flex items-center gap-1 text-[10px] font-semibold text-primary hover:text-primary/80 transition-colors">
                      <Plus size={12} /> Add Verse
                    </button>
                  </div>

                  {newVerses.map((verse, i) => (
                    <div key={i} className="p-3 rounded-xl bg-muted/30 border border-border/50 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Verse {i + 1}</span>
                        {newVerses.length > 1 && (
                          <button onClick={() => removeVerse(i)} className="p-1 rounded-lg hover:bg-destructive/10 transition-colors">
                            <Trash2 size={12} className="text-destructive" />
                          </button>
                        )}
                      </div>
                      <textarea
                        value={verse.english}
                        onChange={(e) => updateVerse(i, "english", e.target.value)}
                        placeholder="English lyrics..."
                        rows={3}
                        className="w-full px-3 py-2 rounded-xl bg-card border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 resize-none"
                      />
                      <textarea
                        value={verse.yoruba}
                        onChange={(e) => updateVerse(i, "yoruba", e.target.value)}
                        placeholder="Yorùbá lyrics..."
                        rows={3}
                        className="w-full px-3 py-2 rounded-xl bg-card border border-primary/10 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 resize-none font-serif italic"
                      />
                    </div>
                  ))}
                </div>

                {/* Chorus */}
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                    <Music size={10} /> Chorus (Optional)
                  </label>
                  <textarea
                    value={newChorusEnglish}
                    onChange={(e) => setNewChorusEnglish(e.target.value)}
                    placeholder="English chorus..."
                    rows={3}
                    className="w-full px-3 py-2 rounded-xl bg-card border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 resize-none"
                  />
                  <textarea
                    value={newChorusYoruba}
                    onChange={(e) => setNewChorusYoruba(e.target.value)}
                    placeholder="Yorùbá chorus..."
                    rows={3}
                    className="w-full px-3 py-2 rounded-xl bg-card border border-primary/10 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 resize-none font-serif italic"
                  />
                </div>

                {/* Solfa */}
                <div>
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 block">Solfa Notation (Optional)</label>
                  <textarea
                    value={newHymnSolfa}
                    onChange={(e) => setNewHymnSolfa(e.target.value)}
                    placeholder="d d m m s s, l l l s f m..."
                    rows={4}
                    className="w-full px-3 py-2 rounded-xl bg-muted/50 border border-border text-xs text-foreground font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 resize-none"
                  />
                </div>

                {/* Chords */}
                <div>
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 block">Chord Progression (Optional)</label>
                  <textarea
                    value={newHymnChords}
                    onChange={(e) => setNewHymnChords(e.target.value)}
                    placeholder="D - G | A7 - D..."
                    rows={3}
                    className="w-full px-3 py-2 rounded-xl bg-muted/50 border border-border text-xs text-foreground font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 resize-none"
                  />
                </div>

                {/* Save Button */}
                <button
                  onClick={handleAddHymn}
                  disabled={saving}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl gradient-primary text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-elevated transition-all disabled:opacity-50"
                >
                  <Save size={14} />
                  {saving ? "Saving Hymn..." : "Save Hymn"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ==================== EDIT LYRICS TAB ==================== */}
      {activeTab === "edit" && (
        <div className="px-4 mt-2 space-y-2">
          {loading || customLoading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Loading hymns...</p>
            </div>
          ) : (
            [...hymns, ...customHymns].map((hymn) => {
              const isExpanded = expandedHymn === hymn.number;
              const hasOverrides = overrides.some((o) => o.hymn_number === hymn.number);
              const isCustom = customHymns.some(c => c.number === hymn.number);

              return (
                <div key={hymn.number} className="rounded-2xl bg-card border border-border shadow-card overflow-hidden">
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
                    {isCustom && (
                      <span className="text-[9px] font-bold text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Custom
                      </span>
                    )}
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

                  {isExpanded && (
                    <div className="border-t border-border/50 px-4 py-4 space-y-4 animate-fade-in">
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
                              {override && <Check size={12} className="text-green-500" />}
                            </div>
                            
                            <div className="p-3 rounded-xl bg-muted/50 border border-border/50">
                              <p className="text-[9px] font-bold text-primary uppercase tracking-widest mb-1">English (Reference)</p>
                              <p className="text-xs text-foreground/70 whitespace-pre-line leading-relaxed">{verse.english}</p>
                            </div>

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
      )}
    </div>
  );
};

export default AdminPanel;
