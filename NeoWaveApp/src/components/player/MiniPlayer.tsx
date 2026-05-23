import { Pressable, Text, View } from 'react-native';
import { usePlayerStore } from '@/state/playerStore';

export function MiniPlayer() {
  const { current, isPlaying, toggle } = usePlayerStore();
  if (!current) return null;

  return (
    <View className="absolute bottom-24 left-4 right-4 bg-black/70 rounded-2xl p-4 border border-white/10">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-white font-semibold">{current.title}</Text>
          <Text className="text-zinc-400 text-xs">{current.artist}</Text>
        </View>
        <Pressable onPress={toggle}><Text className="text-neon">{isPlaying ? 'Pause' : 'Play'}</Text></Pressable>
      </View>
    </View>
  );
}
