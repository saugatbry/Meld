import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { RootNavigator } from '@/navigation/RootNavigator';
import { useThemeStore } from '@/state/themeStore';

export default function App() {
  const theme = useThemeStore((s) => s.theme);

  return (
    <NavigationContainer>
      <StatusBar style={theme === 'neon' ? 'light' : 'auto'} />
      <RootNavigator />
    </NavigationContainer>
  );
}
