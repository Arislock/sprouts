import React from 'react'
import { View, TouchableOpacity, Switch } from 'react-native'
import {CircleButton} from '../CircleButton'
import { DisplayText } from '../DisplayText'
import { colors } from '@/theme/colors'

type HabitDetailRowProps = {
    icon: React.ReactNode;
    value: string;
    onPress: () => void;
    toggle?: boolean;
    toggleValue?: boolean;
    onToggleChange?: (value: boolean) => void;
    children?: React.ReactNode;
}

export const HabitDetailRow = ({icon, value, onPress, toggle, toggleValue, onToggleChange, children} : HabitDetailRowProps ) => {
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
    {toggle ? 
        <Switch 
        style={{
          transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
        }}
        value={toggleValue}
        onValueChange={onToggleChange}
        trackColor={{
          true: colors.darkGreen,
          false: colors.lightGreen
        }}
        />
        : null
      }

    </View>
    </TouchableOpacity>
  )
}
