import React, { useEffect, useState } from 'react'
import { View, LayoutChangeEvent } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated'
import { colors } from '@/theme/colors'

type SliderProps = {
  min: number;
  max: number;
  value: number;
  onValueChange: (value: number) => void;
  trackHeight?: number;
  thumbSize?: number;
};

const clamp = (val: number, lo: number, hi: number) => Math.min(Math.max(val, lo), hi);

export const Slider = ({
  min,
  max,
  value,
  onValueChange,
  trackHeight = 8,
  thumbSize = 28,
}: SliderProps) => {
  const [trackWidth, setTrackWidth] = useState(0);
  const position = useSharedValue(0);
  const startPosition = useSharedValue(0);

  useEffect(() => {
    if (trackWidth > 0) {
      position.value = clamp(((value - min) / (max - min)) * trackWidth, 0, trackWidth);
    }
  }, [value, trackWidth, min, max]);

  const emitValue = (pos: number) => {
    const fraction = trackWidth > 0 ? pos / trackWidth : 0;
    onValueChange(Math.round(min + fraction * (max - min)));
  };

  const pan = Gesture.Pan()
    .onStart(() => {
      startPosition.value = position.value;
    })
    .onUpdate((event) => {
      position.value = clamp(startPosition.value + event.translationX, 0, trackWidth);
      runOnJS(emitValue)(position.value);
    });

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value - thumbSize / 2 }],
  }));

  const fillStyle = useAnimatedStyle(() => ({
    width: position.value,
  }));

  return (
    <View
      style={{ height: thumbSize, justifyContent: 'center' }}
      onLayout={(e: LayoutChangeEvent) => setTrackWidth(e.nativeEvent.layout.width)}
    >
      <View style={{
        height: trackHeight,
        borderRadius: trackHeight / 2,
        backgroundColor: colors.lightGreen,
        overflow: 'hidden',
      }}>
        <Animated.View style={[{
          height: trackHeight,
          backgroundColor: colors.darkGreen,
          borderRadius: trackHeight / 2,
        }, fillStyle]}/>
      </View>

      <GestureDetector gesture={pan}>
        <Animated.View style={[{
          position: 'absolute',
          width: thumbSize,
          height: thumbSize,
          borderRadius: thumbSize / 2,
          backgroundColor: colors.white,
          borderWidth: 2,
          borderColor: colors.darkGreen,
        }, thumbStyle]}/>
      </GestureDetector>
    </View>
  )
}
