// Simple localStorage-based store for offline-first
const KEYS = {
  FAVORITES: 'cod_favorites',
  NOTES: 'cod_notes',
  LAST_HYMN: 'cod_last_hymn',
  LAST_BIBLE: 'cod_last_bible',
  FONT_SIZE: 'cod_font_size',
  DARK_MODE: 'cod_dark_mode',
  BOOKMARKS: 'cod_bookmarks',
};

export interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  updatedAt: string;
}

export interface BiblePosition {
  book: string;
  chapter: number;
}

// Favorites
export function getFavorites(): number[] {
  const raw = localStorage.getItem(KEYS.FAVORITES);
  return raw ? JSON.parse(raw) : [];
}

export function toggleFavorite(hymnNumber: number): boolean {
  const favs = getFavorites();
  const idx = favs.indexOf(hymnNumber);
  if (idx >= 0) {
    favs.splice(idx, 1);
  } else {
    favs.push(hymnNumber);
  }
  localStorage.setItem(KEYS.FAVORITES, JSON.stringify(favs));
  return idx < 0;
}

export function isFavorite(hymnNumber: number): boolean {
  return getFavorites().includes(hymnNumber);
}

// Notes
export function getNotes(): Note[] {
  const raw = localStorage.getItem(KEYS.NOTES);
  return raw ? JSON.parse(raw) : [];
}

export function saveNote(note: Note): void {
  const notes = getNotes();
  const idx = notes.findIndex(n => n.id === note.id);
  if (idx >= 0) {
    notes[idx] = note;
  } else {
    notes.unshift(note);
  }
  localStorage.setItem(KEYS.NOTES, JSON.stringify(notes));
}

export function deleteNote(id: string): void {
  const notes = getNotes().filter(n => n.id !== id);
  localStorage.setItem(KEYS.NOTES, JSON.stringify(notes));
}

// Last opened
export function setLastHymn(num: number): void {
  localStorage.setItem(KEYS.LAST_HYMN, String(num));
}
export function getLastHymn(): number | null {
  const v = localStorage.getItem(KEYS.LAST_HYMN);
  return v ? Number(v) : null;
}

export function setLastBible(pos: BiblePosition): void {
  localStorage.setItem(KEYS.LAST_BIBLE, JSON.stringify(pos));
}
export function getLastBible(): BiblePosition | null {
  const raw = localStorage.getItem(KEYS.LAST_BIBLE);
  return raw ? JSON.parse(raw) : null;
}

// Font size
export function getFontSize(): number {
  const v = localStorage.getItem(KEYS.FONT_SIZE);
  return v ? Number(v) : 18;
}
export function setFontSize(size: number): void {
  localStorage.setItem(KEYS.FONT_SIZE, String(size));
}

// Dark mode
export function getDarkMode(): boolean {
  const v = localStorage.getItem(KEYS.DARK_MODE);
  return v === 'true';
}
export function setDarkMode(on: boolean): void {
  localStorage.setItem(KEYS.DARK_MODE, String(on));
  if (on) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// Bookmarks
export function getBookmarks(): string[] {
  const raw = localStorage.getItem(KEYS.BOOKMARKS);
  return raw ? JSON.parse(raw) : [];
}

export function toggleBookmark(ref: string): boolean {
  const bm = getBookmarks();
  const idx = bm.indexOf(ref);
  if (idx >= 0) bm.splice(idx, 1);
  else bm.push(ref);
  localStorage.setItem(KEYS.BOOKMARKS, JSON.stringify(bm));
  return idx < 0;
}
