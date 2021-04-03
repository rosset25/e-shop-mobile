// react
import React from "react";
import { useTranslation } from "react-i18next";

// elements
import { FlatList, View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

// styles
import { formStyles, layoutStyle, themes } from "../../styles";

export default function RegisterForm() {
  const [t, i18n] = useTranslation(["login", "global"]);
  const registerInputs = [
    { key: "email", value: "login:email" },
    { key: "name", value: "login:name" },
    { key: "surname", value: "login:surname" },
    { key: "password", value: "login:password" },
    { key: "confpassword", value: "login:confirmPassword" },
  ];

  return (
    <View>
      {/** render input fields */}
      <FlatList
        data={registerInputs}
        renderItem={({ item }) => (
          <TextInput
            label={t(item.value)}
            style={formStyles.input}
            theme={themes.inputTheme}
            secureTextEntry={item.key.includes("password")}
          />
        )}
      />

      <View style={layoutStyle.containerRow}>
        <Button mode="contained" style={formStyles.btnSuccess}>
          <Text style={formStyles.btnSuccessText}>{t("login:register")}</Text>
        </Button>
        <Button mode="outlined" style={formStyles.btnCancel}>
          <Text style={formStyles.btnBlackText}>{t("global:cancel")}</Text>
        </Button>
      </View>
      {/*<Button mode="contained" style={formStyles.btnLogin}>
        <Text style={formStyles.btnBlackText}>{t("login:initSession")}</Text>
        </Button>*/}
    </View>
  );
}
