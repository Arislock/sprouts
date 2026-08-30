import { useState } from 'react'
import { View, Text } from 'react-native'
import { colors } from '../../theme/colors'
import { SPACING } from '../../theme/spacing'
import { RoundedButton } from '../RoundedButton'
import { BottomModal } from '../BottomModal'
import EditIcon from '@/assets/icons/edit.svg'

export const ManageHabitCard = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <View
    style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.lightGreen,
        padding: SPACING.sm,
        borderRadius: 24,
        alignItems: 'center',
    }}
    >
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <RoundedButton icon={<EditIcon/>} size={48} onPress={() => setIsEditOpen(true)}/>

        </View>

        <BottomModal
            visible={isEditOpen}
            onClose={() => setIsEditOpen(false)}
            header="Edit Icon"
            buttonText="Use Icon"
            buttonColor={colors.lightGreen}
            onButtonPress={() => setIsEditOpen(false)}
            buttonDisabled={true}
        />

    </View>
  )
}
