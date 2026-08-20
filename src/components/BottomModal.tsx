import React from 'react'
import { Modal, Pressable } from 'react-native'
import { colors } from '../app/theme/colors'
import { SPACING } from '../app/theme/spacing'

type BottomModalProps = {
    visible: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};

export const BottomModal = ({ visible, onClose, children }: BottomModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable
        style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end' }}
        onPress={onClose}
      >
        <Pressable
          style={{
            backgroundColor: colors.white,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: SPACING.xl,
          }}
          onPress={() => {}}
        >
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  )
}
