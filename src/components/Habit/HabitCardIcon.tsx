import React from 'react'
import { View, Text } from 'react-native'
import { colors } from '../../theme/colors'
import { DisplayText } from '../DisplayText'

type HabitCardIconProps = {
  icon: string | null;
};

export const HabitCardIcon = ({ icon }: HabitCardIconProps) => {
    return (
    <View style={{
        width: 60,
        height: 60,
        borderRadius: 12,
        backgroundColor: colors.lightGreen,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
    {icon ? <Text style={{ fontSize: 24, textAlign: 'center' }}>{icon}</Text> : <DisplayText value="🌱"/>}
    </View>
  )
}
