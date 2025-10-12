export type PaddingProps = {
  padding?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
};

export function ExtractPaddingProps(props: PaddingProps) {
  const {
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingHorizontal,
    paddingVertical,
  } = props;
  return {
    paddingProps: {
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingHorizontal,
      paddingVertical,
    },
  };
}
