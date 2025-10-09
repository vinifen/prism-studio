import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer'
import LogoImage from 'shared/components/ui/LogoImage'
import { H1 } from 'shared/components/ui/Titles'
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Div } from 'shared/components/ui'
import { colors } from 'shared/styles/colors'

export default function CustomDrawer() {
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
          backgroundColor: colors.primary,
          height: 60 + insets.top
        },

        drawerInactiveTintColor: colors.white,
        drawerActiveTintColor: colors.white,
        headerTitle: () => (
          <TouchableOpacity
            onPress={() => router.push('/')}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <LogoImage width={50}/>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <DrawerToggleButton tintColor="white" />
        ),
      }}
      drawerContent={() => (
        <View style={{ flex: 1, backgroundColor: colors.primary, paddingTop: insets.top }}>
          <View style={{ padding: 20 }}>
            <TouchableOpacity 
              onPress={() => router.push('/')}
              style={{ paddingVertical: 15 }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Home</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={{ paddingVertical: 15 }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 16 }}>About</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={{ paddingVertical: 15 }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
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