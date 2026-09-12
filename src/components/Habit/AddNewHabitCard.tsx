import { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import { colors } from '../../theme/colors'
import { SPACING } from '../../theme/spacing'
import { typography } from '../../theme/typography'
import { RoundedButton } from '../RoundedButton'
import { Button } from '../Button'
import { EditIconModal } from './ManageHabitModals/EditIconModal'
import { EditCategoryModal, Category } from './ManageHabitModals/EditCategoryModal'
import { Tag } from '../Tag'
import { DisplayText } from '../DisplayText'
import { EditFrequencyModal, MIN_TIMES_PER_DAY, formatFrequency } from './ManageHabitModals/EditFrequencyModal'
import { EditReminderModal, formatTime } from './ManageHabitModals/EditReminderModal'
import EditIcon from '@/assets/icons/edit.svg'
import TagIcon from '@/assets/icons/tag.svg'
import ClockIcon from '@/assets/icons/clock.svg'
import BellIcon from '@/assets/icons/bell.svg'
import { HabitDetailRow } from './HabitDetailRow'
import { useHabitStore } from '../../app/store/useHabitStore';
import { router } from 'expo-router';

const addHabit = useHabitStore((state) => state.addHabit);

type AddNewHabitCardProps = {
  onSave: (habit: {
    name: string;
    icon: string | null;
    category: Category | null;
    days: string[];
    timesPerDay: number;
    reminderTime: Date | null;
  }) => void;
};

export const AddNewHabitCard = ({ onSave }: AddNewHabitCardProps) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isFrequencyOpen, setIsFrequencyOpen] = useState(false);
  const [isReminderOpen, setIsReminderOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [timesPerDay, setTimesPerDay] = useState(MIN_TIMES_PER_DAY);
  const [reminderTime, setReminderTime] = useState<Date | null>(null);
  const [habitIcon, setHabitIcon] = useState<string | null>(null);
  
  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

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
            <RoundedButton
              icon={habitIcon ? <Text style={{ fontSize: 24 }}>{habitIcon}</Text> : <EditIcon/>}
              size={48}
              onPress={() => setIsEditOpen(true)}
            />

        </View>
        
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: colors.white,
            marginLeft: SPACING.md,
            padding: SPACING.md,
            borderRadius: 16,
            flex: 1,
        }}>
            <TextInput
              placeholder='New Habit'
              style={[typography.mediumReg, { width: '100%', color: colors.black }]}
              placeholderTextColor={colors.disabledGreen}
              value={habitName}
              onChangeText={setHabitName}
            />
        </View>
    </View>

    <EditIconModal
      visible={isEditOpen}
      onClose={() => setIsEditOpen(false)}
      icon={habitIcon}
      onSelectIcon={setHabitIcon}
    />
    <EditCategoryModal
      visible={isCategoryOpen}
      onClose={() => setIsCategoryOpen(false)}
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory}
    />
    <EditFrequencyModal
      visible={isFrequencyOpen}
      onClose={() => setIsFrequencyOpen(false)}
      selectedDays={selectedDays}
      onToggleDay={toggleDay}
      timesPerDay={timesPerDay}
      onTimesPerDayChange={setTimesPerDay}
    />
    <EditReminderModal
      visible={isReminderOpen}
      onClose={() => setIsReminderOpen(false)}
      reminderTime={reminderTime}
      onSetReminderTime={setReminderTime}
    />

    <View style={{
        display: 'flex',
        gap: 4,
    }}>
    <HabitDetailRow icon={<TagIcon/>} value="Category" onPress={() => setIsCategoryOpen(true)}>
      {selectedCategory ? (
        <Tag value={selectedCategory.name} color={selectedCategory.color} size="xsmall"/>
      ) : null}
    </HabitDetailRow>
    <HabitDetailRow icon={<ClockIcon/>} value="Frequency" onPress={() => setIsFrequencyOpen(true)}>
      {selectedDays.length > 0 ? (
        <DisplayText value={formatFrequency(selectedDays, timesPerDay)} variant="smallReg"/>
      ) : null}
    </HabitDetailRow>
    <HabitDetailRow
      icon={<BellIcon/>}
      value="Reminder"
      toggle
      toggleValue={!!reminderTime}
      onToggleChange={(enabled) => enabled ? setIsReminderOpen(true) : setReminderTime(null)}
      onPress={() => setIsReminderOpen(true)}>
      {reminderTime ? (
        <DisplayText value={formatTime(reminderTime)} variant="smallReg"/>
      ) : null}
    </HabitDetailRow>
    </View>

    {habitName.trim().length > 0 && (
      <Button
        value="Save Habit"
        textColor={colors.darkGreen}
        bgColor={colors.white}
        onPress={() => {
          addHabit({
            name: habitName,
            icon: habitIcon,
            category: selectedCategory,
            days: selectedDays,
            timesPerDay,
            reminderTime,
          });
          router.back();
        }}
      />
    )}
    </View>
  )
}