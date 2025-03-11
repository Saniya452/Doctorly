import { Tabs } from 'expo-router';

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="signup" options={{ headerShown: false }} />
      <Tabs.Screen name="login" options={{ headerShown: false }} />
      <Tabs.Screen name="info" options={{ headerShown: false }} />
      <Tabs.Screen name="generalQues" options={{ headerShown: false }} />
      <Tabs.Screen name="mcqs" options={{ headerShown: false }} />
    </Tabs>
  );
}
