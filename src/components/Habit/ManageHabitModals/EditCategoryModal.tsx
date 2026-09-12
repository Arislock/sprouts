import {useState} from 'react'
import { BottomModal } from '@/components/BottomModal'
import { View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Button } from '@/components/Button'
import PlusIcon from '@/assets/icons/plus.svg'
import { TagColor } from '@/components/Tag'
import { NewCategoryModal } from './NewCategoryModal'
import { colors } from '@/theme/colors'
import { DisplayText } from '@/components/DisplayText'
import EditIcon from '@/assets/icons/edit.svg'
import DeleteIcon from '@/assets/icons/delete.svg'
import {SPACING} from '@/theme/spacing'
import {typography} from '@/theme/typography'


export type Category = {
    id: string;
    name: string;
    color: TagColor;
};

type EditCategoryModalProps = {
    visible: boolean;
    onClose: () => void;
    selectedCategory: Category | null;
    onSelectCategory: (category: Category | null) => void;
};

const DEFAULT_CATEGORIES: Category[] = [
    { id: "focus", name: "Focus", color: "lightBlue" },
    { id: "work", name: "Work", color: "pink" },
    { id: "morning", name: "Morning", color: "yellow" },
];

export const EditCategoryModal = ({ visible, onClose, selectedCategory, onSelectCategory }: EditCategoryModalProps) => {
    const [categories, setCategories] = useState<Category[]>(DEFAULT_CATEGORIES);
    const [isNewCategoryOpen, setIsNewCategoryOpen] = useState(false);
    const [isEditingCategory, setIsEditingCategory] = useState(false);
    
    const handleCreateCategory = (category: Omit<Category, 'id'>) => {
        const created = { ...category, id: String(Date.now()) };
        setCategories((prev) => [...prev, created]);
        onSelectCategory(created);
    };

    const handleDeleteCategory = (category: Category) => {
        setCategories((prev) => prev.filter((c) => c.id !== category.id));
        if (selectedCategory?.id === category.id) {
            onSelectCategory(null);
        }
    };

    const handleRenameCategory = (category: Category, name: string) => {
        setCategories((prev) => prev.map((c) => (c.id === category.id ? { ...c, name } : c)));
        if (selectedCategory?.id === category.id) {
            onSelectCategory({ ...category, name });
        }
    };

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


            <ScrollView
              style={{ maxHeight: 240, marginBottom: 16 }}
              contentContainerStyle={{ gap: 8 }}
              showsVerticalScrollIndicator={false}
            >

            {categories.map((category) => (
            <TouchableOpacity key={category.id} onPress={() => !isEditingCategory && onSelectCategory(category)}>
            <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: colors.white,
              padding: 16,
              borderRadius: 24,
              borderWidth: 2,
              borderColor: selectedCategory?.id === category.id ? colors.darkGreen : 'transparent',
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex: 1,
                    gap: 8,
                    alignItems: 'center',
                }}>
                    <View style={{
                        backgroundColor: colors[category.color],
                        width: 16,
                        height: 16,
                        borderRadius: 12,
                        }}/>
                    {isEditingCategory ? (
                    <TextInput
                        value={category.name}
                        onChangeText={(name) => handleRenameCategory(category, name)}
                        style={[typography.mediumReg, { flex: 1, color: colors.black }]}
                    />
                    ) : (
                    <DisplayText value={category.name} variant="mediumReg" color={colors.black}/>
                    )}
                </View>
                {isEditingCategory && (
                <TouchableOpacity onPress={() => handleDeleteCategory(category)}>
                    <DeleteIcon width={16} height={16} color={colors.darkGreen}/>
                </TouchableOpacity>
                )}
            </View>
            
            </TouchableOpacity>
            ))}
            </ScrollView>

            <View style={{
                display: "flex",
                flexDirection: "row",
                gap: SPACING.sm,
                marginBottom: 16,
            }}>
                <Button
                    value="Add New Tag"
                    border
                    textColor={colors.darkGreen}
                    bgColor={colors.white}
                    style={{ flex: 1 }}
                    icon={<PlusIcon width={16} height={16} color={colors.darkGreen}/>}
                    onPress={() => setIsNewCategoryOpen(true)}
                />
                <Button
                    value="Edit Tags"
                    border
                    textColor={colors.darkGreen}
                    bgColor={colors.white}
                    borderColor={isEditingCategory? colors.darkGreen : 'transparent'}
                    style={{ flex: 1 }}
                    icon={<EditIcon width={16} height={16} color={colors.darkGreen}/>}
                    onPress={() => setIsEditingCategory((prev) => !prev)}
                />
            </View>
            <Button value="Done" onPress={onClose}/>

            <NewCategoryModal
                visible={isNewCategoryOpen}
                onClose={() => setIsNewCategoryOpen(false)}
                onCreate={handleCreateCategory}
            />
    </BottomModal>
  )
}
