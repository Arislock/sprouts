import React, { useState } from 'react'
import { View, TouchableOpacity, Switch } from 'react-native'
import {CircleButton} from '../CircleButton'
import { DisplayText } from '../DisplayText'
import { colors } from '@/theme/colors'

type HabitDetailRowProps = {
    icon: React.ReactNode;
    value: string;
    onPress: () => void;
    toggle?: boolean;
    children?: React.ReactNode;
}

export const HabitDetailRow = ({icon, value, onPress, toggle, children} : HabitDetailRowProps ) => {
  const [isEnabled, setIsEnabled] = useState(false);

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
        value={isEnabled}
        onValueChange={setIsEnabled}
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
