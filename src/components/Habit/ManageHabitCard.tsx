import React from 'react'
import { View, Text } from 'react-native'
import { colors } from '../../theme/colors'
import { SPACING } from '../../theme/spacing'
import { RoundedButton } from '../RoundedButton'
import EditIcon from '@/assets/icons/edit.svg'

export const ManageHabitCard = () => {
  return (
    <View
    style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.lightGreen,
        padding: SPACING.sm,
        borderRadius: 24,
        alignItems: 'center',
    }}
    >
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <RoundedButton icon={EditIcon} size={48}/>
        
        </View>
      


    </View>
  )
}
