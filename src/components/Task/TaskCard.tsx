import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { colors } from '../../theme/colors'
import { SPACING } from '../../theme/spacing'
import { HabitCardStatus } from './HabitCardStatus'
import { Habit } from './Habit'
import { useHabitStore } from '@/app/store/useHabitStore'
import { TaskCardInfo } from './TaskCardInfo'

type HabitCardProps = {
  habit: Habit;
};

export const HabitCard = ({ habit } : HabitCardProps) => {
  const decrementHabit = useHabitStore((state) => state.decrementHabit);
  const completed = habit.remaining === 0;

  return (
    <Pressable onPress={() => decrementHabit(habit.id)}>
    <View
    style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: colors.lightGreen,
        padding: SPACING.sm,
        borderRadius: 16,
        alignItems: 'center',
    }}
    >
      <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8
          }}>
        <TaskCardInfo
            name={habit.name}
            category={habit.category}
          />
        </View>
        <HabitCardStatus timesPerDay={habit.remaining} completed={completed}/>
      </View>
    </View>
    </Pressable>
  )
}
