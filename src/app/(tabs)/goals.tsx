import { Text, View } from "react-native";
import { TabMenu } from "../../components/TabMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import { SPACING } from "../theme/spacing";
import { Button } from "../../components/Button";
import {HabitCard} from "../../components/Habit/HabitCard";

export default function LoginScreen() {
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
                <Button displayText="Hi"/>

                <HabitCard/>
            </View>
        
        </SafeAreaView>
    );
}