import React from 'react'
import { BottomModal } from '@/components/BottomModal'
import { View, TouchableOpacity } from 'react-native'
import { Button } from '@/components/Button'
import { CircleButton } from '@/components/CircleButton'
import PlusIcon from '@/assets/icons/plus.svg'
import { Tag } from '@/components/Tag'

type EditCategoryModalProps = {
    visible: boolean;
    onClose: () => void;
};

export const EditCategoryModal = ({ visible, onClose }: EditCategoryModalProps) => {
  return (
    <BottomModal visible={visible} onClose={onClose} header="Category">
        <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              marginBottom: 16
            }}>
            </View>

            <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              gap: 8,
              marginBottom: 16
            }}>

                <CircleButton icon={<PlusIcon/>} size={32} iconSize={16} onPress={() => {}}/>
                
            <TouchableOpacity>
                <Tag value="tamadochi" size="medium" color="lightBlue"/>
           </TouchableOpacity>

            <TouchableOpacity>
                <Tag value="tamadochi" size="medium" color="lightBlue"/>
           </TouchableOpacity>

           <TouchableOpacity>
                <Tag value="tamadochi" size="medium" color="lightBlue"/>
           </TouchableOpacity>

           <TouchableOpacity>
                <Tag value="tamadochi" size="medium" color="lightBlue"/>
           </TouchableOpacity>
            </View>
            

            <Button value="Done" onPress={() => {}}/>
    </BottomModal>
  )
}
