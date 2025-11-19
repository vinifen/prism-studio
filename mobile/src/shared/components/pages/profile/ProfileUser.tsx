import { ScrollView } from "react-native";
import React, { useState } from "react";
import { Div, H1 } from "shared/components/ui";
import { constants } from "shared/styles/contants";
import _ProfileUserForm from "./_ProfileUserForm";
import _DeleteAccountModal from "./_DeleteAccountModal";
import { useAuthStore } from "shared/stores/authStore";
import { useRouter } from "expo-router";

export default function ProfileUser() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const user = useAuthStore((state) => state.user);
  const router = useRouter();

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: constants.colors.primary }}
      contentContainerStyle={{
        paddingHorizontal: "10%",
        paddingVertical: 20,
      }}
      keyboardShouldPersistTaps="handled"
    >
      <Div justifyContent="center" alignItems="center" marginVertical={30}>
        <H1>My Profile</H1>
      </Div>

      <_ProfileUserForm user={user} onDeletePress={() => setShowDeleteModal(true)} />

      <_DeleteAccountModal
        visible={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
      />
    </ScrollView>
  );
}

