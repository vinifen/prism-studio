import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from 'shared/styles/colors';

interface GradientBorderBoxProps {
  children: React.ReactNode;
  borderRadius?: number;
  padding?: number;
  gradientColors?: string[];
  gradientLocations?: number[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
}

export default function GradientBorderBox({
  children,
  borderRadius = 10,
  padding = 1,
  gradientColors = colors.gradient.colors,
  gradientLocations = colors.gradient.locations,
  gradientStart = colors.gradient.startTransition,
  gradientEnd = colors.gradient.endTransition,
}: GradientBorderBoxProps) {
  return (
    <LinearGradient
      colors={gradientColors as [string, string, ...string[]]}
      locations={gradientLocations as [number, number, ...number[]]}
      start={gradientStart}
      end={gradientEnd}
      style={{ padding: padding, borderRadius: borderRadius }}
    >
      <View style={{ borderRadius: borderRadius, overflow: 'hidden' }}>
        {children}
      </View>
    </LinearGradient>
  );
}
