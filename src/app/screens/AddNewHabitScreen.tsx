import React from 'react'
import { View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { SPACING } from '@/theme/spacing';
import { CircleButton } from '@/components/CircleButton';
import { colors } from '@/theme/colors';
import LeftArrow from '@/assets/icons/leftArrow.svg'
import { router } from 'expo-router';
import { DisplayText } from '@/components/DisplayText';
import { AddNewHabitCard } from '@/components/Habit/AddNewHabitCard';

export default function AddNewHabitScreen() {
  return (
        <SafeAreaView className="flex-1">

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ padding: SPACING.xl, gap: SPACING.md, display: "flex", flexDirection: "column" }}>
        <CircleButton border icon={<LeftArrow width={24} height={24} color={colors.darkGreen}/>} iconSize={24} onPress={() => router.back()}/>
        <DisplayText value="Add New Habit" variant="largeBold"/>
        <AddNewHabitCard/>

        </View>
        </TouchableWithoutFeedback>

        </SafeAreaView>
    );
}
