export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  art: string;
  durationMs: number;
  mood: 'focus' | 'chill' | 'night' | 'hype';
};

export type Playlist = {
  id: string;
  name: string;
  collaborative: boolean;
  coverGradient: [string, string];
  trackIds: string[];
};
