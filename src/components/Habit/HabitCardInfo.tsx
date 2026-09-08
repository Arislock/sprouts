import React from 'react'
import { View, Text } from 'react-native'
import {typography} from '../../theme/typography'
import {colors} from '../../theme/colors'
import {DisplayText} from '../DisplayText'
import { Tag } from '../Tag'

type HabitCardDescriptionProps = {
    category: string;
};

export const HabitCardInfo = ({category}: HabitCardDescriptionProps) => {
  return (
    <View
    style={{
      display:'flex',
      gap: 4,
    }}>
    <DisplayText value="Hello World" variant='mediumReg' color={colors.black}/>
    <Tag value="hi" color="turqoise" size="small"/>
    </View>


  )
}
