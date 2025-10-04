import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from 'shared/styles/colors';

interface GradientBackgroundProps {
  children: React.ReactNode;
  borderRadius?: number;
  padding?: number;
  gradientColors?: string[];
  gradientLocations?: number[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
}

export default function GradientBackground({
  children,
  borderRadius = 10,
  padding = 16,
  gradientColors = colors.gradient.colors,
  gradientLocations = colors.gradient.locations,
  gradientStart = colors.gradient.startTransition,
  gradientEnd = colors.gradient.endTransition,
}: GradientBackgroundProps) {
  return (
    <LinearGradient
      colors={gradientColors as [string, string, ...string[]]}
      locations={gradientLocations as [number, number, ...number[]]}
      start={gradientStart}
      end={gradientEnd}
      style={{ 
        padding: padding, 
        borderRadius: borderRadius,
        overflow: 'hidden'
      }}
    >
      {children}
    </LinearGradient>
  );
}
