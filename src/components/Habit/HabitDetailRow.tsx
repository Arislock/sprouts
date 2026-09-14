import React from 'react'
import { View, TouchableOpacity, Switch } from 'react-native'
import {CircleButton} from '../CircleButton'
import { DisplayText } from '../DisplayText'

type HabitDetailRowProps = {
    icon: React.ReactNode;
    value: string;
    onPress: () => void;
    children?: React.ReactNode;
}

export const HabitDetailRow = ({icon, value, onPress, children} : HabitDetailRowProps ) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: '100%'}}> 
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 24,
    }}>
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    }}>
        <CircleButton icon={icon} size={24} iconSize={16}/>
        
        {children ? children : <DisplayText value={value} variant="smallReg"/>}
      </View>
    </View>
    </TouchableOpacity>
  )
}
