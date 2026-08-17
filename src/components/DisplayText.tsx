import React from 'react'
import { Text, TextStyle } from 'react-native'
import { typography } from '../app/theme/typography'
import { colors } from '../app/theme/colors'

type TypographyVariant = keyof typeof typography;

type DisplayTextProps = {
  displayText: string;
  variant?: TypographyVariant;
  color?: string;
  style?: TextStyle;
}

export const DisplayText = ({
  displayText,
  variant = 'mediumReg',
  color = colors.black,
  style,
}: DisplayTextProps) => {
  return (
    <Text style={[typography[variant], { color }, style]}>
      {displayText}
    </Text>
  )
}
