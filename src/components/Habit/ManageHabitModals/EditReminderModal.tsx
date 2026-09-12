import React from 'react'
import { BottomModal } from '@/components/BottomModal'
import { Button } from '@/components/Button'
import { colors } from '@/theme/colors'
import { TimePickerModal } from './TimePickerModal'

type EditReminderModal = {
    visible: boolean;
    onClose: () => void;
    reminderTime: Date | null;
    onSetReminderTime: (time: Date) => void;
};

const getDefaultTime = () => {
  const date = new Date();
  date.setHours(11, 0, 0, 0);
  return date;
};

export const formatTime = (date: Date) => {
  const hours = date.getHours();
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHour = hours % 12 === 0 ? 12 : hours % 12;
  return `${displayHour}:${String(date.getMinutes()).padStart(2, '0')} ${period}`;
};

export const EditReminderModal = ({ visible, onClose, reminderTime, onSetReminderTime }: EditReminderModal) => {
  const [time, setTime] = React.useState<Date>(() => reminderTime ?? getDefaultTime());
  const [hasPickedTime, setHasPickedTime] = React.useState(false);

  React.useEffect(() => {
    if (visible) {
      setTime(reminderTime ?? getDefaultTime());
      setHasPickedTime(false);
    }
  }, [visible, reminderTime]);

  const handleTimeChange = (value: Date) => {
    setTime(value);
    setHasPickedTime(true);
  };

  const handleSetTime = () => {
    onSetReminderTime(time);
    onClose();
  };

  return (
    <BottomModal visible={visible} onClose={onClose} header="Reminder">
        <TimePickerModal value={time} onChange={handleTimeChange}/>

        <Button
            value="Set Time"
            onPress={handleSetTime}
            disabled={!hasPickedTime}
            bgColor={hasPickedTime ? colors.darkGreen : colors.disabledGreen}
            textColor={hasPickedTime ? colors.white : colors.lightGreen}
        />
    </BottomModal>
  )
}
