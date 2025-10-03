import { ViewStyle } from 'react-native';
import { 
  SpacingProps, 
  FlexProps, 
  DimensionProps, 
  PositionProps, 
  StyleProps 
} from '../types/DivTypes';

export const getSpacingStyles = ({
  m, mt, mb, ml, mr, mx, my,
  p, pt, pb, pl, pr, px, py
}: SpacingProps): ViewStyle => ({
  marginTop: mt ?? my ?? m,
  marginBottom: mb ?? my ?? m,
  marginLeft: ml ?? mx ?? m,
  marginRight: mr ?? mx ?? m,

  paddingTop: pt ?? py ?? p,
  paddingBottom: pb ?? py ?? p,
  paddingLeft: pl ?? px ?? p,
  paddingRight: pr ?? px ?? p,
});

export const getFlexStyles = ({
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  alignSelf,
  flexWrap,
  flexGrow,
  flexShrink,
  flexBasis
}: FlexProps): ViewStyle => ({
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  alignSelf,
  flexWrap,
  flexGrow,
  flexShrink,
  flexBasis,
});

export const getDimensionStyles = ({
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight
}: DimensionProps): ViewStyle => ({
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
});

export const getPositionStyles = ({
  position,
  top,
  bottom,
  left,
  right,
  zIndex
}: PositionProps): ViewStyle => ({
  position,
  top,
  bottom,
  left,
  right,
  zIndex,
});

export const getGeneralStyles = ({
  backgroundColor,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  opacity,
  overflow,
  borderWidth,
  borderColor,
  borderTopWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderRightWidth,
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  elevation
}: StyleProps): ViewStyle => ({
  backgroundColor,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  opacity,
  overflow,
  borderWidth,
  borderColor,
  borderTopWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderRightWidth,
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  elevation,
});

export const combineStyles = (
  spacingProps: SpacingProps,
  flexProps: FlexProps,
  dimensionProps: DimensionProps,
  positionProps: PositionProps,
  styleProps: StyleProps,
  customStyle?: ViewStyle
): ViewStyle => ({
  ...getSpacingStyles(spacingProps),
  ...getFlexStyles(flexProps),
  ...getDimensionStyles(dimensionProps),
  ...getPositionStyles(positionProps),
  ...getGeneralStyles(styleProps),
  ...customStyle,
});

export const getStrokePadding = (
  strokeWidth: number,
  strokeSides: ('top' | 'bottom' | 'left' | 'right')[],
  originalPadding: { 
    paddingTop?: number; 
    paddingBottom?: number; 
    paddingLeft?: number; 
    paddingRight?: number; 
  }
): ViewStyle => ({
  paddingTop: (strokeSides.includes('top') ? strokeWidth : 0) + (originalPadding.paddingTop || 0),
  paddingBottom: (strokeSides.includes('bottom') ? strokeWidth : 0) + (originalPadding.paddingBottom || 0),
  paddingLeft: (strokeSides.includes('left') ? strokeWidth : 0) + (originalPadding.paddingLeft || 0),
  paddingRight: (strokeSides.includes('right') ? strokeWidth : 0) + (originalPadding.paddingRight || 0),
});
