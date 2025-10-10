import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, TextInputProps, StyleSheet, Text, StyleProp, TextStyle, View } from 'react-native';
import { constants } from 'shared/styles/contants';
import GradientText from './gradient/GradientText';
import GradientBorderBox from './gradient/GradientBorderBox';

type DefaultInputType = TextInputProps & {
  control: any;
  placeholder?: string;
  secureTextEntry?: boolean;
  customStyle?: StyleProp<TextStyle>;
  errors: Record<string, any>;
  inputName: string;
  minHeight?: number;
  maxHeight?: number;
  textAlignVertical?: string;
  textAlign?: string;
  paddingLeft?: number;
  numberOfLines?: number;
  multiline?: boolean;
  backgroundColor?: string;
};


export default function FormInput({
  control,
  placeholder,
  secureTextEntry = false,
  customStyle,
  errors,
  inputName,
  minHeight = 40,
  maxHeight,
  textAlignVertical = "center",
  textAlign = "center",
  paddingLeft = 0,
  numberOfLines = 1,
  multiline = false,
  backgroundColor = constants.colors.primary,
  ...props
}: DefaultInputType) {

  return (
    <GradientBorderBox backgroundColor={backgroundColor}>
      <Controller
        key={`${inputName}`}
        control={control}
        name={inputName}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={{ justifyContent: 'center' }}>
            <View style={{ 
              position: 'relative',
              borderWidth: 1,
              borderColor: constants.colors.secundary,
              borderRadius: constants.borderRadius.md,
              backgroundColor: backgroundColor,
            }}>
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
                {...props}
                multiline={multiline}
                numberOfLines={numberOfLines}
                style={[
                  {
                    minHeight,
                    maxHeight,
                    textAlignVertical: textAlignVertical as any,
                    textAlign: textAlign as any,
                    paddingLeft,
                    paddingHorizontal: constants.spacing.md,
                    paddingVertical: constants.spacing.sm,
                    backgroundColor: 'transparent',
                    color: constants.colors.white,
                    fontSize: constants.fontSize.md,
                  },
                  customStyle,
                ]}
                placeholderTextColor="transparent"
              />
              {!value && placeholder && (
                <View
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    pointerEvents: 'none',
                  }}
                >
                  <GradientText
                    fontSize={constants.fontSize.md}
                    style={{ opacity: 0.5 }}
                  >
                    {placeholder}
                  </GradientText>
                </View>
              )}
            </View>
            {errors?.[inputName] && (
              <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: constants.spacing.xs }}>
                <Text style={{ 
                  color: constants.validation.errorPrimary, 
                  fontSize: constants.fontSize.xs,
                  textAlign: 'center',
                }}>
                  {errors[inputName].message || 'Campo inválido'}
                </Text>
              </View>
            )}
          </View>
        )}
      />
    </GradientBorderBox>
  );
}