import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { colors } from '../app/theme/colors'
import { SPACING } from '../app/theme/spacing'
import { DisplayText } from './DisplayText'

type ButtonProps = {
    displayText: string;
};

export const Button = ({displayText} : ButtonProps) => {

  return (
    <TouchableOpacity>
        <View
        style={{
            backgroundColor: colors.darkGreen,
            padding: SPACING.md,
            borderRadius: 32,
            alignItems: 'center',
        }}
        >
            <DisplayText displayText={displayText} variant='mediumReg' color={colors.white}/>
        </View>
    </TouchableOpacity>
  )
}
