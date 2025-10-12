import React from 'react';
import { Image, View } from 'react-native';


export default function LogoImage({ width = 30}: {width?: number}) {
  return (
    <Image
      source={require("assets/images/prism-studio.png")}
      resizeMode="contain"
      style={{ width, height: width}}
    />
  );
}