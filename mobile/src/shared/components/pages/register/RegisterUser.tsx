import { ScrollView } from "react-native";
import React from "react";
import _RegisterUserForm from "./_RegisterUserForm";
import { H1 } from "shared/components/ui/Titles";
import { Div } from "shared/components/ui";
import { constants } from "shared/styles/contants";

export default function RegisterUser() {

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: constants.colors.primary }}
      contentContainerStyle={{
        paddingHorizontal: "10%",
      }}
      keyboardShouldPersistTaps="handled"
    >
      <Div justifyContent="center" alignItems="center" marginVertical={50}>
        <H1>Register Your Account</H1>
      </Div>

      <_RegisterUserForm />
    </ScrollView>
  );
}