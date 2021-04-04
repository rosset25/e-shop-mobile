// react
import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";

// styles
import { formStyles, themes } from "../../styles";

export default function RegisterForm(props) {
  const { changeForm } = props;
  const [t, i18n] = useTranslation(["login", "global"]);
  const registerInputs = getRegisterInputs();
  const formik = useFormik({
    // use same keys of registerInputs
    initialValues: registerInputs.reduce(
      (obj, elem) => ({ ...obj, [elem.key]: "" }),
      {}
    ),
  });

  const example = registerInputs.reduce(
    (obj, elem) => ({ ...obj, [elem.key]: "" }),
    {}
  );

  return (
    <View>
      {/** render input fields */}
      <FlatList
        data={registerInputs}
        renderItem={({ item }) => (
          <TextInput
            key={item.key}
            label={t(item.value)}
            style={formStyles.input}
            theme={themes.inputTheme}
            required
            secureTextEntry={item.key.includes("password")}
          />
        )}
      />

      <View style={styles.containerButtons}>
        <Button
          mode="contained"
          style={formStyles.btnSuccess}
          labelStyle={formStyles.btnSuccessLabel}
        >
          {t("login:register")}
        </Button>
        <Button
          mode="outlined"
          style={formStyles.btnOutlined}
          labelStyle={formStyles.btnOutlinedLabel}
          onPress={changeForm}
        >
          {t("login:initSession")}
        </Button>
      </View>
      {/*<Button mode="contained" style={formStyles.btnLogin}>
        <Text style={formStyles.btnBlackText}>{t("login:initSession")}</Text>
        </Button>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  containerButtons: {
    flexDirection: "column",
    //justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
});

function getRegisterInputs() {
  return [
    { key: "email", value: "login:email" },
    { key: "name", value: "login:name" },
    //{ key: "surname", value: "login:surname" },
    { key: "password", value: "login:password" },
    { key: "confpassword", value: "login:confirmPassword" },
  ];
}
