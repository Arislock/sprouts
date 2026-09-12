import React, { useRef } from 'react'
import { Animated, View, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import { colors } from '@/theme/colors'

const ITEM_HEIGHT = 40;
const VISIBLE_COUNT = 5;
const PADDING_COUNT = Math.floor(VISIBLE_COUNT / 2);

const HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1));
const MINUTES = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
const PERIODS = ['AM', 'PM'];

type WheelColumnProps = {
  data: string[];
  selectedIndex: number;
  onIndexChange: (index: number) => void;
  width: number;
};

const WheelColumn = ({ data, selectedIndex, onIndexChange, width }: WheelColumnProps) => {
  const scrollY = useRef(new Animated.Value(selectedIndex * ITEM_HEIGHT)).current;
  const scrollRef = useRef<ScrollView>(null);

  const handleMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);
    const clamped = Math.max(0, Math.min(data.length - 1, index));
    onIndexChange(clamped);
    scrollRef.current?.scrollTo({ y: clamped * ITEM_HEIGHT, animated: true });
  };

  return (
    <Animated.ScrollView
      ref={scrollRef}
      showsVerticalScrollIndicator={false}
      snapToInterval={ITEM_HEIGHT}
      decelerationRate="fast"
      bounces={false}
      style={{ height: ITEM_HEIGHT * VISIBLE_COUNT, width }}
      contentContainerStyle={{ paddingVertical: ITEM_HEIGHT * PADDING_COUNT }}
      contentOffset={{ x: 0, y: selectedIndex * ITEM_HEIGHT }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={16}
      onMomentumScrollEnd={handleMomentumEnd}
    >
      {data.map((item, index) => {
        const itemOffset = index * ITEM_HEIGHT;
        const inputRange = [
          itemOffset - ITEM_HEIGHT * 2,
          itemOffset - ITEM_HEIGHT,
          itemOffset,
          itemOffset + ITEM_HEIGHT,
          itemOffset + ITEM_HEIGHT * 2,
        ];
        const color = scrollY.interpolate({
          inputRange,
          outputRange: [colors.lightGreen, colors.white, colors.darkGreen, colors.white, colors.lightGreen],
          extrapolate: 'clamp',
        });
        return (
          <View key={`${item}-${index}`} style={{ height: ITEM_HEIGHT, alignItems: 'center', justifyContent: 'center' }}>
            <Animated.Text style={{ fontFamily: 'Fredoka-SemiBold', fontSize: 20, color }}>
              {item}
            </Animated.Text>
          </View>
        );
      })}
    </Animated.ScrollView>
  )
}

export type TimeValue = {
  hour: number;
  minute: number;
  period: 'AM' | 'PM';
};

type TimePickerProps = {
  value: TimeValue;
  onChange: (value: TimeValue) => void;
};

export const TimePicker = ({ value, onChange }: TimePickerProps) => {
  const hourIndex = value.hour - 1;
  const minuteIndex = value.minute;
  const periodIndex = value.period === 'AM' ? 0 : 1;

  return (
    <View style={{ height: ITEM_HEIGHT * VISIBLE_COUNT }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <WheelColumn
          data={HOURS}
          selectedIndex={hourIndex}
          onIndexChange={(index) => onChange({ ...value, hour: index + 1 })}
          width={48}
        />
        <Animated.Text style={{ fontFamily: 'Fredoka-SemiBold', fontSize: 20, color: colors.darkGreen }}>
          :
        </Animated.Text>
        <WheelColumn
          data={MINUTES}
          selectedIndex={minuteIndex}
          onIndexChange={(index) => onChange({ ...value, minute: index })}
          width={48}
        />
        <WheelColumn
          data={PERIODS}
          selectedIndex={periodIndex}
          onIndexChange={(index) => onChange({ ...value, period: index === 0 ? 'AM' : 'PM' })}
          width={56}
        />
      </View>

      <View pointerEvents="none" style={{
        position: 'absolute',
        top: ITEM_HEIGHT * PADDING_COUNT,
        left: 0,
        right: 0,
        height: ITEM_HEIGHT,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.lightGreen,
      }}/>
    </View>
  )
}
