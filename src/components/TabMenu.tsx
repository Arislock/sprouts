import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { colors } from '../app/theme/colors'
import { typography } from '../app/theme/typography'
import { useState } from 'react'

type tabLabel = "habits" | "tasks";

type TabProps = {
    label: tabLabel;
    displayText: string;
    activeTab: tabLabel;
    onPress: (label: tabLabel) => void;
};

const Tab = ({ label, displayText, activeTab, onPress }: TabProps) => {
    const isActive = activeTab === label;

    return (
        <Pressable
            onPress={() => onPress(label)}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isActive ? colors.darkGreen : colors.white,
                padding: 8,
                borderRadius: 32,
            }}
        >
            <Text style={typography.smallBold}>{displayText}</Text>
        </Pressable>
    );
};

export const TabMenu = () => {
    const [activeTab, setActiveTab] = useState<tabLabel>("habits");

    return (
        <View
            style={{
                flexDirection: 'row',
                borderRadius: 32,
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: colors.lightGreen,
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 4,
                backgroundColor: colors.white,
            }}
        >
            <Tab label="habits" displayText="Habits" activeTab={activeTab} onPress={setActiveTab} />
            <Tab label="tasks" displayText="Tasks" activeTab={activeTab} onPress={setActiveTab} />
        </View>
    )
}
