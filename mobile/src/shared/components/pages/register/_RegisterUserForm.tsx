import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StyleProp, ViewStyle, TouchableOpacity, Text } from "react-native";
import { getRegisterUserSchema } from "shared/schemas/userSchemas";
import { RegisterUserType } from "shared/types/UserTypes";
import { GradientText } from "shared/components/ui";
import { Div, FormInput, PrimaryButton } from "shared/components/ui";
import { constants } from "shared/styles/contants";
import api from "api/index";
import { handleApiError } from "shared/utils/errorHandler";

export default function _RegisterUserForm({ style }: {style?: StyleProp<ViewStyle>}) {
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();
  
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterUserType>({
      resolver: zodResolver(getRegisterUserSchema()),
      mode: "onChange"
    });
  
  async function handleCreateUser(data: RegisterUserType) {
    try {
      setLoading(true);
      setError('');
      
      const response = await api.post('/api/register', {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.passwordConfirm
      });
      
      console.log('Registration successful:', response.data);
      router.push('/');
    } catch (error: any) {
      setError(handleApiError(error));
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <Div gap={25} style={style}> 
      <FormInput
        control={control}
        inputName="name"
        errors={errors}
        placeholder="Name"
      />
      
      <FormInput
        control={control}
        inputName="email"
        errors={errors}
        placeholder="Email"
      />
      
      <FormInput
        control={control}
        inputName="password"
        secureTextEntry={true}
        errors={errors}
        placeholder="Password"
      />
      
      <FormInput
        control={control}
        inputName="passwordConfirm"
        secureTextEntry={true}
        errors={errors}
        placeholder="Confirm Password"
      />
      
      <PrimaryButton
        title="Register"
        isDisabled={!isValid || loading}
        onPress={handleSubmit(handleCreateUser)}
      />

      {error && (
        <Div justifyContent="center" alignItems="center">
          <Text style={{
            color: constants.validation.errorPrimary,
            textAlign: "center",
            fontSize: constants.fontSize.sm
          }}>
            {error}
          </Text>
        </Div>
      )}
      
      <TouchableOpacity
        onPress={() => router.push('/login')}
        style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}
      >
        <GradientText 
          fontSize={constants.fontSize.sm}
        >
          {"or "}
        </GradientText>
        <GradientText 
          textDecorationLine='underline'
          fontSize={constants.fontSize.md}
        >
          {"login"}
        </GradientText>
      </TouchableOpacity>
    </Div>
  );
}