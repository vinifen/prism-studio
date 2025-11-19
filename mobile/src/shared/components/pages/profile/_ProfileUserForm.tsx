import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StyleProp, ViewStyle, Text, TouchableOpacity } from "react-native";
import { getUpdateUserSchema } from "shared/schemas/userSchemas";
import { GradientText } from "shared/components/ui";
import { Div, FormInput, PrimaryButton, SecondaryButton } from "shared/components/ui";
import { constants } from "shared/styles/contants";
import api from "api/index";
import { handleApiError } from "shared/utils/errorHandler";
import { useAuthStore } from "shared/stores/authStore";
import { z } from "zod";

type UpdateUserType = z.infer<ReturnType<typeof getUpdateUserSchema>>;

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  cart_id?: number;
  addresses_ids?: number[];
};

type ProfileUserFormProps = {
  user: User;
  onDeletePress: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function _ProfileUserForm({ user, onDeletePress, style }: ProfileUserFormProps) {
  const router = useRouter();
  const updateUser = useAuthStore((state) => state.updateUser);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const { 
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<UpdateUserType>({
    resolver: zodResolver(getUpdateUserSchema()),
    mode: "onChange",
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const watchedEmail = watch('email');
  const watchedNewPassword = watch('new_password');
  const watchedName = watch('name');
  
  // Só precisa de senha atual se mudar email ou senha (não apenas nome)
  const isChangingEmail = watchedEmail !== undefined && watchedEmail !== '' && watchedEmail !== user.email;
  const isChangingPassword = watchedNewPassword !== undefined && watchedNewPassword !== '';
  const needsCurrentPassword = isChangingEmail || isChangingPassword;
  
  // Verifica se há mudanças para habilitar o botão
  const hasChanges = 
    (watchedName !== undefined && watchedName !== user.name) ||
    isChangingEmail ||
    isChangingPassword;
  
  async function handleUpdate(data: UpdateUserType) {
    try {
      setLoading(true);
      setError('');
      setSuccess(false);
      
      const payload: any = {};
      if (data.name && data.name !== user.name) {
        payload.name = data.name;
      }
      if (data.email && data.email !== user.email) {
        payload.email = data.email;
        if (!data.current_password) {
          setError('Current password is required when changing email');
          setLoading(false);
          return;
        }
        payload.current_password = data.current_password;
      }
      if (data.new_password) {
        payload.new_password = data.new_password;
        payload.new_password_confirmation = data.new_password_confirmation;
        if (!data.current_password) {
          setError('Current password is required when changing password');
          setLoading(false);
          return;
        }
        payload.current_password = data.current_password;
      }

      if (Object.keys(payload).length === 0) {
        setError('No changes to update');
        setLoading(false);
        return;
      }

      const response = await api.put(`/api/users/${user.id}`, payload);

      const updatedUser = response.data.data;
      updateUser(updatedUser);
      
      setSuccess(true);
      reset({
        name: updatedUser.name,
        email: updatedUser.email,
        new_password: undefined,
        new_password_confirmation: undefined,
        current_password: undefined,
      });
      
      setTimeout(() => setSuccess(false), 3000);
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

      <Div gap={10}>
        <GradientText fontSize={constants.fontSize.sm}>
          Change Password (optional)
        </GradientText>
        
        <FormInput
          control={control}
          inputName="new_password"
          errors={errors}
          placeholder="New Password"
          secureTextEntry={true}
        />

        <FormInput
          control={control}
          inputName="new_password_confirmation"
          errors={errors}
          placeholder="Confirm New Password"
          secureTextEntry={true}
        />
      </Div>

      {needsCurrentPassword && (
        <FormInput
          control={control}
          inputName="current_password"
          errors={errors}
          placeholder="Current Password (required)"
          secureTextEntry={true}
        />
      )}

      <PrimaryButton
        title="Update Profile"
        onPress={handleSubmit(handleUpdate)}
        isDisabled={
          !hasChanges || 
          loading || 
          (needsCurrentPassword && (!watch('current_password') || watch('current_password') === ''))
        }
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

      {success && (
        <Div justifyContent="center" alignItems="center">
          <Text style={{
            color: constants.validation.confirmPrimary,
            textAlign: "center",
            fontSize: constants.fontSize.sm
          }}>
            Profile updated successfully!
          </Text>
        </Div>
      )}

      <Div marginTop={20} gap={10}>
        <Div 
          style={{
            height: 1,
            backgroundColor: constants.colors.secondary,
            marginVertical: 10,
          }}
        />
        
        <SecondaryButton
          title="Delete Account"
          onPress={onDeletePress}
          backgroundColor={constants.colors.secondary}
        />
      </Div>
    </Div>
  );
}

