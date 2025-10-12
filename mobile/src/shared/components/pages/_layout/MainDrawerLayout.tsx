import { TouchableOpacity } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer'
import LogoImage from 'shared/components/ui/LogoImage'
import { useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DrawerToggleButton } from '@react-navigation/drawer'
import { constants } from 'shared/styles/contants'
import _MainDrawerContent from './_MainDrawerContent'

export default function MainDrawerLayout() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  
  return (
    <Drawer
      screenOptions={{
        drawerPosition: 'right',
        drawerStyle: {
          width: 240
        },
        headerStyle: {
          backgroundColor: constants.colors.primary,
          height: 60 + insets.top
        },

        drawerInactiveTintColor: constants.colors.white,
        drawerActiveTintColor: constants.colors.white,
        headerTitle: () => (
          <TouchableOpacity
            onPress={() => router.push('/')}
          >
            <LogoImage width={60}/>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <DrawerToggleButton tintColor="white" />
        ),
      }}
      drawerContent={() => (
        <_MainDrawerContent/>
      )}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: 'Home',
          drawerLabel: 'Home',
        }}
      />
    </Drawer>
  )
}