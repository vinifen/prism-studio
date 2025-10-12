import { Text } from 'react-native'
import React from 'react'
import { constants } from 'shared/styles/contants'
import Div from 'shared/components/ui/Div'

export default function LoginUser() {
  return (
    <Div flex={1} backgroundColor={constants.colors.primary}>
      <Text>LoginUser</Text>
    </Div>
  )
}