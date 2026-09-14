import { useState } from "react";
import { View } from "react-native";
import { TabMenu } from "../../components/TabMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import { SPACING } from "../../theme/spacing";
import { colors } from "../../theme/colors";
import { HabitsTab } from "../../components/Habit/HabitsTab";
import { TasksTab } from "@/components/Task/TasksTab";

export default function LoginScreen() {
    const [activeTab, setActiveTab] = useState<string>("habits");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>

            <View style={{ padding: SPACING.xl, gap: SPACING.md, display: "flex", flexDirection: "column" }}>
                <TabMenu
                    tabs={[
                        { label: "habits", displayText: "Habits" },
                        { label: "tasks", displayText: "Tasks" },
                    ]}
                    defaultTab="habits"
                    onChange={(label) => setActiveTab(label)}
                />

                {activeTab === "habits" ? <HabitsTab/> : <TasksTab/>}
            </View>

        </SafeAreaView>
    );
}
