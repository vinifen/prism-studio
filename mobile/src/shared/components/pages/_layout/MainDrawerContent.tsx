import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { constants } from 'shared/styles/contants'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Div from 'shared/components/ui/Div';
import { GradientText } from 'shared/components/ui';

export default function MainDrawerContent() {
  const insets = useSafeAreaInsets();
  return (
    <Div flex={1} backgroundColor={constants.colors.primary} paddingTop={insets.top}>
      <Div padding={20}>
        <TouchableOpacity 
          onPress={() => router.push('/')}
          style={{ paddingVertical: 15 }}
        >
          <GradientText>Home</GradientText>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={{ paddingVertical: 15 }}
        >
          <GradientText>About</GradientText>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={{ paddingVertical: 15 }}
        >
          <GradientText >Settings</GradientText>
        </TouchableOpacity>
      </Div>
    </Div>
  )
}