import { TouchableOpacity, GestureResponderEvent, Text, DimensionValue } from 'react-native'
import React from 'react'
import GradientBorderBox from '../gradient/GradientBorderBox'
import GradientBackground from '../gradient/GradientBackground'
import { DimensionProps } from 'shared/types/styles/DimensionTypes'
import { constants } from 'shared/styles/contants'

type PrimaryButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  isDisabled?: boolean;
  width?: DimensionValue;
  height?: DimensionValue;
} & DimensionProps;

export default function PrimaryButton(props: PrimaryButtonProps) {
  const { title, onPress, isDisabled, width = '100%', height = 40, ...dimensionProps } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
      style={{ opacity: isDisabled ? 0.5 : 1, width: width}}
    >
      <GradientBorderBox 
        borderWidth={2}
        borderRadius={constants.DEFAULT_RADIUS}
        height={typeof height === 'number' ? height + 4 : height}
      >
        <GradientBackground
          width={'100%'}
          height={'100%'}
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