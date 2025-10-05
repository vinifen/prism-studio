export type FlexProps = {
  flex?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
};

export function ExtractFlexProps(props: FlexProps) {
  const {
    flex,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignSelf,
    alignContent,
  } = props;

  return {
    flexProps: {
      flex,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignSelf,
      alignContent,
    },
  };
}
