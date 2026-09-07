import { useState } from 'react'
import { View, TextInput } from 'react-native'
import { colors } from '../../theme/colors'
import { SPACING } from '../../theme/spacing'
import { RoundedButton } from '../RoundedButton'
import { Button } from '../Button'
import { EditIconModal } from './ManageHabitModals/EditIconModal'
import { EditCategoryModal } from './ManageHabitModals/EditCategoryModal'
import { EditFrequencyModal } from './ManageHabitModals/EditFrequencyModal'
import { EditReminderModal } from './ManageHabitModals/EditReminderModal'


import EditIcon from '@/assets/icons/edit.svg'
import TagIcon from '@/assets/icons/tag.svg'
import ClockIcon from '@/assets/icons/clock.svg'
import BellIcon from '@/assets/icons/bell.svg'

import { HabitDetailRow } from './HabitDetailRow'


export const ManageHabitCard = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isFrequencyOpen, setIsFrequencyOpen] = useState(false);
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  
  
  const [habitName, setHabitName] = useState('');

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
            <TextInput
              placeholder='New Habit'
              style={{ width: '100%' }}
              value={habitName}
              onChangeText={setHabitName}
            />
        </View>
    </View>

    <EditIconModal visible={isEditOpen} onClose={() => setIsEditOpen(false)}/>
    <EditCategoryModal visible={isCategoryOpen} onClose={() => setIsCategoryOpen(false)}/>
    <EditFrequencyModal visible={isFrequencyOpen} onClose={() => setIsFrequencyOpen(false)}/>
    <EditReminderModal visible={isReminderOpen} onClose={() => setIsReminderOpen(false)}/>

    <View style={{
        display: 'flex',
        gap: 4,
    }}>
    <HabitDetailRow icon={<TagIcon/>} value="Category" onPress={() => setIsCategoryOpen(true)}/>
    <HabitDetailRow icon={<ClockIcon/>} value="Frequency" onPress={() => setIsFrequencyOpen(true)}/>
    <HabitDetailRow icon={<BellIcon/>} value="Reminder" onPress={() => setIsReminderOpen(true)}/>
    </View>

    {habitName.trim().length > 0 && (
      <Button
        displayText="Save Habit"
        textColor={colors.darkGreen}
        bgColor={colors.white}
        onPress={() => {}}
      />
    )}
    </View>
  )
}