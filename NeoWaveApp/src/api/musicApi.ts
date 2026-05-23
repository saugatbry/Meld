import type { Track } from '@/types/music';

const mock: Track[] = [
  { id: '1', title: 'Neon Skyline', artist: 'Aether', album: 'Liminal', art: '', durationMs: 210000, mood: 'night' },
  { id: '2', title: 'Shibuya Rain', artist: 'Kitsune Echo', album: 'Midnight Transit', art: '', durationMs: 192000, mood: 'chill' }
];

export const musicApi = {
  async trending(): Promise<Track[]> {
    return mock;
  },
  async search(query: string): Promise<Track[]> {
    return mock.filter((t) => t.title.toLowerCase().includes(query.toLowerCase()));
  }
};
