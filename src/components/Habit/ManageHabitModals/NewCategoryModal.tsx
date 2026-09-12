import {useEffect, useState} from 'react'
import { BottomModal } from '@/components/BottomModal'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { Button } from '@/components/Button'
import { colors } from '@/theme/colors'
import { SPACING } from '@/theme/spacing'
import { TagColor } from '@/components/Tag'
import { Category } from './EditCategoryModal'

type NewCategoryModal = {
    visible: boolean;
    onClose: () => void;
    onCreate: (category: Omit<Category, 'id'>) => void;
};

const TAG_COLORS: TagColor[] = ['lightBlue', 'green', 'purple', 'darkBlue', 'turqoise', 'pink', 'yellow', 'orange'];

export const NewCategoryModal = ({ visible, onClose, onCreate }: NewCategoryModal) => {
    const [selectedColor, setSelectedColor] = useState<TagColor | null>(null);
    const [categoryName, setCategoryName] = useState<string>('');

    useEffect(() => {
        if (!visible) {
            setSelectedColor(null);
            setCategoryName('');
        }
    }, [visible]);

    const isFormValid = !!selectedColor && categoryName.trim().length > 0;

    const handleCreate = () => {
        if (!isFormValid || !selectedColor) return;
        onCreate({ name: categoryName.trim(), color: selectedColor });
        onClose();
    };

    return (
    <BottomModal visible={visible} onClose={onClose} header="New Category">
        <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 8,
              marginBottom: 16,
              marginTop: 16
            }}>
              {TAG_COLORS.map((tagColor) => (
                <TouchableOpacity key={tagColor} onPress={() => setSelectedColor(tagColor)}>
                  <View style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                      backgroundColor: colors[tagColor],
                      borderWidth: 2,
                      borderColor: selectedColor === tagColor ? colors.darkGreen : 'transparent',
                  }}/>
                </TouchableOpacity>
              ))}
            </View>

            <View style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: colors.white,
                padding: SPACING.lg,
                borderRadius: 32,
                marginBottom: 16
            }}>
                <TextInput
                    placeholder='Enter Category Name'
                    style={{ width: '100%' }}
                    value={categoryName}
                    onChangeText={setCategoryName}
                />
            </View>

            <Button
                value="Done"
                onPress={handleCreate}
                disabled={!isFormValid}
                bgColor={isFormValid ? colors.darkGreen : colors.disabledGreen}
                textColor={isFormValid ? colors.white : colors.lightGreen}
            />
    </BottomModal>
  )
}
