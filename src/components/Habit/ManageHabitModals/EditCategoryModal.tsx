import React from 'react'
import { BottomModal } from '@/components/BottomModal'

type EditCategoryModalProps = {
    visible: boolean;
    onClose: () => void;
};

export const EditCategoryModal = ({ visible, onClose }: EditCategoryModalProps) => {
  return (
    <BottomModal visible={visible} onClose={onClose} header="Category">

    </BottomModal>
  )
}
