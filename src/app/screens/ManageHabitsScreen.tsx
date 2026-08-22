import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { SPACING } from '@/theme/spacing';
import { CircleButton } from '@/components/CircleButton';
import { colors } from '@/theme/colors';
import LeftArrow from '@/assets/icons/leftArrow.svg'
import { router } from 'expo-router';
import { DisplayText } from '@/components/DisplayText';
import { ManageHabitCard } from '@/components/Habit/ManageHabitCard';

export default function ManageHabitsScreen() {
  return (
        <SafeAreaView className="flex-1">

        <View style={{ padding: SPACING.xl }}>
        <CircleButton border icon={<LeftArrow width={24} height={24} color={colors.darkGreen}/>} onPress={() => router.back()}/>
        <DisplayText value="Manage Habits" variant="largeBold"/>
        <ManageHabitCard/>
        
        </View>

        </SafeAreaView>
    );
}
