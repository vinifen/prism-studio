import React from 'react'
import { TextProps as RNTextProps } from 'react-native'
import GradientText from './gradient/GradientText'
import { constants } from 'shared/styles/contants'
import { GradientProps } from 'shared/types/styles/GradientTypes'
import { TextProps } from 'shared/types/styles/TextTypes'

type TitleProps = Omit<RNTextProps, keyof TextProps> & GradientProps;

export function H1(props: TitleProps) {
  return <GradientText {...props} fontSize={constants.fontSize.xl} fontWeight={'500'} />
}

export function H2(props: TitleProps) {
  return <GradientText {...props} fontSize={constants.fontSize.lg} fontWeight={'400'} />
}

export function H3(props: TitleProps) {
  return <GradientText {...props} fontSize={constants.fontSize.md} fontWeight={'400'} />
}

export function H4(props: TitleProps) {
  return <GradientText {...props} fontSize={constants.fontSize.sm} fontWeight={ '400'} />
}