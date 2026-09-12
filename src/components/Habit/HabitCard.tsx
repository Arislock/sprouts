import React from 'react'
import { View, Text } from 'react-native'
import { colors } from '../../theme/colors'
import { SPACING } from '../../theme/spacing'
import {HabitCardIcon} from './HabitCardIcon'
import {HabitCardInfo} from './HabitCardInfo'
import { HabitCardStatus } from './HabitCardStatus'
import { Habit } from './Habit'

type HabitCardProps = {
  habit: Habit;
};

export const HabitCard = ({ habit } : HabitCardProps) => {
  return (
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
        <HabitCardIcon icon={habit.icon} />
        <HabitCardInfo
            name={habit.name}
            category={habit.category}
          />
        </View>
        <HabitCardStatus timesPerDay={habit.timesPerDay} />
      </View>
    </View>
  )
}
