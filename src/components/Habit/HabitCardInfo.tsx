import React from 'react'
import { View, Text } from 'react-native'
import {typography} from '../../theme/typography'
import {colors} from '../../theme/colors'
import {DisplayText} from '../DisplayText'
import { Tag } from '../Tag'
import { Category } from './ManageHabitModals/EditCategoryModal'

type HabitCardInfoProps = {
  name: string;
  category: Category | null;
};

export const HabitCardInfo = ({ name, category }: HabitCardInfoProps) => {
  return (
    <View
    style={{
      display:'flex',
      gap: 4,
    }}>
    <DisplayText value={name} variant='mediumReg' color={colors.black}/>
    {category ? <Tag value={category.name} color={category.color} size="small"/> : null}
    </View>
  )
};
