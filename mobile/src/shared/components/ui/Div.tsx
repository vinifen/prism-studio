import { View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { DimensionProps } from 'shared/types/styles/DimensionTypes'
import { FlexProps } from 'shared/types/styles/FlexTypes'
import { MarginProps } from 'shared/types/styles/MarginTypes'
import { PaddingProps } from 'shared/types/styles/PaddingTypes'
import { BorderProps } from 'shared/types/styles/BorderTypes'
import { BackgroundProps } from 'shared/types/styles/BackgroundTypes'

type DivProps = {
  children?: ReactNode;
  style?: ViewStyle | ViewStyle[];
} & DimensionProps & FlexProps & MarginProps & PaddingProps & BorderProps & BackgroundProps;


export default function Div(props: DivProps) {
  const { children, style, ...styleProps } = props;
  
  return (
    <View style={[
      styleProps,
      style
    ]}>
      {children}
    </View>
  )
}