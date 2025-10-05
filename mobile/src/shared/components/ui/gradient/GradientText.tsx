import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { GradientProps, ExtractGradientProps } from "shared/types/styles/GradientTypes";
import { ComponentProps } from "react";

type GradientTextProps = ComponentProps<typeof Text> & GradientProps;

export default function GradientText (props: GradientTextProps) {
  const { gradientProps } = ExtractGradientProps(props);
  return (
    <MaskedView 
      maskElement={<Text {...props} />}
      style={{ alignSelf: 'flex-start' }}
    >
      <LinearGradient
        colors={gradientProps.gradientColors as [string, string, ...string[]]}
        locations={gradientProps.gradientLocations as [number, number, ...number[]]}
        start={gradientProps.gradientStart}
        end={gradientProps.gradientEnd}
        style={{ alignSelf: 'flex-start' }}
      >
        <Text allowFontScaling={false} {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};