import React from 'react'
import { BottomModal } from '@/components/BottomModal'
import { View, TouchableOpacity } from 'react-native'
import {DisplayText} from '@/components/DisplayText'
import { colors } from '@/theme/colors'
import { Button } from '@/components/Button'
import { CircleButton } from '@/components/CircleButton'
import PlusIcon from '@/assets/icons/plus.svg'
import { ABR_DAYS } from './EditFrequencyModal'
import { TimePickerModal } from './TimePickerModal'

type EditReminderModal = {
    visible: boolean;
    onClose: () => void;
    frequencyDays: string[];
};

const getDefaultTime = () => {
  const date = new Date();
  date.setHours(11, 0, 0, 0);
  return date;
};

const formatTime = (date: Date) => {
  const hours = date.getHours();
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHour = hours % 12 === 0 ? 12 : hours % 12;
  return `${displayHour}:${String(date.getMinutes()).padStart(2, '0')} ${period}`;
};

export const EditReminderModal = ({ visible, onClose, frequencyDays }: EditReminderModal) => {
  const [selectedDays, setSelectedDays] = React.useState<string[]>(frequencyDays);
  const [isTimePickerOpen, setIsTimePickerOpen] = React.useState(false);
  const [time, setTime] = React.useState<Date>(getDefaultTime);
  const [hasPickedTime, setHasPickedTime] = React.useState(false);
  const [reminderTimes, setReminderTimes] = React.useState<Date[]>([]);

  React.useEffect(() => {
    if (visible) {
      setSelectedDays(frequencyDays);
      setIsTimePickerOpen(false);
    }
  }, [visible, frequencyDays]);

  const openTimePicker = () => {
    setHasPickedTime(false);
    setIsTimePickerOpen(true);
  };

  const handleTimeChange = (value: Date) => {
    setTime(value);
    setHasPickedTime(true);
  };

  const handleSetTime = () => {
    setReminderTimes((prev) => [...prev, time]);
    setIsTimePickerOpen(false);
  };

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const isFormValid = selectedDays.length > 0 && reminderTimes.length > 0;

  const handleClose = () => {
    if (isTimePickerOpen) {
      setIsTimePickerOpen(false);
    } else {
      onClose();
    }
  };

  return (
    <BottomModal visible={visible} onClose={handleClose} header={isTimePickerOpen ? "Time" : "Reminder"}>
        {isTimePickerOpen ? (
          <>
            <TimePickerModal value={time} onChange={handleTimeChange}/>
            <Button
                value="Set Time"
                onPress={handleSetTime}
                disabled={!hasPickedTime}
                bgColor={hasPickedTime ? colors.darkGreen : colors.disabledGreen}
                textColor={hasPickedTime ? colors.white : colors.lightGreen}
            />
          </>
        ) : (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            marginTop: 16
          }}>

          <DisplayText value="Days You Will Be Reminded" variant="smallReg" color={colors.darkGreen}/>

          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16
          }}>
            {ABR_DAYS.map((day) => (
              <TouchableOpacity key={day} onPress={() => toggleDay(day)}>
                <View style={{
                  display: 'flex',
                  backgroundColor: colors.white,
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 16,
                  borderWidth: 2,
                  borderColor: selectedDays.includes(day) ? colors.darkGreen : "transparent"
                  }}>
                    <DisplayText value={day} variant="mediumBold" color={colors.black}/>
              </View>
              </TouchableOpacity>
            ))}
        </View>
        <DisplayText value="Time" variant="smallReg" color={colors.darkGreen}/>

        <View style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 8,
            marginBottom: 16
          }}>
          <CircleButton icon={<PlusIcon/>} size={32} iconSize={16} onPress={openTimePicker}/>

          {reminderTimes.map((reminderTime, index) => (
            <View key={index} style={{
                backgroundColor: colors.white,
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 16,
              }}>
              <DisplayText value={formatTime(reminderTime)} variant="mediumReg" color={colors.black}/>
            </View>
          ))}
        </View>

        <Button
                value="Done"
                onPress={onClose}
                disabled={!isFormValid}
                bgColor={isFormValid ? colors.darkGreen : colors.disabledGreen}
                textColor={isFormValid ? colors.white : colors.lightGreen}
            />
        </View>
        )}
        </BottomModal>
  )
}
