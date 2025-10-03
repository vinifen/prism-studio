// Tipos base para flexbox
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
export type AlignSelf = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
export type Position = 'absolute' | 'relative';


export interface SpacingProps {
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mx?: number;
  my?: number;
  
  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  px?: number;
  py?: number;
}

export interface FlexProps {
  flex?: number;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  flexWrap?: FlexWrap;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number;
}

export interface DimensionProps {
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
}

export interface PositionProps {
  position?: Position;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  zIndex?: number;
}

export interface GradientProps {
  gradientBackground?: boolean;
  gradientStroke?: boolean;
  gradientColors?: readonly string[];
  gradientLocations?: readonly number[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
  strokeWidth?: number;
  strokeSides?: ('top' | 'bottom' | 'left' | 'right')[];
}

export interface StyleProps {
  backgroundColor?: string;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  opacity?: number;
  overflow?: 'visible' | 'hidden' | 'scroll';
  
  borderWidth?: number;
  borderColor?: string;
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  
  shadowColor?: string;
  shadowOffset?: { width: number; height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number; // Android
}

export interface InteractionProps {
  onPress?: () => void;
  onLongPress?: () => void;
}

export interface DivProps extends 
  SpacingProps, 
  FlexProps, 
  DimensionProps, 
  PositionProps, 
  GradientProps, 
  StyleProps, 
  InteractionProps {
  children?: React.ReactNode;
  style?: import('react-native').ViewStyle;
}
