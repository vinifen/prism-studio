import { TouchableOpacity, GestureResponderEvent, Text } from 'react-native'
import React from 'react'
import GradientBorderBox from '../gradient/GradientBorderBox'
import GradientBackground from '../gradient/GradientBackground'
import { DimensionProps } from 'shared/types/styles/DimensionTypes'
import { constants } from 'shared/styles/contants'

type PrimaryButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  isDisabled?: boolean;
} & DimensionProps;

export default function PrimaryButton(props: PrimaryButtonProps) {
  const { title, onPress, isDisabled, ...dimensionProps } = props;

  return (
    <TouchableOpacity 
      onPress={onPress} 
      disabled={isDisabled}
      activeOpacity={0.7}
      style={{ opacity: isDisabled ? 0.5 : 1 }}
    >
      <GradientBorderBox 
        borderWidth={2} 
        borderRadius={constants.DEFAULT_RADIUS}
      >
        <GradientBackground
          paddingHorizontal={constants.spacing.lg}
          paddingVertical={constants.spacing.md}
          justifyContent='center'
          alignItems='center'
          {...dimensionProps}
        >
          <Text style={{ fontSize: constants.fontSize.md, fontWeight: "600", color: constants.colors.primary }}>
            {title ? title : "Primary BUTTON"}
          </Text>
        </GradientBackground>
      </GradientBorderBox>
    </TouchableOpacity>
  )
}