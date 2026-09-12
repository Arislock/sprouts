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
import { useHabitStore } from '../store/useHabitStore';

export default function AddNewHabitScreen() {
  const addHabit = useHabitStore((state) => state.addHabit);

  return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ padding: SPACING.xl, gap: SPACING.md, display: "flex", flexDirection: "column" }}>
        <CircleButton border icon={<LeftArrow width={24} height={24} color={colors.darkGreen}/>} iconSize={24} onPress={() => router.back()}/>
        <DisplayText value="Add New Habit" variant="largeBold"/>
        <AddNewHabitCard
          onSave={(habit) => {
            addHabit(habit);
            router.back();
          }}
        />

        </View>
        </TouchableWithoutFeedback>

        </SafeAreaView>
    );
}
