import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@/features/home/HomeScreen';
import { SearchScreen } from '@/features/search/SearchScreen';
import { LibraryScreen } from '@/features/library/LibraryScreen';
import { ProfileScreen } from '@/features/profile/ProfileScreen';
import { SettingsScreen } from '@/features/settings/SettingsScreen';
import { MiniPlayer } from '@/components/player/MiniPlayer';

const Tab = createBottomTabNavigator();

export function RootNavigator() {
  return (
    <>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { position: 'absolute', backgroundColor: '#090A17EE', borderTopWidth: 0, height: 76 } }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      <MiniPlayer />
    </>
  );
}
