import React from 'react'
import { View } from 'react-native'
import { DisplayText } from './DisplayText'
import { colors } from '@/theme/colors';
import { SPACING } from '@/theme/spacing';

export type TagColor = 'lightBlue' | 'green' | 'purple' | 'darkBlue' | 'turqoise' | 'pink' | 'yellow' | 'orange';

type TagProps = {
    value: string;
    color: TagColor;
};

export const Tag = ({value, color}: TagProps) => {
  return (
    <View style={{
      backgroundColor: colors[color],
      paddingHorizontal: SPACING.sm,
      paddingVertical: SPACING.xs,
      borderRadius: 999,
      alignSelf: 'flex-start',
    }}>
      <DisplayText variant="xsmallReg" color={colors.black} value={value}/>
    </View>
  )
}
