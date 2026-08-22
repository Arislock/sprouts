import { useState } from "react";
import { Text, View } from "react-native";
import { TabMenu } from "../../components/TabMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import { SPACING } from "../../theme/spacing";
import { Button } from "../../components/Button";
import {HabitCard} from "../../components/Habit/HabitCard";
import { BottomModal } from "../../components/BottomModal";
import { colors } from "../../theme/colors";
import PlusIcon from "../../../assets/icons/plus.svg"
import EditIcon from "../../../assets/icons/edit.svg"
import { router } from "expo-router";


export default function LoginScreen() {
    const [isAddHabitOpen, setIsAddHabitOpen] = useState(false);

    return (
        <SafeAreaView className="flex-1">
            
            <View style={{ padding: SPACING.xl }}>
                <Text>Hi</Text>
                <TabMenu
                    tabs={[
                        { label: "habits", displayText: "Habits" },
                        { label: "tasks", displayText: "Tasks" },
                    ]}
                />

                <HabitCard/>

            <View style={{
                display: "flex",
                flexDirection: "row",
                gap: SPACING.sm,
            }}>
                <Button
                    displayText="Add New Habit"
                    border
                    textColor={colors.darkGreen}
                    bgColor={colors.white}
                    style={{ flex: 1 }}
                    icon={<PlusIcon width={16} height={16} color={colors.darkGreen}/>}
                    onPress={() => setIsAddHabitOpen(true)}
                />
                <Button
                    displayText="Edit Habits"
                    border
                    textColor={colors.darkGreen}
                    bgColor={colors.white}
                    style={{ flex: 1 }}
                    icon={<EditIcon width={16} height={16} color={colors.darkGreen}/>}
                    onPress={() => {
                        router.push("../screens/ManageHabitsScreen");
                        }}
                />
            </View>
            </View>

        </SafeAreaView>
    );
}