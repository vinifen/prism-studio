import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import _MainDrawerUserButtons from './_MainDrawerUserButtons';

export default function _MainDrawerContent() {
  const insets = useSafeAreaInsets();
  return (
    <_MainDrawerUserButtons/>
  )
}