import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
  <Tabs>
    <Tabs.Screen name="index" options={{ headerShown: false, tabBarLabel: "Home" }} />
    <Tabs.Screen name="goals" options={{ headerShown: false, tabBarLabel: "Goals" }} />
    </Tabs>
    );
}
