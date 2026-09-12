import React from 'react'
import { BottomModal } from '@/components/BottomModal'
import { View, TouchableOpacity } from 'react-native'
import {DisplayText} from '@/components/DisplayText'
import { colors } from '@/theme/colors'
import Slider from '@react-native-community/slider'
import { Button } from '@/components/Button'

type EditFrequencyModal = {
    visible: boolean;
    onClose: () => void;
    selectedDays: string[];
    onToggleDay: (day: string) => void;
    timesPerDay: number;
    onTimesPerDayChange: (timesPerDay: number) => void;
};

export const ABR_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
export const MIN_TIMES_PER_DAY = 1;
const MAX_TIMES_PER_DAY = 10;

const DAY_NAMES: Record<string, string> = {
  Mo: 'Mon',
  Tu: 'Tue',
  We: 'Wed',
  Th: 'Thu',
  Fr: 'Fri',
  Sa: 'Sat',
  Su: 'Sun',
};

export const formatFrequency = (selectedDays: string[], timesPerDay: number) => {
  const days = ABR_DAYS
    .filter((day) => selectedDays.includes(day))
    .map((day) => DAY_NAMES[day])
    .join(', ');

  const timing =
    timesPerDay === 1 ? 'Once a Day'
    : timesPerDay === 2 ? 'Twice a Day'
    : `${timesPerDay}x a Day`;

  return `${days} • ${timing}`;
};

export const EditFrequencyModal = ({ visible, onClose, selectedDays, onToggleDay, timesPerDay, onTimesPerDayChange }: EditFrequencyModal) => {
    const isFormValid = selectedDays.length > 0;

    const handleCreate = () => {
        if (!isFormValid) return;
        onClose();
    };

  return (
    <BottomModal visible={visible} onClose={onClose} header="Frequency">
    <View style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}>

      <DisplayText value="Days of the Week" variant="smallReg" color={colors.darkGreen}/>

      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
      }}>
        {ABR_DAYS.map((day) => (
          <TouchableOpacity key={day} onPress={() => onToggleDay(day)}>
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

    <DisplayText value="Times per Day" variant="smallReg" color={colors.darkGreen}/>

    <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16
      }}>
      <Slider
        style={{ flex: 1 }}
        minimumValue={MIN_TIMES_PER_DAY}
        maximumValue={MAX_TIMES_PER_DAY}
        step={1}
        value={timesPerDay}
        onValueChange={onTimesPerDayChange}
        minimumTrackTintColor={colors.darkGreen}
        maximumTrackTintColor={colors.bg}
        thumbTintColor={colors.white}
      />
      <View style={{
          backgroundColor: colors.white,
          width: 40,
          height: 40,
          borderRadius: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <DisplayText value={String(timesPerDay)} variant="mediumBold" color={colors.black}/>
      </View>
    </View>
    <Button
        value="Done"
        onPress={handleCreate}
        disabled={!isFormValid}
        bgColor={isFormValid ? colors.darkGreen : colors.disabledGreen}
        textColor={isFormValid ? colors.white : colors.lightGreen}
    />
    </View>
    </BottomModal>
  )
}
