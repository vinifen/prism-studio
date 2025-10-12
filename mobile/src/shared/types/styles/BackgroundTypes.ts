export type BackgroundProps = {
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
};

export const ExtractBackgroundProps = (props: any): { backgroundProps: BackgroundProps } => {
  const { backgroundColor, backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat } = props;
  return {
    backgroundProps: {
      backgroundColor: backgroundColor || '#ffffff',
      backgroundImage,
      backgroundSize,
      backgroundPosition,
      backgroundRepeat,
    },
  };
};
