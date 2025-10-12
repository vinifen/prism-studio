import React from "react";
import { Text, TextProps as RNTextProps, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { GradientProps, ExtractGradientProps } from "shared/types/styles/GradientTypes";
import { TextProps, ExtractTextProps } from "shared/types/styles/TextTypes";

type GradientTextProps = {
  children?: React.ReactNode;
} & Omit<RNTextProps, keyof TextProps> & GradientProps & TextProps;

export default function GradientText(props: GradientTextProps) {
  const { children, ...restProps } = props;
  
  const { gradientProps } = ExtractGradientProps(restProps);
  const { textProps } = ExtractTextProps(restProps);

  const { 
    gradientColors, 
    gradientLocations, 
    gradientStart, 
    gradientEnd,
    fontSize,
    fontWeight,
    fontStyle,
    fontFamily,
    lineHeight,
    letterSpacing,
    textAlign,
    textDecorationLine,
    textDecorationStyle,
    textDecorationColor,
    textTransform,
    color,
    ...nativeTextProps 
  } = restProps;
  
  return (
    <View style={{ alignItems: 'flex-start' }}>
      <MaskedView 
        maskElement={
          <Text {...nativeTextProps} style={[nativeTextProps.style, textProps]}>
            {children}
          </Text>
        }
        style={{ alignSelf: 'flex-start' }}
      >
        <LinearGradient
          colors={gradientProps.gradientColors as [string, string, ...string[]]}
          locations={gradientProps.gradientLocations as [number, number, ...number[]]}
          start={gradientProps.gradientStart}
          end={gradientProps.gradientEnd}
          style={{ alignSelf: 'flex-start' }}
        >
          <Text 
            {...nativeTextProps} 
            style={[nativeTextProps.style, { opacity: 0, ...textProps }]}
          >
            {children}
          </Text>
        </LinearGradient>
      </MaskedView>
    </View>
  );
}