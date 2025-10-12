import { View, Text, Image } from 'react-native'
import React from 'react'
import { ProductType } from 'shared/types/ProductTypes'
import GradientBorderBox from './gradient/GradientBorderBox'
import { constants } from 'shared/styles/contants'
import { GradientText } from '.'
import Div from './Div'

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
        {product.image_url && (
          <Image 
            source={{ uri: product.image_url }} 
            style={{ 
              width: '100%', 
              height: 150, 
              borderRadius: constants.borderRadius.sm,
              marginBottom: constants.spacing.sm
            }}
            resizeMode="cover"
          />
        )}
        
        <GradientText fontSize={constants.fontSize.lg} fontWeight="bold">
          {product.name}
        </GradientText>
        
        <Div marginTop={constants.spacing.xs}>
          <Text style={{ 
            color: constants.colors.white, 
            fontSize: constants.fontSize.sm 
          }}>
            Categoria: {product.category || 'Sem categoria'}
          </Text>
        </Div>
        
        <Div marginTop={constants.spacing.xs}>
          <Text style={{ 
            color: constants.colors.white, 
            fontSize: constants.fontSize.sm 
          }}>
            Estoque: {product.stock}
          </Text>
        </Div>
        
        <Div marginTop={constants.spacing.sm}>
          <GradientText fontSize={constants.fontSize.xl} fontWeight="600">
            R$ {product.price.toFixed(2)}
          </GradientText>
        </Div>
      </Div>
    </GradientBorderBox>
  )
}