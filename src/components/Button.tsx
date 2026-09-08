import React from 'react'
import { TouchableOpacity, View, Text, ViewStyle } from 'react-native'
import { colors } from '../theme/colors'
import { SPACING } from '../theme/spacing'
import { DisplayText } from './DisplayText'

type ButtonProps = {
    value: string;
    textColor?: string;
    bgColor?: string;
    border?: boolean;
    borderColor?: string;
    icon?: React.ReactNode;
    style?: ViewStyle;
    onPress: () => void;
    disabled?: boolean;
};

export const Button = ({
    value,
    textColor = colors.white,
    bgColor = colors.darkGreen,
    border = false,
    borderColor = colors.lightGreen,
    icon,
    style,
    onPress,
    disabled = false
} : ButtonProps) => {

  return (
    <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
        <View
        style={{
            flexDirection: 'row',
            backgroundColor: bgColor,
            padding: SPACING.md,
            borderRadius: 32,
            alignItems: 'center',
            justifyContent: 'center',
            gap: SPACING.xs,
            borderWidth: border ? 2 : 0,
            borderColor: borderColor,
        }}
        >
            {icon}
            <DisplayText value={value} variant='mediumReg' color={textColor}/>
        </View>
    </TouchableOpacity>
  )
}
