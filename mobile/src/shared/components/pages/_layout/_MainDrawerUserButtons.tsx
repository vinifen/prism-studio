import React from 'react'
import SecondaryButton from 'shared/components/ui/bottons/SecondaryButton'
import { router } from 'expo-router'
import { Div } from 'shared/components/ui'
import { constants } from 'shared/styles/contants'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function _MainDrawerUserButtons() {
  const insets = useSafeAreaInsets();
  return (
    <Div flex={1} backgroundColor={constants.colors.primary} paddingTop={insets.top}>
      <Div paddingHorizontal={15} gap={12}>
        <SecondaryButton 
          title="Home"
          onPress={() => router.push('/')}
        />
        
        <SecondaryButton 
          title="Register"
          onPress={() => router.push('/register')}
        />
        
        <SecondaryButton 
          title="Login"
          onPress={() => router.push('/login')}
        />
      </Div>
    </Div>
  )
}