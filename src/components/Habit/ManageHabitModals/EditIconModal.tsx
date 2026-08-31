import React, { useState } from 'react'
import { Button } from '@/components/Button'
import { colors } from '@/theme/colors'
import { BottomModal } from '@/components/BottomModal';
import { View } from 'react-native';
import { RoundedButton } from '@/components/RoundedButton';
import EditIcon from '@/assets/icons/edit.svg'
import CancelIcon from '@/assets/icons/cancel.svg'
import CheckIcon from '@/assets/icons/check.svg'
import PlusIcon from '@/assets/icons/plus.svg'
import LeftArrowIcon from '@/assets/icons/leftArrow.svg'

type EditIconModalProps = {
    visible: boolean;
    onClose: () => void;
};

const ICON_OPTIONS = [
  EditIcon, CancelIcon, CheckIcon, PlusIcon, LeftArrowIcon,
  EditIcon, CancelIcon, CheckIcon, PlusIcon, LeftArrowIcon,
];
const ICON_ROWS = [ICON_OPTIONS.slice(0, 5), ICON_OPTIONS.slice(5, 10)];

export const EditIconModal = ({ visible, onClose }: EditIconModalProps) => {
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  return (
    <BottomModal
      visible={visible}
      onClose={onClose}
      header="Edit Icon"
    >
    <View
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      marginTop: 16,
      marginBottom: 16
    }}>
      <View style={{ gap: 16, marginBottom: 16 }}>
        {ICON_ROWS.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {row.map((Icon, iconIndex) => (
              <RoundedButton
                key={iconIndex}
                icon={<Icon width={24} height={24} color={colors.darkGreen}/>}
                size={48}
                onPress={() => {}}
              />
            ))}
          </View>
        ))}
      </View>
      <Button
        displayText="Hi"
        textColor={colors.darkGreen}
        onPress={() => {}}
        disabled={buttonDisabled}
        bgColor={buttonDisabled ? colors.disabledGreen : colors.darkGreen}
      />
    </View>
    </BottomModal>
  )
}
