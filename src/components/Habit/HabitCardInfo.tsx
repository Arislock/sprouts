import React from 'react'
import { View, Text } from 'react-native'
import {typography} from '../../app/theme/typography'
import {colors} from '../../app/theme/colors'
import {DisplayText} from '../DisplayText'

type HabitCardDescriptionProps = {
    category: string;
};

export const HabitCardInfo = ({category}: HabitCardDescriptionProps) => {
  return (
    <View>
    <DisplayText displayText="Hello World" variant='mediumReg' color={colors.black}/>

    <Text
    style={{ ...typography.xsmallReg, color: colors.black, marginTop: 8 }}>
        {category}
    </Text>
    </View>


  )
}
