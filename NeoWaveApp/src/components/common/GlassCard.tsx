import { PropsWithChildren } from 'react';
import { BlurView } from 'expo-blur';
import { View } from 'react-native';

export function GlassCard({ children }: PropsWithChildren) {
  return (
    <BlurView intensity={25} tint="dark" className="rounded-3xl overflow-hidden border border-white/10">
      <View className="p-4">{children}</View>
    </BlurView>
  );
}
