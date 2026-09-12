import React, { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import { colors } from '@/theme/colors'
import { BottomModal } from '@/components/BottomModal';
import { View, Text, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { RoundedButton } from '@/components/RoundedButton';

type EditIconModalProps = {
    visible: boolean;
    onClose: () => void;
    icon: string | null;
    onSelectIcon: (icon: string) => void;
};

const ICONS_PER_ROW = 5;
const ROWS_PER_PAGE = 2;
const ICONS_PER_PAGE = ICONS_PER_ROW * ROWS_PER_PAGE;

export const EditIconModal = ({ visible, onClose, icon, onSelectIcon }: EditIconModalProps) => {
  const [pageWidth, setPageWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(icon);

  useEffect(() => {
    if (visible) {
      setSelectedIcon(icon);
      setCurrentPage(0);
    }
  }, [visible, icon]);

  const handleUseIcon = () => {
    if (!selectedIcon) return;
    onSelectIcon(selectedIcon);
    onClose();
  };

  const icons = [
    "📚", "📝", "📖", "💻","💼",
    "🎯 ", "🧠", "🏋️", "🍎","💊",
    "🌙", "🍳", "☀️", "⏰","🎵",
    "📷", "🏠", "🧴", "🛌","🚶",
    "🧘", "🧺", "🎸", "🧑‍🤝‍🧑","👨‍🍳",
    "🌳", "🌿", "🚿", "🧹","👟",
  ]

  const pages = Array.from(
  { length: Math.ceil(icons.length / ICONS_PER_PAGE) },
  (_, pageIndex) =>
    icons.slice(
      pageIndex * ICONS_PER_PAGE,
      (pageIndex + 1) * ICONS_PER_PAGE
    )
);

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!pageWidth) return;
    setCurrentPage(Math.round(event.nativeEvent.contentOffset.x / pageWidth));
  };

  return (
    <BottomModal
      visible={visible}
      onClose={onClose}
      header="Habit Icon"
    >
    <View
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      marginTop: 16,
    }}>
      <View
        style={{ marginBottom: 16 }}
        onLayout={(e) => setPageWidth(e.nativeEvent.layout.width)}
      >
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScrollEnd}
        >
          {pages.map((pageIcons, pageIndex) => (
            <View key={pageIndex} style={{ width: pageWidth, gap: 16 }}>
              {Array.from(
                { length: Math.ceil(pageIcons.length / ICONS_PER_ROW) },
                (_, rowIndex) => pageIcons.slice(rowIndex * ICONS_PER_ROW, rowIndex * ICONS_PER_ROW + ICONS_PER_ROW)
              ).map((row, rowIndex) => (
                <View key={rowIndex} style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  {row.map((icon, iconIndex) => (
                    <RoundedButton
                      key={iconIndex}
                      icon={<Text style={{ fontSize: 32 }}>{icon}</Text>}
                      size={56}
                      onPress={() => setSelectedIcon(icon)}
                      border={selectedIcon === icon}
                    />
                  ))}
                </View>
              ))}
            </View>
          ))}
        </ScrollView>

        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 6, marginTop: 12 }}>
          {pages.map((_, pageIndex) => (
            <View
              key={pageIndex}
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: pageIndex === currentPage ? colors.darkGreen : colors.disabledGreen,
              }}
            />
          ))}
        </View>
      </View>
      <Button
        value={ selectedIcon ? 'Use Icon' : 'Select an Icon'}
        textColor={ selectedIcon? colors.white : colors.lightGreen}
        onPress={handleUseIcon}
        disabled={!selectedIcon}
        bgColor={!selectedIcon ? colors.disabledGreen : colors.darkGreen}
      />
    </View>
    </BottomModal>
  )
}
