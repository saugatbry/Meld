import { Pressable, Text, View } from 'react-native';
import { useThemeStore, AppTheme } from '@/state/themeStore';

const themes: AppTheme[] = ['dark', 'neon', 'anime-night'];

export function SettingsScreen() {
  const { theme, setTheme } = useThemeStore();
  return <View className="flex-1 bg-ink pt-16 px-4"><Text className="text-white text-2xl mb-6">Theme</Text>{themes.map((t) => <Pressable key={t} onPress={() => setTheme(t)} className="p-4 rounded-2xl bg-white/10 mb-3"><Text className="text-white">{t} {theme === t ? '✓' : ''}</Text></Pressable>)}</View>;
}
