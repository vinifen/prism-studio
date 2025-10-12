import React from 'react';
import { StyleSheet, Pressable, StyleProp, ViewStyle } from 'react-native';
import Checkbox from 'expo-checkbox';
import GradientText from './gradient/GradientText';
import { constants } from 'shared/styles/contants';

type RememberMeProps = {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  label?: string;
  style?: StyleProp<ViewStyle>
};

export default function RememberMe({
  value,
  onValueChange,
  label = 'Remember me',
  style
}: RememberMeProps) {
  
  return (
    <Pressable
      style={[{flexDirection: 'row', alignItems: 'center', gap: 8}, style]}
      onPress={() => onValueChange(!value)}
    >
      <Checkbox
        value={value}
        onValueChange={onValueChange}
        style={{width: 18, height: 18,}}
      />
      <GradientText fontSize={constants.fontSize.md}>{label}</GradientText>
    </Pressable>
  );
}
