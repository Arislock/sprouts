import React from 'react'
import { View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { SPACING } from '@/theme/spacing';
import { CircleButton } from '@/components/CircleButton';
import { colors } from '@/theme/colors';
import LeftArrow from '@/assets/icons/leftArrow.svg'
import { router } from 'expo-router';
import { DisplayText } from '@/components/DisplayText';
import { useHabitStore } from '../store/useHabitStore';
import { AddNewHabitCard } from '@/components/Habit/AddNewHabitCard';
import { Habit } from '@/components/Habit/Habit';

export default function EditHabitsScreen() {
  const habits = useHabitStore((state) => state.habits);
  const updateHabit = useHabitStore((state) => state.updateHabit);
  const deleteHabit = useHabitStore((state) => state.deleteHabit);

  return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ padding: SPACING.xl, gap: SPACING.md, display: "flex", flexDirection: "column" }}>
        <CircleButton border icon={<LeftArrow width={24} height={24} color={colors.darkGreen}/>} iconSize={24} onPress={() => router.back()}/>
        <DisplayText value="Edit Habits" variant="largeBold"/>
        
        {habits.map((habit) => (
          <AddNewHabitCard
            key={habit.id}
            habit={habit}
            onSave={(changes) => {
              updateHabit(habit.id, changes);
              router.back();
            }}
            onDelete={() => deleteHabit(habit.id)}
          />
        ))}

        </View>
        </TouchableWithoutFeedback>

        </SafeAreaView>
    );
}
