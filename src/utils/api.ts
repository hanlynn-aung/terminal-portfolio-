import axios from 'axios';
import config from '../../config.json';
import { fallbackQuotes } from './quotes';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

const QUOTE_CACHE_KEY = 'terminal-portfolio-quotes';
const MAX_CACHE_SIZE = 15;

const getCachedQuotes = (): string[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(QUOTE_CACHE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const addQuoteToCache = (formatted: string) => {
  if (typeof window === 'undefined') return;
  try {
    const cache = getCachedQuotes();
    // Avoid duplicates
    if (cache.includes(formatted)) return;
    cache.push(formatted);
    // Keep only the latest MAX_CACHE_SIZE
    const trimmed = cache.slice(-MAX_CACHE_SIZE);
    localStorage.setItem(QUOTE_CACHE_KEY, JSON.stringify(trimmed));
  } catch {
    // localStorage full or unavailable — cache silently fails
  }
};

const pickFromCache = (): string | null => {
  const cache = getCachedQuotes();
  if (cache.length === 0) return null;
  const idx = Math.floor(Math.random() * cache.length);
  const picked = cache[idx];
  // Remove picked quote so we cycle through them
  cache.splice(idx, 1);
  localStorage.setItem(QUOTE_CACHE_KEY, JSON.stringify(cache));
  return picked;
};

const seedCache = async (): Promise<string | null> => {
  try {
    const { data } = await axios.get('https://dummyjson.com/quotes?limit=15');
    const quotes = data.quotes as Array<{ quote: string; author: string }>;
    if (!quotes || quotes.length === 0) return null;

    const formatted = quotes.map((q) => `“${q.quote}” — ${q.author}`);
    // Add all but the first to cache; return the first as today's quote
    for (let i = 1; i < formatted.length; i++) {
      addQuoteToCache(formatted[i]);
    }
    return formatted[0];
  } catch {
    return null;
  }
};

export const getQuote = async () => {
  // Try cache first
  const cached = pickFromCache();
  if (cached) {
    return { quote: cached };
  }

  // Cache empty — batch-fetch to seed it
  const seeded = await seedCache();
  if (seeded) {
    return { quote: seeded };
  }

  // API failed — use local fallback
  const random = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
  return {
    quote: `“${random.quote}” — ${random.author}`,
  };
};

const matchAuthor = (author: string, query: string): boolean =>
  author.toLowerCase().includes(query.toLowerCase());

export const getQuoteByAuthor = async (authorQuery: string): Promise<{ quote: string } | null> => {
  if (!authorQuery.trim()) return null;

  // 1. Search local fallback quotes first (fast, no network)
  const localMatches = fallbackQuotes.filter((q) =>
    matchAuthor(q.author, authorQuery),
  );
  if (localMatches.length > 0) {
    const pick = localMatches[Math.floor(Math.random() * localMatches.length)];
    return { quote: `“${pick.quote}” — ${pick.author}` };
  }

  // 2. Fetch a large random batch from the API and filter
  try {
    const totalQuotes = 1454;
    const batchSize = 150;
    const randomSkip = Math.floor(Math.random() * (totalQuotes - batchSize));
    const { data } = await axios.get(
      `https://dummyjson.com/quotes?limit=${batchSize}&skip=${randomSkip}`,
    );
    const apiMatches = (data.quotes as Array<{ quote: string; author: string }>).filter((q) =>
      matchAuthor(q.author, authorQuery),
    );
    if (apiMatches.length > 0) {
      const pick = apiMatches[Math.floor(Math.random() * apiMatches.length)];
      const formatted = `“${pick.quote}” — ${pick.author}`;
      addQuoteToCache(formatted);
      return { quote: formatted };
    }
  } catch {
    // API failed — fall through to return null
  }

  return null;
};
