import React from 'react'
import { View, Text } from 'react-native'
import { colors } from '../../app/theme/colors'
import { SPACING } from '../../app/theme/spacing'
import {HabitCardIcon} from './HabitCardIcon'
import {HabitCardInfo} from './HabitCardInfo'
import { HabitCardStatus } from './HabitCardStatus'

export const HabitCard = () => {
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
        <HabitCardIcon/>
        <HabitCardInfo category='Morning'/>
        </View>
        <HabitCardStatus/>
      </View>


    </View>
  )
}
