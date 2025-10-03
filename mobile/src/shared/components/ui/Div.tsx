import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { colors } from 'shared/styles/colors';

import { DivProps } from './types/DivTypes';
import { combineStyles } from './utils/styleHelpers';

import GradientBackground from './components/GradientBackground';
import GradientStroke from './GradientStroke';
import GradientCombined from './components/GradientCombined';

const Div: React.FC<DivProps> = ({
  children,
  style,
  onPress,
  onLongPress,
  

  m, mt, mb, ml, mr, mx, my,
  p, pt, pb, pl, pr, px, py,
  

  flex, flexDirection, justifyContent, alignItems, alignSelf, flexWrap,
  flexGrow, flexShrink, flexBasis,

  width, height, minWidth, minHeight, maxWidth, maxHeight,

  position, top, bottom, left, right, zIndex,
  

  gradientBackground = false,
  gradientStroke = false,
  gradientColors = colors.gradient.colors,
  gradientLocations = colors.gradient.locations,
  gradientStart = { x: 0, y: 0 },
  gradientEnd = { x: 1, y: 0 },
  strokeWidth = 2,
  strokeSides = ['top', 'bottom', 'left', 'right'],
  

  backgroundColor,
  borderRadius, borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius,
  opacity, overflow,
  borderWidth, borderColor, borderTopWidth, borderBottomWidth, borderLeftWidth, borderRightWidth,
  shadowColor, shadowOffset, shadowOpacity, shadowRadius, elevation,
  
  ...props
}) => {
  
  const combinedStyles = combineStyles(
    { m, mt, mb, ml, mr, mx, my, p, pt, pb, pl, pr, px, py },
    { flex, flexDirection, justifyContent, alignItems, alignSelf, flexWrap, flexGrow, flexShrink, flexBasis },
    { width, height, minWidth, minHeight, maxWidth, maxHeight },
    { position, top, bottom, left, right, zIndex },
    {
      backgroundColor: !gradientBackground ? backgroundColor : undefined,
      borderRadius, borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius,
      opacity, overflow,
      borderWidth, borderColor, borderTopWidth, borderBottomWidth, borderLeftWidth, borderRightWidth,
      shadowColor, shadowOffset, shadowOpacity, shadowRadius, elevation
    },
    style
  );
  
  const gradientProps = {
    gradientColors,
    gradientLocations,
    gradientStart,
    gradientEnd,
    onPress,
    onLongPress,
    ...props
  };
  
  const strokeProps = {
    strokeWidth,
    strokeSides,
    backgroundColor,
  };
  
  const ViewComponent = onPress || onLongPress ? TouchableOpacity : View;
  
  if (!gradientBackground && !gradientStroke) {
    return (
      <ViewComponent 
        style={combinedStyles}
        onPress={onPress}
        onLongPress={onLongPress}
        {...props}
      >
        {children}
      </ViewComponent>
    );
  }

  if (gradientBackground && !gradientStroke) {
    return (
      <GradientBackground
        style={combinedStyles}
        {...gradientProps}
      >
        {children}
      </GradientBackground>
    );
  }
  
  if (!gradientBackground && gradientStroke) {
    return (
      <GradientStroke
        style={combinedStyles}
        {...gradientProps}
        {...strokeProps}
      >
        {children}
      </GradientStroke>
    );
  }
  
  if (gradientBackground && gradientStroke) {
    return (
      <GradientCombined
        style={combinedStyles}
        {...gradientProps}
        {...strokeProps}
      >
        {children}
      </GradientCombined>
    );
  }
  
  return null;
};

export default Div;
