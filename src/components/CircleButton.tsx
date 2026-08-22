import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { colors } from '@/theme/colors';

type CircleButtonProps = {
    icon: React.ReactNode;
    border?: boolean;
    onPress: () => void;
}

export const CircleButton = ({icon, border, onPress } : CircleButtonProps) => {

  return (
    <TouchableOpacity style={{
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: border ? 2 : undefined,
        borderColor: border ? colors.lightGreen : undefined,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    }}
    onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  )
}
