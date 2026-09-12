import React from 'react'
import { View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

type TimePickerModalProps = {
    value: Date;
    onChange: (value: Date) => void;
};

export const TimePickerModal = ({ value, onChange }: TimePickerModalProps) => {
  return (
    <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          marginTop: 16,
          marginBottom: 16
        }}>
          <DateTimePicker
            mode="time"
            display="spinner"
            value={value}
            onValueChange={(_, selectedDate) => onChange(selectedDate)}
          />
    </View>
  )
}
