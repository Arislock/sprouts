import React from 'react'
import { Text, TextStyle } from 'react-native'
import { typography } from '../app/theme/typography'
import { colors } from '../app/theme/colors'

type TypographyVariant = keyof typeof typography;

type DisplayTextProps = {
  value: string;
  variant?: TypographyVariant;
  color?: string;
  style?: TextStyle;
}

export const DisplayText = ({
  value,
  variant = 'mediumReg',
  color = colors.black,
  style,
}: DisplayTextProps) => {
  return (
    <Text style={[typography[variant], { color }, style]}>
      {value}
    </Text>
  )
}
