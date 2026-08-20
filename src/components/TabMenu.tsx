import React from 'react'
import { View, Pressable } from 'react-native'
import { colors } from '../app/theme/colors'
import { useState } from 'react'
import { DisplayText } from './DisplayText'

export type TabItem = {
    label: string;
    displayText: string;
};

type TabProps = {
    label: string;
    displayText: string;
    activeTab: string;
    onPress: (label: string) => void;
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
            <DisplayText value={displayText} variant='mediumBold' color={isActive ? colors.white : colors.black}/>
        </Pressable>
    );
};

type TabMenuProps = {
    tabs: TabItem[];
    defaultTab?: string;
    onChange?: (label: string) => void;
};

export const TabMenu = ({ tabs, defaultTab, onChange }: TabMenuProps) => {
    const [activeTab, setActiveTab] = useState<string>(defaultTab ?? tabs[0]?.label);

    const handlePress = (label: string) => {
        setActiveTab(label);
        onChange?.(label);
    };

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
            {tabs.map((tab) => (
                <Tab
                    key={tab.label}
                    label={tab.label}
                    displayText={tab.displayText}
                    activeTab={activeTab}
                    onPress={handlePress}
                />
            ))}
        </View>
    )
}
