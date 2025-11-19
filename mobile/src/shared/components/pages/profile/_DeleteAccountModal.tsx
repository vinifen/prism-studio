import { useState } from "react";
import { Modal, Text, StyleSheet, Alert } from "react-native";
import { Div, FormInput, PrimaryButton, SecondaryButton } from "shared/components/ui";
import { constants } from "shared/styles/contants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getDeleteUserSchema } from "shared/schemas/userSchemas";
import { z } from "zod";
import api from "api/index";
import { handleApiError } from "shared/utils/errorHandler";
import { useAuthStore } from "shared/stores/authStore";
import { useRouter } from "expo-router";
import { GradientText } from "shared/components/ui";

type DeleteUserType = z.infer<ReturnType<typeof getDeleteUserSchema>>;

type DeleteAccountModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function _DeleteAccountModal({ visible, onClose }: DeleteAccountModalProps) {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const deleteUser = useAuthStore((state) => state.deleteUser);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<DeleteUserType>({
    resolver: zodResolver(getDeleteUserSchema()),
    mode: "onChange",
  });

  const handleDelete = async (data: DeleteUserType) => {
    if (!user) return;

    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              setLoading(true);
              setError('');

              await api.delete(`/api/users/${user.id}`, {
                data: { password: data.password },
              });

              deleteUser();
              reset();
              onClose();
              router.replace('/');
            } catch (error: any) {
              setError(handleApiError(error));
            } finally {
              setLoading(false);
            }
          },
        },
      ]
    );
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Div
        style={styles.overlay}
        justifyContent="center"
        alignItems="center"
      >
        <Div
          backgroundColor={constants.colors.secondary}
          borderRadius={constants.borderRadius.lg}
          padding={20}
          width="85%"
          gap={15}
        >
          <GradientText fontSize={constants.fontSize.xl} fontWeight="bold">
            Delete Account
          </GradientText>

          <Text style={styles.warningText}>
            This action cannot be undone. Please enter your password to confirm.
          </Text>

          <FormInput
            control={control}
            inputName="password"
            errors={errors}
            placeholder="Enter your password"
            secureTextEntry={true}
          />

          {error && (
            <Text style={styles.errorText}>
              {error}
            </Text>
          )}

          <Div flexDirection="row" gap={10}>
            <SecondaryButton
              title="Cancel"
              onPress={() => {
                reset();
                setError('');
                onClose();
              }}
              width="48%"
            />
            <PrimaryButton
              title="Delete"
              onPress={handleSubmit(handleDelete)}
              isDisabled={!isValid || loading}
              width="48%"
            />
          </Div>
        </Div>
      </Div>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  warningText: {
    color: constants.colors.white,
    fontSize: constants.fontSize.sm,
    textAlign: 'center',
    marginBottom: 10,
  },
  errorText: {
    color: constants.validation.errorPrimary,
    fontSize: constants.fontSize.sm,
    textAlign: 'center',
  },
});

