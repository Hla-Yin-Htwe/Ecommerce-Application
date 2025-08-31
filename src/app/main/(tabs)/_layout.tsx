import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#a21caf',
      tabBarInactiveTintColor: 'gray',
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: keyof typeof Ionicons.glyphMap;

        switch (route.name) {
          case 'home':
            iconName = focused ? 'home' : 'home-outline';
            break;
          case 'explore':
            iconName = focused ? 'search' : 'search-outline';
            break;
          case 'cart':
            iconName = focused ? 'cart' : 'cart-outline';
            break;
          case 'notification':
            iconName = focused ? 'notifications' : 'notifications-outline';
            break;
          case 'profile':
            iconName = focused ? 'person' : 'person-outline';
            break;
          default:
            iconName = 'ellipse';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      {/* <Tabs.Screen name="wish" options={{ title: 'Wishlist' }} /> */}
      <Tabs.Screen name="cart" options={{ title: 'Cart' }} />
      <Tabs.Screen name="notification" options={{ title: 'Notification' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
