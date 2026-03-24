// KJV Bible API integration with localStorage caching
const CACHE_KEY = 'cod_bible_cache';
const API_BASE = 'https://bible-api.com';

interface BibleApiResponse {
  reference: string;
  verses: Array<{
    book_id: string;
    book_name: string;
    chapter: number;
    verse: number;
    text: string;
  }>;
  text: string;
  translation_id: string;
  translation_name: string;
  translation_note: string;
}

export interface BibleVerse {
  verse: number;
  text: string;
}

function getCache(): Record<string, BibleVerse[]> {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function setCache(key: string, verses: BibleVerse[]): void {
  try {
    const cache = getCache();
    cache[key] = verses;
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // Storage full — clear old entries
    try {
      localStorage.removeItem(CACHE_KEY);
      const fresh: Record<string, BibleVerse[]> = { [key]: verses };
      localStorage.setItem(CACHE_KEY, JSON.stringify(fresh));
    } catch {
      // ignore
    }
  }
}

// Map book names to API-friendly format
function formatBookName(book: string): string {
  return book.replace(/\s+/g, '+');
}

export async function fetchChapter(book: string, chapter: number): Promise<BibleVerse[]> {
  const cacheKey = `${book}:${chapter}`;
  
  // Check cache first
  const cached = getCache()[cacheKey];
  if (cached && cached.length > 0) return cached;

  try {
    const query = `${formatBookName(book)}+${chapter}`;
    const response = await fetch(`${API_BASE}/${query}?translation=kjv`);
    
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    
    const data: BibleApiResponse = await response.json();
    
    const verses: BibleVerse[] = data.verses.map(v => ({
      verse: v.verse,
      text: v.text.trim(),
    }));

    // Cache for offline use
    setCache(cacheKey, verses);
    
    return verses;
  } catch (error) {
    // If offline, try cache again
    const cached2 = getCache()[cacheKey];
    if (cached2) return cached2;
    
    throw error;
  }
}
