// app/mypage.tsx
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, ActivityIndicator } from 'react-native';

// TODO: Replace this with real auth logic
const isAuthenticated = false; // mock — check token or auth state

export default function MyPageScreen() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/(auth)/signin'); // Replace so user can't go back
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome to My Page</Text>
    </View>
  );
}
