import React from 'react'
import { View } from 'react-native'
import { DisplayText } from '../DisplayText'
import { colors } from '@/theme/colors'
import CheckIcon from '@/assets/icons/check.svg'

type HabitCardStatusProps = {
  timesPerDay: number;
  completed?: boolean;
};

export const HabitCardStatus = ({ timesPerDay, completed } : HabitCardStatusProps) => {
  return (
    <View
    style={{
      width: 36,
      height: 36,
      borderRadius: 32,
      borderColor: colors.lightGreen,
      backgroundColor: completed ? colors.lightGreen : 'transparent',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    }}>

    {completed ? (
    <CheckIcon width={24} height={24} color={colors.white}/>
    ) : (
    <DisplayText
    value={timesPerDay.toString()}
    color={colors.darkGreen}/>
    )}
    </View>
  )
}
