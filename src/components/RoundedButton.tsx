import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { colors } from '@/theme/colors';

type RoundedButtonProps = {
    icon: React.ReactNode;
    border?: boolean;
    size: number;
    onPress: () => void;
}

export const RoundedButton = ({icon, border, size, onPress } : RoundedButtonProps) => {

  return (
    <TouchableOpacity style={{
        width: size,
        height: size,
        borderRadius: 18,
        borderWidth: border ? 2 : undefined,
        borderColor: border ? colors.darkGreen : undefined,
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
