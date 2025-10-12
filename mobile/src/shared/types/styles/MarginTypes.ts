export type MarginProps = {
  margin?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginHorizontal?: number;
  marginVertical?: number;
};

export function ExtractMarginProps(props: MarginProps) {
  const {
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    marginHorizontal,
    marginVertical,
  } = props;
  return {
    marginProps: {
      margin,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginHorizontal,
      marginVertical,
    },
  };
}