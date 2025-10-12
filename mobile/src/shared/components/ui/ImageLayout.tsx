import React, { useState, useEffect } from 'react';
import { ImageSourcePropType, Image, useWindowDimensions } from 'react-native';
import { constants } from 'shared/styles/contants';
import Div from './Div';

type ImageLayoutType = {
  imageSource?: ImageSourcePropType | null;
};

export default function ImageLayout({ imageSource }: ImageLayoutType) {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const { width: screenWidth } = useWindowDimensions();

  useEffect(() => {
    if (imageSource) {
      const { uri } = Image.resolveAssetSource(imageSource);
      Image.getSize(uri, (width, height) => {
        setAspectRatio(width / height);
      });
    }
  }, [imageSource]);
  const maxImageHeight = 250;
  
  return (
    <>
    {aspectRatio && imageSource && (
      <Div
        backgroundColor={constants.colors.secondary}
        justifyContent='center'
        alignItems='center'
        borderRadius={12}
        borderWidth={1}
        borderColor={constants.colors.secondary}
        style={{ overflow: 'hidden' }}
      >
        <Image
          source={imageSource}
          resizeMode="contain"
          style={{
            width: '100%',
            height: Math.min(screenWidth / aspectRatio, maxImageHeight),
            borderRadius: 10,
          }}
        />
      </Div>
    )}
    </>
  );
}