import React from 'react'
import { View } from 'react-native'
import { DisplayText } from '../DisplayText'
import { colors } from '@/theme/colors'

export const HabitCardStatus = () => {
  return (
    <View
    style={{
      width: 36,
      height: 36,
      borderRadius: 32,
      borderColor: colors.lightGreen,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    }}>

    <DisplayText
    style={{

    }}
    value="1"
    />

      
    </View>
  )
}
