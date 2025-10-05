import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DimensionProps, ExtractDimensionProps } from 'shared/types/styles/DimensionTypes';
import { FlexProps, ExtractFlexProps } from 'shared/types/styles/FlexTypes';
import { GradientProps, ExtractGradientProps } from 'shared/types/styles/GradientTypes';
import { MarginProps, ExtractMarginProps } from 'shared/types/styles/MarginTypes';
import { PaddingProps, ExtractPaddingProps } from 'shared/types/styles/PaddingTypes';
import { BorderProps, ExtractBorderProps } from 'shared/types/styles/BorderTypes';
import { ReactNode } from 'react';

type GradientBackgroundProps = {
  children: ReactNode;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
} & DimensionProps & GradientProps & FlexProps & MarginProps & PaddingProps & BorderProps;

export default function GradientBackground(props: GradientBackgroundProps) {
  const { 
    children,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
  } = props;
  
  const { gradientProps } = ExtractGradientProps(props);
  const { dimensionProps } = ExtractDimensionProps(props);
  const { flexProps } = ExtractFlexProps(props);
  const { marginProps } = ExtractMarginProps(props);
  const { paddingProps } = ExtractPaddingProps(props);
  const { borderProps } = ExtractBorderProps(props);

  const topLeftRadius = borderTopLeftRadius ?? borderProps.borderRadius ?? 0;
  const topRightRadius = borderTopRightRadius ?? borderProps.borderRadius ?? 0;
  const bottomLeftRadius = borderBottomLeftRadius ?? borderProps.borderRadius ?? 0;
  const bottomRightRadius = borderBottomRightRadius ?? borderProps.borderRadius ?? 0;

  const topWidth = borderProps.borderTopWidth ?? borderProps.borderWidth ?? 0;
  const rightWidth = borderProps.borderRightWidth ?? borderProps.borderWidth ?? 0;
  const bottomWidth = borderProps.borderBottomWidth ?? borderProps.borderWidth ?? 0;
  const leftWidth = borderProps.borderLeftWidth ?? borderProps.borderWidth ?? 0;

  const hasBorder = topWidth || rightWidth || bottomWidth || leftWidth;

  if (!hasBorder) {
    return (
      <LinearGradient
        colors={gradientProps.gradientColors as [string, string, ...string[]]}
        locations={gradientProps.gradientLocations as [number, number, ...number[]]}
        start={gradientProps.gradientStart}
        end={gradientProps.gradientEnd}
        style={{ 
          overflow: 'hidden',
          borderTopLeftRadius: topLeftRadius,
          borderTopRightRadius: topRightRadius,
          borderBottomLeftRadius: bottomLeftRadius,
          borderBottomRightRadius: bottomRightRadius,
          borderColor: borderProps.borderColor,
          borderStyle: borderProps.borderStyle,
          borderTopColor: borderProps.borderTopColor,
          borderRightColor: borderProps.borderRightColor,
          borderBottomColor: borderProps.borderBottomColor,
          borderLeftColor: borderProps.borderLeftColor,
          ...dimensionProps,
          ...flexProps,
          ...marginProps,
          ...paddingProps,
        }}
      >
        {children}
      </LinearGradient>
    );
  }

  const internalTopLeftRadius = Math.max(0, topLeftRadius - Math.max(topWidth, leftWidth));
  const internalTopRightRadius = Math.max(0, topRightRadius - Math.max(topWidth, rightWidth));
  const internalBottomLeftRadius = Math.max(0, bottomLeftRadius - Math.max(bottomWidth, leftWidth));
  const internalBottomRightRadius = Math.max(0, bottomRightRadius - Math.max(bottomWidth, rightWidth));

  return (
    <View style={{
      borderWidth: borderProps.borderWidth,
      borderColor: borderProps.borderColor,
      borderStyle: borderProps.borderStyle,
      borderTopWidth: borderProps.borderTopWidth,
      borderRightWidth: borderProps.borderRightWidth,
      borderBottomWidth: borderProps.borderBottomWidth,
      borderLeftWidth: borderProps.borderLeftWidth,
      borderTopColor: borderProps.borderTopColor,
      borderRightColor: borderProps.borderRightColor,
      borderBottomColor: borderProps.borderBottomColor,
      borderLeftColor: borderProps.borderLeftColor,
      borderTopLeftRadius: topLeftRadius,
      borderTopRightRadius: topRightRadius,
      borderBottomLeftRadius: bottomLeftRadius,
      borderBottomRightRadius: bottomRightRadius,
      ...dimensionProps,
      ...flexProps,
      ...marginProps,
    }}>
      <LinearGradient
        colors={gradientProps.gradientColors as [string, string, ...string[]]}
        locations={gradientProps.gradientLocations as [number, number, ...number[]]}
        start={gradientProps.gradientStart}
        end={gradientProps.gradientEnd}
        style={{
          borderTopLeftRadius: internalTopLeftRadius,
          borderTopRightRadius: internalTopRightRadius,
          borderBottomLeftRadius: internalBottomLeftRadius,
          borderBottomRightRadius: internalBottomRightRadius,
          overflow: 'hidden',
          ...paddingProps,
        }}
      >
        {children}
      </LinearGradient>
    </View>
  );
}
