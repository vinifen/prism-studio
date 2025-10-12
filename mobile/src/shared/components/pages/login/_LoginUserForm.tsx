import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StyleProp, ViewStyle, TouchableOpacity, Text } from "react-native";
import { getLoginSchema } from "shared/schemas/userSchemas";
import { LoginType } from "shared/types/UserTypes";
import { GradientText, RememberMe } from "shared/components/ui";
import { Div, FormInput, PrimaryButton } from "shared/components/ui";
import { constants } from "shared/styles/contants";
import api from "../../../../api";

export default function _LoginUserForm({ style }: { style?: StyleProp<ViewStyle> }) {

  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { 
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginType>({
    resolver: zodResolver(getLoginSchema()),
    mode: "onChange"
  });
  
  async function handleLogin(data: LoginType) {
    try {
      setLoading(true);
      setError('');
      
      const response = await api.post('api/login', {
        email: data.email,
        password: data.password
      });
      
      if (rememberMe && response.data.data.token) {
        console.log('Token:', response.data.data.token);
      }
      
      router.push('/');
    } catch (error: any) {
      console.error('Login error:', error);
      if (error.response?.data) {
        const errorData = error.response.data;
        
        if (errorData.errors?.message) {
          setError(errorData.errors.message);
        } else if (errorData.errors) {
          const errorFields = Object.keys(errorData.errors);
          if (errorFields.length > 0) {
            const firstField = errorFields.find(field => field !== 'message');
            if (firstField && Array.isArray(errorData.errors[firstField])) {
              setError(errorData.errors[firstField][0]);
            } else {
              setError('Validation error occurred');
            }
          } else {
            setError('Login failed');
          }
        } else {
          setError(errorData.message || 'Login failed');
        }
      } else {
        setError('Network error occurred');
      }
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <Div gap={25} style={style}>
      
      <FormInput
        control={control}
        inputName="email"
        errors={errors}
        placeholder="Email"
      /> 

      <FormInput
        control={control}
        inputName="password"
        errors={errors}
        placeholder="Password"
        secureTextEntry={true}
      />  

      <RememberMe
        style={{ justifyContent: 'center',}}
        value={rememberMe}
        onValueChange={setRememberMe}
      />

      <PrimaryButton
        title="Login"
        onPress={handleSubmit(handleLogin)}
        isDisabled={!isValid || loading}
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
        onPress={() => router.push('/register')}
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
          {"register"}
        </GradientText>
      </TouchableOpacity>
    </Div>
  );
}
