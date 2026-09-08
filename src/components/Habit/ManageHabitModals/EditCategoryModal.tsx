import {useState} from 'react'
import { BottomModal } from '@/components/BottomModal'
import { View, TouchableOpacity } from 'react-native'
import { Button } from '@/components/Button'
import { CircleButton } from '@/components/CircleButton'
import PlusIcon from '@/assets/icons/plus.svg'
import { Tag } from '@/components/Tag'
import { NewCategoryModal } from './NewCategoryModal'

type EditCategoryModalProps = {
    visible: boolean;
    onClose: () => void;
};

export const EditCategoryModal = ({ visible, onClose }: EditCategoryModalProps) => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [isAddingNewTag, setIsAddingNewTag] = useState(false);

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

                <CircleButton icon={<PlusIcon/>} size={32} iconSize={16} onPress={() => setIsAddingNewTag(true)}/>
                
            <TouchableOpacity onPress={() => setSelectedTag("tamadochi")}>
                <Tag value="tamadochi" size="medium" color="lightBlue" border={selectedTag === "tamadochi"}/>
           </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedTag("hey")}>
                <Tag value="hey" size="medium" color="pink" border={selectedTag === "hey"}/>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => setSelectedTag("another tag")}>
                <Tag value="another tag" size="medium" color="yellow" border={selectedTag === "another tag"}/>
           </TouchableOpacity>
            </View>
            

            <Button value="Done" onPress={() => {}}/>

            <NewCategoryModal visible={isAddingNewTag} onClose={() => setIsAddingNewTag(false)}/>
    </BottomModal>
  )
}
