import { View, TouchableOpacity, GestureResponderEvent } from 'react-native'
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
} & DimensionProps;

export default function SecondaryButton(props: SecondaryButtonProps) {
  const { title, onPress, isDisabled, backgroundColor, ...dimensionProps } = props;

  return (
    <TouchableOpacity 
      onPress={onPress} 
      disabled={isDisabled}
      activeOpacity={0.7}
      style={{ opacity: isDisabled ? 0.5 : 1 }}
    >
      <GradientBorderBox
        borderWidth={2}
        justifyContent='center'
        borderRadius={constants.DEFAULT_RADIUS}
        paddingHorizontal={constants.spacing.lg}
        paddingVertical={constants.spacing.md}
        backgroundColor={backgroundColor ? backgroundColor : constants.colors.primary}
        {...dimensionProps}
      >
        <View style={{alignItems: 'center'}}>
          <GradientText fontSize={constants.fontSize.md} fontWeight="600">
            {title ? title : "Secondary BUTTON"}
          </GradientText>
        </View>
      </GradientBorderBox>
    </TouchableOpacity>
  )
}