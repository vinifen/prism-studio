import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DimensionProps, ExtractDimensionProps } from 'shared/types/styles/DimensionTypes';
import { GradientProps, ExtractGradientProps } from 'shared/types/styles/GradientTypes';
import { FlexProps, ExtractFlexProps } from 'shared/types/styles/FlexTypes';
import { MarginProps, ExtractMarginProps } from 'shared/types/styles/MarginTypes';
import { PaddingProps, ExtractPaddingProps } from 'shared/types/styles/PaddingTypes';
import { BackgroundProps, ExtractBackgroundProps } from 'shared/types/styles/BackgroundTypes';
import { ReactNode } from 'react';

type GradientBorderBoxProps = {
  children: ReactNode;

  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;

  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
} & DimensionProps & GradientProps & FlexProps & MarginProps & PaddingProps & BackgroundProps;

export default function GradientBorderBox(props: GradientBorderBoxProps) {
  const { 
    children,
    borderWidth = 0,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRadius = 0,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius
  } = props;
  
  const { gradientProps } = ExtractGradientProps(props);
  const { dimensionProps } = ExtractDimensionProps(props);
  const { flexProps } = ExtractFlexProps(props);
  const { marginProps } = ExtractMarginProps(props);
  const { paddingProps } = ExtractPaddingProps(props);
  const { backgroundProps } = ExtractBackgroundProps(props);

  const topWidth = borderTopWidth ?? borderWidth;
  const rightWidth = borderRightWidth ?? borderWidth;
  const bottomWidth = borderBottomWidth ?? borderWidth;
  const leftWidth = borderLeftWidth ?? borderWidth;

  const topLeftRadius = borderTopLeftRadius ?? borderRadius;
  const topRightRadius = borderTopRightRadius ?? borderRadius;
  const bottomLeftRadius = borderBottomLeftRadius ?? borderRadius;
  const bottomRightRadius = borderBottomRightRadius ?? borderRadius;

  if (!topWidth && !rightWidth && !bottomWidth && !leftWidth) {
    return (
      <View style={{
        ...dimensionProps,
        ...flexProps,
        ...marginProps,
        ...paddingProps,
        ...backgroundProps,
        borderRadius: borderRadius,
      }}>
        {children}
      </View>
    );
  }

  const hasFixedDimensions = dimensionProps.width || dimensionProps.height;

  return (
    <LinearGradient
      colors={gradientProps.gradientColors as [string, string, ...string[]]}
      locations={gradientProps.gradientLocations as [number, number, ...number[]]}
      start={gradientProps.gradientStart}
      end={gradientProps.gradientEnd}
      style={{

        paddingTop: topWidth,
        paddingRight: rightWidth,
        paddingBottom: bottomWidth,
        paddingLeft: leftWidth,

        borderTopLeftRadius: topLeftRadius,
        borderTopRightRadius: topRightRadius,
        borderBottomLeftRadius: bottomLeftRadius,
        borderBottomRightRadius: bottomRightRadius,
        ...dimensionProps,
        ...flexProps,
        ...marginProps,
      }}
    >
      <View style={{
        borderTopLeftRadius: Math.max(0, topLeftRadius - Math.max(topWidth, leftWidth)),
        borderTopRightRadius: Math.max(0, topRightRadius - Math.max(topWidth, rightWidth)),
        borderBottomLeftRadius: Math.max(0, bottomLeftRadius - Math.max(bottomWidth, leftWidth)),
        borderBottomRightRadius: Math.max(0, bottomRightRadius - Math.max(bottomWidth, rightWidth)),
        ...backgroundProps,
        ...paddingProps,
        overflow: 'hidden',
        ...(hasFixedDimensions && {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }),
      }}>
        {children}
      </View>
    </LinearGradient>
  );
}
