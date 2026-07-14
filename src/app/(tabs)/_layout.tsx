import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
  <Tabs>
    <Tabs.Screen name="index" options={{ headerShown: false, tabBarLabel: "Home" }} />
    <Tabs.Screen name="login" options={{ headerShown: false }} />
    </Tabs>
    );
}
