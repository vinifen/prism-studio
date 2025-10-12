import { Text } from 'react-native'
import React from 'react'
import { Div } from 'shared/components/ui'
import { constants } from 'shared/styles/contants'

export default function RegisterUser() {
  return (
    <Div flex={1} backgroundColor={constants.colors.primary}>
      <Text>RegisterUser</Text>
    </Div>
  )
}