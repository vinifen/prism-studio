import { constants } from "shared/styles/contants";

export type TextProps = {
  fontSize?: number;
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  fontStyle?: 'normal' | 'italic';
  fontFamily?: string;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
  textDecorationColor?: string;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  color?: string;
};

export function ExtractTextProps(props: TextProps) {
  const {
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
  } = props;
  
  return {
    textProps: {
      fontSize: fontSize || constants.fontSize.xl,
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
    },
  };
}
