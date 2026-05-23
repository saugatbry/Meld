import { create } from 'zustand';
import type { Track } from '@/types/music';

type PlayerState = {
  queue: Track[];
  current?: Track;
  isPlaying: boolean;
  setQueue: (tracks: Track[]) => void;
  playTrack: (track: Track) => void;
  toggle: () => void;
};

export const usePlayerStore = create<PlayerState>((set) => ({
  queue: [],
  isPlaying: false,
  setQueue: (queue) => set({ queue }),
  playTrack: (current) => set({ current, isPlaying: true }),
  toggle: () => set((s) => ({ isPlaying: !s.isPlaying }))
}));
