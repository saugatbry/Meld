import { useEffect, useState } from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { musicApi } from '@/api/musicApi';
import { usePlayerStore } from '@/state/playerStore';
import type { Track } from '@/types/music';

export function HomeScreen() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const playTrack = usePlayerStore((s) => s.playTrack);
  useEffect(() => { void musicApi.trending().then(setTracks); }, []);

  return (
    <LinearGradient colors={['#090A17', '#12142B', '#07070A']} className="flex-1 pt-16 px-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-white text-3xl font-bold mb-4">NeoWave</Text>
        {tracks.map((track, i) => (
          <Animated.View key={track.id} entering={FadeInDown.delay(i * 90)} className="mb-3">
            <Pressable onPress={() => playTrack(track)} className="rounded-3xl bg-white/5 border border-white/10 p-4">
              <Text className="text-white font-semibold">{track.title}</Text>
              <Text className="text-zinc-400">{track.artist} • {track.album}</Text>
            </Pressable>
          </Animated.View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}
