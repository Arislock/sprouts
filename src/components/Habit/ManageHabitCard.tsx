import { useState } from 'react'
import { View, TextInput } from 'react-native'
import { colors } from '../../theme/colors'
import { SPACING } from '../../theme/spacing'
import { RoundedButton } from '../RoundedButton'
import { EditIconModal } from './ManageHabitModals/EditIconModal'
import EditIcon from '@/assets/icons/edit.svg'
import { HabitDetailRow } from './HabitDetailRow'

export const ManageHabitCard = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <View style={{
        display: 'flex',
        flexDirection: 'column',
        gap: SPACING.md,
        backgroundColor: colors.lightGreen,
        borderRadius: 24,
        padding: SPACING.md,

    }}>
    <View
    style={{
        display: 'flex',
        flexDirection: 'row',
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
        
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: colors.white,
            marginLeft: SPACING.md,
            padding: SPACING.lg,
            borderRadius: 16,
            flex: 1,
        }}>
            <TextInput placeholder='New Habit' style={{ width: '100%' }}/>
        </View>
    </View>

    <EditIconModal visible={isEditOpen} onClose={() => setIsEditOpen(false)}/>

    <View style={{
        display: 'flex',
        gap: SPACING.md,
    }}>
    <HabitDetailRow/>
    <HabitDetailRow/>
    <HabitDetailRow/>
    </View>
    </View>
  )
}
