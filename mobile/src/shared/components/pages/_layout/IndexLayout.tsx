import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native';
import CustomDrawer from './CustomDrawer';

export default function IndexDrawer() {
  return (
      <>
        <StatusBar backgroundColor={"#000000"} />
        <CustomDrawer />
      </>
    );
}