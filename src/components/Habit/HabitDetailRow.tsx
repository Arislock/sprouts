import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import {CircleButton} from '../CircleButton'
import { DisplayText } from '../DisplayText'

type HabitDetailRowProps = {
    icon: React.ReactNode;
    value: string;
    onPress: () => void;
}

export const HabitDetailRow = ({icon, value, onPress} : HabitDetailRowProps ) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: '100%'}}> 
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    }}>
        <CircleButton icon={icon} size={24} iconSize={16}/>
        <DisplayText value={value} variant="smallReg"/>
    </View>
    </TouchableOpacity>
  )
}
