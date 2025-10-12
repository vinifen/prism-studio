import { Text } from 'react-native'
import React from 'react'
import { ProductType } from 'shared/types/ProductTypes'
import GradientBorderBox from './gradient/GradientBorderBox'
import { constants } from 'shared/styles/contants'
import { GradientText } from '.'
import Div from './Div'
import { baseURL } from 'api/index'
import ImageLayout from './ImageLayout'

type ProductCardProps = {
  product: ProductType
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <GradientBorderBox
      borderWidth={2}
      borderRadius={constants.borderRadius.md}
      backgroundColor={constants.colors.primary}
      width={'100%'}
      padding={constants.spacing.md}
    >
      <Div>
        <ImageLayout 
          imageSource={product.image_url ? { uri: `${baseURL}${product.image_url}` } : null} 
        />
        <GradientText fontSize={constants.fontSize.lg} fontWeight="bold">
          {product.name}
        </GradientText>
        
        <Div marginTop={constants.spacing.xs}>
          <Text style={{ 
            color: constants.colors.white, 
            fontSize: constants.fontSize.sm 
          }}>
            Category: {product.category || 'No category'}
          </Text>
        </Div>
        
        <Div marginTop={constants.spacing.xs}>
          <Text style={{ 
            color: constants.colors.white, 
            fontSize: constants.fontSize.sm 
          }}>
            Stock: {product.stock}
          </Text>
        </Div>
        
        <Div marginTop={constants.spacing.sm}>
          <GradientText fontSize={constants.fontSize.xl} fontWeight="600">
            $ {product.price.toFixed(2)}
          </GradientText>
        </Div>
      </Div>
    </GradientBorderBox>
  )
}