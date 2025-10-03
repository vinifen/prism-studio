import React from 'react';
import { View, TouchableOpacity, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from 'shared/styles/colors';
import { InteractionProps } from '../types/DivTypes';

interface GradientBackgroundProps extends InteractionProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  gradientColors?: readonly string[];
  gradientLocations?: readonly number[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  style,
  gradientColors = colors.gradient.colors,
  gradientLocations = colors.gradient.locations,
  gradientStart = { x: 0, y: 0 },
  gradientEnd = { x: 1, y: 0 },
  onPress,
  onLongPress,
  ...props
}) => {
  const ViewComponent = onPress || onLongPress ? TouchableOpacity : View;
  
  return (
    <LinearGradient
      colors={gradientColors as any}
      locations={gradientLocations as any}
      start={gradientStart}
      end={gradientEnd}
      style={style}
    >
      <ViewComponent 
        style={{ flex: 1 }}
        onPress={onPress}
        onLongPress={onLongPress}
        {...props}
      >
        {children}
      </ViewComponent>
    </LinearGradient>
  );
};

export default GradientBackground;
