// react
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";

// styles
import { formStyles, themes } from "../../styles";

// other imports
import { UserService } from "../../services";

export default function RegisterForm(props) {
  const { changeForm } = props;

  const [t] = useTranslation(["login", "global", "errors"]);
  const [loading, setLoading] = useState(false);

  const registerInputs = getRegisterInputs();
  const formik = useFormik({
    // use same keys of registerInputs
    initialValues: registerInputs.reduce(
      (obj, elem) => ({ ...obj, [elem.key]: "" }),
      {}
    ),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      try {
        setLoading(true);
        const response = await UserService.registerUser(formData);
        if (response.status === 200) {
          changeForm();
        } else {
          console.log(response.error);
        }
      } catch (error) {
        let logError = t("errors:errorDefault");
        console.log(logError);
      }
      setLoading(false);
    },
  });

  return (
    <View>
      {registerInputs.map((item) => {
        return (
          <View key={"V" + item.key}>
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
              secureTextEntry={item.key.toLowerCase().includes("password")}
              errorText={formik.errors[item.key]}
            ></TextInput>
            {formik.errors[item.key] &&
              (item.key.toLowerCase().includes("password") ||
                item.key === "email") && (
                <Text style={{ fontSize: 10, color: "red", marginBottom: -12 }}>
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
          loading={loading} // TODO: display a spinner in all view
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

// custom styles
const styles = StyleSheet.create({
  containerButtons: {
    flexDirection: "column",
    width: "100%",
    marginTop: 25,
  },
});

// functions
function getRegisterInputs() {
  return [
    { key: "email", value: "login:email" },
    { key: "name", value: "login:name" },
    //{ key: "surname", value: "login:surname" },
    { key: "password", value: "login:password" },
    { key: "confirmPassword", value: "login:confirmPassword" },
  ];
}

// keys must be the same as above
function validationSchema() {
  const [t] = useTranslation(["login"]);
  let min = 2;
  return {
    email: Yup.string().email(t("incorrectEmail")).required(true),
    name: Yup.string().required(true),
    password: Yup.string()
      .required(true)
      .min(min, t("minCharacters", { count: min })),
    confirmPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password")], t("equalPassword")),
  };
}
