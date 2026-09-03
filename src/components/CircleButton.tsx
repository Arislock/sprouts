import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { colors } from '@/theme/colors';

type CircleButtonProps = {
    icon: React.ReactNode;
    iconSize?: number;
    border?: boolean;
    onPress: () => void;
}

export const CircleButton = ({icon, iconSize, border, onPress } : CircleButtonProps) => {

  return (
    <TouchableOpacity style={{
        width: iconSize,
        height: iconSize,
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
