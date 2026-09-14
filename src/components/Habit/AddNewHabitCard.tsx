import { useState } from 'react'
import { View, TextInput, Text, Pressable } from 'react-native'
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
import DeleteIcon from '@/assets/icons/delete.svg'
import { HabitDetailRow } from './HabitDetailRow'
import { Habit } from './Habit'

type AddNewHabitCardProps = {
  habit?: Habit;
  onSave: (habit: {
    name: string;
    icon: string | null;
    category: Category | null;
    days: string[];
    timesPerDay: number;
    reminderTime: Date | null;
  }) => void;
  onDelete?: () => void;
};

export const AddNewHabitCard = ({ habit, onSave, onDelete }: AddNewHabitCardProps) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isFrequencyOpen, setIsFrequencyOpen] = useState(false);
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(habit?.category ?? null);

  const [selectedDays, setSelectedDays] = useState<string[]>(habit?.days ?? []);
  const [timesPerDay, setTimesPerDay] = useState(habit?.timesPerDay ?? MIN_TIMES_PER_DAY);
  const [reminderTime, setReminderTime] = useState<Date | null>(habit?.reminderTime ?? null);
  const [habitIcon, setHabitIcon] = useState<string | null>(habit?.icon ?? null);
  const [habitName, setHabitName] = useState(habit?.name ?? '');
  
  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const sameDays =
    selectedDays.length === (habit?.days.length ?? 0) &&
    selectedDays.every((day) => habit?.days.includes(day));

  const isModified =
    habitName !== (habit?.name ?? '') ||
    habitIcon !== (habit?.icon ?? null) ||
    (selectedCategory?.id ?? null) !== (habit?.category?.id ?? null) ||
    timesPerDay !== (habit?.timesPerDay ?? MIN_TIMES_PER_DAY) ||
    (reminderTime?.getTime() ?? null) !== (habit?.reminderTime?.getTime() ?? null) ||
    !sameDays;

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

          {isEditingName ? (
            <TextInput
              autoFocus
              value={habitName}
              onChangeText={setHabitName}
              onBlur={() => setIsEditingName(false)}
              style={[typography.mediumReg, { width: '100%', color: colors.black }]}
              placeholder='New Habit'
              placeholderTextColor={colors.disabledGreen}
            />
          ) : (
            <Pressable onPress={() => setIsEditingName(true)}>
              <DisplayText
                value={habitName || 'New Habit'}
                variant="mediumReg"
                color={habitName ? colors.darkGreen : colors.disabledGreen}
              />
            </Pressable>
)}

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
      onPress={() => setIsReminderOpen(true)}>
      {reminderTime ? (
        <DisplayText value={formatTime(reminderTime)} variant="smallReg"/>
      ) : null}
    </HabitDetailRow>
    </View>

    {habitName.trim().length > 0 && isModified && (
      <Button
          value={habit ? 'Update Habit' : 'Save Habit'}
          textColor={colors.darkGreen}
          bgColor={colors.white}
          onPress={() => {
            onSave({
              name: habitName,
              icon: habitIcon,
              category: selectedCategory,
              days: selectedDays,
              timesPerDay,
              reminderTime,
            });
          }}
        />
    )}

    {habit && onDelete && !isModified && (
      <View style={{
          position: 'absolute',
          bottom: SPACING.md,
          right: SPACING.md,
      }}>
        <RoundedButton
          icon={<DeleteIcon width={20} height={20} color={colors.darkGreen}/>}
          size={36}
          onPress={onDelete}
        />
      </View>
    )}
    </View>
  )
}