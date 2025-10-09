import React from 'react'
import { Text, TextProps } from 'react-native'
import GradientText from './gradient/GradientText'

export function H1(props: TextProps) {
  return <GradientText {...props} style={[{ fontSize: 18, fontWeight: '500' }, props.style]} />
}

export function H2(props: TextProps) {
  return <GradientText {...props} style={[{ fontSize: 22, fontWeight: '400' }, props.style]} />
}

export function H3(props: TextProps) {
  return <GradientText {...props} style={[{ fontSize: 20, fontWeight: '400' }, props.style]} />
}

export function H4(props: TextProps) {
  return <GradientText {...props} style={[{ fontSize: 16, fontWeight: '400' }, props.style]} />
}