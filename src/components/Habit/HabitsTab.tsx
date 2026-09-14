import { View } from "react-native";
import { router } from "expo-router";
import { SPACING } from "../../theme/spacing";
import { colors } from "../../theme/colors";
import { Button } from "../Button";
import { HabitCard } from "./HabitCard";
import { useHabitStore } from "../../app/store/useHabitStore";
import PlusIcon from "@/assets/icons/plus.svg";
import EditIcon from "@/assets/icons/edit.svg";

export const HabitsTab = () => {
    const habits = useHabitStore((state) => state.habits);

    const sortedHabits = [...habits].sort(
        (a, b) => Number(a.remaining === 0) - Number(b.remaining === 0)
    );

    return (
        <>
            {sortedHabits.map((habit) => (
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
                        router.push("../screens/EditHabitsScreen");
                        }}
                />
            </View>
        </>
    );
}
