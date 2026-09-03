import React from 'react'
import { View } from 'react-native'
import {CircleButton} from '../CircleButton'
import EditIcon from '@/assets/icons/edit.svg'
import { DisplayText } from '../DisplayText'

export const HabitDetailRow = () => {
  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    }}>
        <CircleButton icon={<EditIcon/>} iconSize={32} onPress={() => {}}/>
        <DisplayText value="Category" variant="mediumBold"/>
    </View>
  )
}
