import { DimensionValue } from "react-native";

export type DimensionProps = {
  width?: DimensionValue;
  height?: DimensionValue;
};

export function ExtractDimensionProps(props: DimensionProps) {
  const { width, height } = props;
  return {
    dimensionProps: {
      width,
      height,
    },
  };
}
