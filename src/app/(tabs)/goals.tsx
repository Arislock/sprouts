import { useState } from "react";
import { View } from "react-native";
import { TabMenu } from "../../components/TabMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import { SPACING } from "../../theme/spacing";
import { Button } from "../../components/Button";
import {HabitCard} from "../../components/Habit/HabitCard";
import { colors } from "../../theme/colors";
import PlusIcon from "../../../assets/icons/plus.svg"
import EditIcon from "../../../assets/icons/edit.svg"
import { router } from "expo-router";
import {useHabitStore} from "../store/useHabitStore";

export default function LoginScreen() {
    const [activeTab, setActiveTab] = useState<string>("habits");
    const habits = useHabitStore((state) => state.habits);

    const [isAddHabitOpen, setIsAddHabitOpen] = useState(false);
    
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

                {activeTab === "habits" ? (
                <>
                {habits.map((habit) => (
                    <HabitCard key={habit.id} habit={habit} />
                ))}

            <View style={{
                display: "flex",
                flexDirection: "row",
                gap: SPACING.sm,
            }}>
                <Button
                    value="Add New Habit"
                    border
                    textColor={colors.darkGreen}
                    bgColor={colors.white}
                    style={{ flex: 1 }}
                    icon={<PlusIcon width={16} height={16} color={colors.darkGreen}/>}
                    onPress={() => {
                        router.push("../screens/AddNewHabitScreen");
                        }}
                />
                <Button
                    value="Edit Habits"
                    border
                    textColor={colors.darkGreen}
                    bgColor={colors.white}
                    style={{ flex: 1 }}
                    icon={<EditIcon width={16} height={16} color={colors.darkGreen}/>}
                    onPress={() => {
                        router.push("../screens/AddNewHabitScreen");
                        }}
                />
            </View>
                </>
            ) : null}
            </View>

        </SafeAreaView>
    );
}