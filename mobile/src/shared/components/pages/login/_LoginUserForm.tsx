import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StyleProp, ViewStyle, TouchableOpacity, Text } from "react-native";
import { getLoginSchema } from "shared/schemas/userSchemas";
import { LoginType } from "shared/types/UserTypes";
import { GradientText } from "shared/components/ui";
import { Div, FormInput, PrimaryButton } from "shared/components/ui";
import { constants } from "shared/styles/contants";
import api from "api/index";
import { handleApiError } from "shared/utils/errorHandler";
import { useAuthStore } from "shared/stores/authStore";

export default function _LoginUserForm({ style }: { style?: StyleProp<ViewStyle> }) {

  const router = useRouter();
  const login = useAuthStore((state) => state.login);
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
      
      const response = await api.post('/api/login', {
        email: data.email,
        password: data.password
      });

      const { user, token } = response.data.data;
      
      login(user, token);
      
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
