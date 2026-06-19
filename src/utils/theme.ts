import themes from '../../themes.json';

const THEME_KEY = 'terminal-portfolio-theme';
const MODE_KEY = 'terminal-portfolio-mode';

export type ThemeName = keyof typeof themes;
export type ThemeMode = 'light' | 'dark';

export const getThemeNames = (): ThemeName[] => {
  return Object.keys(themes) as ThemeName[];
};

export const getStoredTheme = (): ThemeName => {
  if (typeof window === 'undefined') return 'default';
  try {
    const stored = localStorage.getItem(THEME_KEY);  if (stored && stored in themes) return stored as ThemeName;
    } catch {
    // localStorage unavailable
  }
  return 'Nord';
};

export const getStoredMode = (): ThemeMode => {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = localStorage.getItem(MODE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    // localStorage unavailable
  }
  return 'dark';
};

export const setTheme = (name: ThemeName) => {
  localStorage.setItem(THEME_KEY, name);
  applyTheme(name, getStoredMode());
};

export const setMode = (mode: ThemeMode) => {
  localStorage.setItem(MODE_KEY, mode);
  applyTheme(getStoredTheme(), mode);
};



const themeColorsToCssVars = (colors: Record<string, string>, mode: ThemeMode) => {
  const el = document.documentElement;
  el.classList.remove('light', 'dark');
  el.classList.add(mode);

  // Set CSS variables for all color roles
  el.style.setProperty('--color-background', colors.background);
  el.style.setProperty('--color-foreground', colors.foreground);
  el.style.setProperty('--color-yellow', colors.yellow);
  el.style.setProperty('--color-green', colors.green);
  el.style.setProperty('--color-gray', colors.gray);
  el.style.setProperty('--color-blue', colors.blue);
  el.style.setProperty('--color-red', colors.red);
};

export const applyTheme = (name: ThemeName, mode: ThemeMode) => {
  if (typeof window === 'undefined') return;

  const theme = themes[name];
  if (!theme) {
    // Fall back to default theme
    const defaultTheme = themes.default;
    themeColorsToCssVars(defaultTheme[mode], mode);
    return;
  }

  themeColorsToCssVars(theme[mode], mode);
};
