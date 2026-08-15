import { Text, View } from "react-native";
import { TabMenu } from "../../components/TabMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import { SPACING } from "../theme/spacing";

export default function LoginScreen() {
    return (
        <SafeAreaView className="flex-1">
            
            <View style={{ padding: SPACING.xl }}>
                <Text>Hi</Text>
                <TabMenu />
            </View>
        
        </SafeAreaView>
    );
}