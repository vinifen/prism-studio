import React from 'react'
import SecondaryButton from 'shared/components/ui/bottons/SecondaryButton'
import { router } from 'expo-router'
import { Div, GradientText } from 'shared/components/ui'
import { constants } from 'shared/styles/contants'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAuthStore, useIsAuthenticated } from 'shared/stores/authStore'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

export default function _MainDrawerUserButtons() {
  const insets = useSafeAreaInsets();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const isAuthenticated = useIsAuthenticated();

  const handleLogout = async () => {
    try {
      logout();
      router.push('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Div flex={1} backgroundColor={constants.colors.primary} paddingTop={insets.top}>
      <Div paddingHorizontal={15} gap={12}>
        {isAuthenticated && user ? (
          <>
            <Div alignItems="center" gap={12} marginBottom={20}>
              <LinearGradient
                colors={['#FFD700', '#A5BF53', '#A91919']}
                locations={[0, 0.5, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons name="person" size={32} color="#FFFFFF" />
              </LinearGradient>
              
              <GradientText 
                fontSize={constants.fontSize.lg}
                gradientColors={['#FF8C00', '#A91919']}
                gradientLocations={[0, 1]}
                gradientStart={{ x: 0, y: 0 }}
                gradientEnd={{ x: 1, y: 0 }}
              >
                Hello {user.name}
              </GradientText>
            </Div>

            <SecondaryButton 
              title="Home"
              onPress={() => router.push('/')}
            />
            
            <SecondaryButton 
              title="My Profile"
              onPress={() => router.push(`/user/${user.id}/profile`)}
            />
            
            <SecondaryButton 
              title="Logout"
              onPress={handleLogout}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </Div>
    </Div>
  )
}