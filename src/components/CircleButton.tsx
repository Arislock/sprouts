import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { colors } from '@/theme/colors';

type CircleButtonProps = {
    icon: React.ReactNode;
    size?: number;
    iconSize?: number;
    border?: boolean;
    onPress?: () => void;
}

export const CircleButton = ({icon, size = 40, iconSize, border, onPress } : CircleButtonProps) => {
  const sizedIcon = iconSize && React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<any>, { width: iconSize, height: iconSize })
    : icon;

  return (
    <TouchableOpacity style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: border ? 2 : undefined,
        borderColor: border ? colors.lightGreen : undefined,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    }}
    onPress={onPress}
    disabled={!onPress}
    >
      {sizedIcon}
    </TouchableOpacity>
  )
}