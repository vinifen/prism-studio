import { View, TouchableOpacity, GestureResponderEvent, DimensionValue } from 'react-native'
import React from 'react'
import GradientBorderBox from '../gradient/GradientBorderBox'
import GradientText from '../gradient/GradientText'
import { DimensionProps } from 'shared/types/styles/DimensionTypes'
import { constants } from 'shared/styles/contants'

type SecondaryButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  isDisabled?: boolean;
  backgroundColor?: string;
  width?: DimensionValue;
  height?: DimensionValue;
} & DimensionProps;

export default function SecondaryButton(props: SecondaryButtonProps) {
  const { title, onPress, isDisabled, backgroundColor, width = '100%', height = 35 , ...dimensionProps } = props;

  return (
    <TouchableOpacity 
      onPress={onPress} 
      disabled={isDisabled}
      activeOpacity={0.7}
      style={{ opacity: isDisabled ? 0.5 : 1, width: width }}
    >
      <GradientBorderBox
        borderWidth={2}
        borderRadius={constants.DEFAULT_RADIUS}
        backgroundColor={backgroundColor ? backgroundColor : constants.colors.primary}
        height={typeof height === 'number' ? height + 4 : height}
        {...dimensionProps}
      >
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
          <GradientText fontSize={constants.fontSize.md} fontWeight="600">
            {title ? title : "Secondary BUTTON"}
          </GradientText>
        </View>
      </GradientBorderBox>
    </TouchableOpacity>
  )
}