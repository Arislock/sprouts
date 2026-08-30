import { Modal, Pressable, View } from 'react-native'
import { colors } from '../theme/colors'
import { SPACING } from '../theme/spacing'
import { DisplayText } from './DisplayText';
import CancelIcon from '@/assets/icons/cancel.svg'
import { RoundedButton } from './RoundedButton';
import { Button } from './Button';

type BottomModalProps = {
    visible: boolean;
    onClose: () => void;
    header: string;
    buttonText: string;
    buttonColor: string;
    onButtonPress: () => void;
    buttonDisabled?: boolean;
};

export const BottomModal = ({ visible, onClose, header, buttonText, buttonColor, onButtonPress, buttonDisabled }: BottomModalProps) => {

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.4)',
          justifyContent: 'flex-end',
        }}
        onPress={onClose}
      >
        <Pressable
          style={{
            backgroundColor: colors.lightGreen,
            borderTopLeftRadius: 36,
            borderTopRightRadius: 36,
            padding: SPACING.xl,
          }}
          onPress={() => {}}
        >
          <View style={{ flexDirection: "column"}}>
          
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'flex-end' }}>
            
            <View style={{ position: "absolute", left: 0, right: 0, alignItems: 'center' }}>
              <DisplayText value={header} color={colors.darkGreen} variant="mediumBold"/>
            </View>

            <RoundedButton
              icon={<CancelIcon width={18} height={18} color={colors.darkGreen}/>}
              size={36}
              onPress={onClose}
            />
            
          </View>
          <Button
            displayText={buttonText}
            textColor={buttonColor}
            onPress={onButtonPress}
            disabled={buttonDisabled}
            bgColor={buttonDisabled ? colors.disabledGreen : colors.darkGreen}
          />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  )
}
