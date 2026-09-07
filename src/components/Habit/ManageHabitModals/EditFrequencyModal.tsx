import React from 'react'
import { BottomModal } from '@/components/BottomModal'

type EditFrequencyModal = {
    visible: boolean;
    onClose: () => void;
};

export const EditFrequencyModal = ({ visible, onClose }: EditFrequencyModal) => {
  return (
    <BottomModal visible={visible} onClose={onClose} header="Frequency">

    </BottomModal>
  )
}
