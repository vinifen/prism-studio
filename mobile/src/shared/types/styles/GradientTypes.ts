import { constants } from 'shared/styles/contants';

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
      gradientColors: gradientColors || constants.colors.gradient.colors,
      gradientLocations: gradientLocations || constants.colors.gradient.locations,
      gradientStart: gradientStart || constants.colors.gradient.startTransition,
      gradientEnd: gradientEnd || constants.colors.gradient.endTransition,
    },
  };
}