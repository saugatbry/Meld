import { create } from 'zustand';

export type AppTheme = 'dark' | 'neon' | 'anime-night';

export const useThemeStore = create<{ theme: AppTheme; setTheme: (theme: AppTheme) => void }>((set) => ({
  theme: 'neon',
  setTheme: (theme) => set({ theme })
}));
