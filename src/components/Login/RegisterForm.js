// react
import React from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, Text } from "react-native";
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
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      console.log("regitro completado");
      console.log(formData);
    },
  });

  return (
    <View>
      {registerInputs.map((item) => {
        return (
          <View>
            <TextInput
              key={item.key}
              label={t(item.value)}
              style={formStyles.input}
              theme={themes.inputTheme}
              onChangeText={(value) => {
                formik.setFieldValue(item.key, value);
              }}
              value={formik.values[item.key]}
              error={formik.errors[item.key]}
              secureTextEntry={item.key.includes("password")}
              errorText={formik.errors[item.key]}
            ></TextInput>
            {formik.errors[item.key] &&
              (item.key.includes("password") || item.key === "email") && (
                <Text style={{ fontSize: 10, color: "red", marginBottom: -10 }}>
                  {formik.errors[item.key]}
                </Text>
              )}
          </View>
        );
      })}

      <View style={styles.containerButtons}>
        <Button
          mode="contained"
          style={formStyles.btnSuccess}
          labelStyle={formStyles.btnSuccessLabel}
          onPress={formik.handleSubmit}
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
    </View>
  );
}

const styles = StyleSheet.create({
  containerButtons: {
    flexDirection: "column",
    width: "100%",
    marginTop: 25,
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

function validationSchema() {
  const [t] = useTranslation(["login"]);
  let min = 8;
  return {
    email: Yup.string().email(t("incorrectEmail")).required(true),
    name: Yup.string().required(true),
    password: Yup.string()
      .required(true)
      .min(min, t("minCharacters", { count: min })),
    confpassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password")], t("equalPassword")),
  };
}
