import React from 'react'
import { BottomModal } from '@/components/BottomModal'

type EditReminderModal = {
    visible: boolean;
    onClose: () => void;
};

export const EditReminderModal = ({ visible, onClose }: EditReminderModal) => {
  return (
    <BottomModal visible={visible} onClose={onClose} header="Reminder">

    </BottomModal>
  )
}
