// react
import React from "react";
import { useTranslation } from "react-i18next";

// elements
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

// styles
import { formStyles } from "../../styles";

export default function RegisterForm() {
  
  const [t, i18n] = useTranslation(["login", "global"]);

  return (
    <View>
      <TextInput label={t("login:email")} style={formStyles.input} />
      <TextInput label={t("login:name")} style={formStyles.input} />
      <TextInput label={t("login:password")} style={formStyles.input} />
    </View>
  );
}
