import { colors } from 'shared/styles/colors';

export type GradientProps = {
  gradientColors?: string[];
  gradientLocations?: number[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
};

export function ExtractGradientProps(props: GradientProps) {
  const { gradientColors, gradientLocations, gradientStart, gradientEnd } = props;
  return {
    gradientProps: {
      gradientColors: gradientColors || colors.gradient.colors,
      gradientLocations: gradientLocations || colors.gradient.locations,
      gradientStart: gradientStart || colors.gradient.startTransition,
      gradientEnd: gradientEnd || colors.gradient.endTransition,
    },
  };
}