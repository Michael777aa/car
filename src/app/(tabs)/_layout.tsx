// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { Colors } from '@/constants/Colors'; // Optional: Your custom color constants
import { FontAwesome5 } from '@expo/vector-icons';
export default function TabsLayout() {
  return (
    
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary || '#007AFF',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 85 : 70,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 10,
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          borderTopColor: '#ccc',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 4,
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          title: '홈',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="notice" 
        options={{
          title: '알림',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bullhorn" size={20} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="search" 
        options={{
          title: '검색',
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={22} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="reservation" 
        options={{
          title: '예약',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="calendar-today" size={22} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="mypage" 
        options={{
          title: '마이페이지',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" size={22} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}
