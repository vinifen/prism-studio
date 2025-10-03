import React from 'react';
import { View, TouchableOpacity, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from 'shared/styles/colors';
import { InteractionProps } from '../types/DivTypes';
import { getStrokePadding } from '../utils/styleHelpers';

interface GradientCombinedProps extends InteractionProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  strokeWidth?: number;
  strokeSides?: ('top' | 'bottom' | 'left' | 'right')[];
  gradientColors?: readonly string[];
  gradientLocations?: readonly number[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
}

const GradientCombined: React.FC<GradientCombinedProps> = ({
  children,
  style,
  strokeWidth = 2,
  strokeSides = ['top', 'bottom', 'left', 'right'],
  gradientColors = colors.gradient.colors,
  gradientLocations = colors.gradient.locations,
  gradientStart = { x: 0, y: 0 },
  gradientEnd = { x: 1, y: 0 },
  onPress,
  onLongPress,
  ...props
}) => {
  
  const ViewComponent = onPress || onLongPress ? TouchableOpacity : View;
  
  const originalPadding = {
    paddingTop: (style?.paddingTop as number) || 0,
    paddingBottom: (style?.paddingBottom as number) || 0,
    paddingLeft: (style?.paddingLeft as number) || 0,
    paddingRight: (style?.paddingRight as number) || 0,
  };
  
  const strokePadding = getStrokePadding(strokeWidth, strokeSides, originalPadding);
  
  const styleWithoutPadding = style ? {
    ...style,
    paddingTop: undefined,
    paddingBottom: undefined,
    paddingLeft: undefined,
    paddingRight: undefined,
  } : {};

  return (
    <LinearGradient
      colors={gradientColors as any}
      locations={gradientLocations as any}
      start={gradientStart}
      end={gradientEnd}
      style={[styleWithoutPadding, strokePadding]}
    >
      <LinearGradient
        colors={gradientColors as any}
        locations={gradientLocations as any}
        start={gradientStart}
        end={gradientEnd}
        style={[
          {
            flex: 1,
          },
          originalPadding
        ]}
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
    </LinearGradient>
  );
};

export default GradientCombined;
