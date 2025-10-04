import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "shared/styles/colors";

interface GradientTextProps extends React.ComponentProps<typeof Text> {
  gradientColors?: string[];
  gradientLocations?: number[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
}
    
export default function GradientText ({
  gradientColors = colors.gradient.colors,
  gradientLocations = colors.gradient.locations,
  gradientStart = colors.gradient.startTransition,
  gradientEnd = colors.gradient.endTransition,
  ...props
}: GradientTextProps) {
  return (
    <MaskedView 
      maskElement={<Text {...props} />}
      style={{ alignSelf: 'flex-start' }}
    >
      <LinearGradient
        colors={gradientColors as [string, string, ...string[]]}
        locations={gradientLocations as [number, number, ...number[]]}
        start={gradientStart}
        end={gradientEnd}
        style={{ alignSelf: 'flex-start' }}
      >
        <Text allowFontScaling={false} {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};