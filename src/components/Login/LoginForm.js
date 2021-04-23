// react
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";

// styles
import { formStyles, themes } from "../../styles";

// other imports
import { UserService } from "../../services";
import ErrorDialog from "../custom/ErrorDialog";
import LoginButtons from "./components/LoginButtons";

export default function LoginForm(props) {
  const { changeForm } = props;

  const [t] = useTranslation(["login", "global", "errors"]);
  const [loading, setLoading] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const [errorDialogMessage, setErrorDialogMessage] = useState();

  const registerInputs = getRegisterInputs();
  const formik = useFormik({
    // use same keys of registerInputs
    initialValues: registerInputs.reduce(
      (obj, elem) => ({ ...obj, [elem.key]: "" }),
      {}
    ),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      let errorMessage = "";
      try {
        setLoading(true);
        const response = await UserService.loginUser(formData);
        if (response.status === 200) {
          // TODO: login to the app
        } else {
          console.log(response.error);
          errorMessage = response.error;
        }
      } catch (error) {
        errorMessage = t("errors:errorDefault");
        console.log(logError);
      }
      setErrorDialogMessage(errorMessage);
      setErrorDialog(true);
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
            {formik.errors[item.key] && item.key === "email" && (
              <Text style={{ fontSize: 10, color: "red", marginBottom: -12 }}>
                {formik.errors[item.key]}
              </Text>
            )}
          </View>
        );
      })}

      <ErrorDialog
        text={errorDialogMessage}
        display={errorDialog}
        setDisplay={setErrorDialog}
      ></ErrorDialog>

      {/*<View style={layoutStyle.containerButtonsLogin}>
        <Button
          mode="contained"
          style={formStyles.btnSuccess}
          labelStyle={formStyles.btnSuccessLabel}
          onPress={formik.handleSubmit}
          loading={loading}
        >
          {t("login:login")}
        </Button>
        <Button
          mode="outlined"
          style={formStyles.btnOutlined}
          labelStyle={formStyles.btnOutlinedLabel}
          onPress={changeForm}
        >
          {t("login:register")}
        </Button>
    </View>*/}
      <LoginButtons
        formik={formik}
        loading={loading}
        containedText={t("login:login")}
        outlinedText={t("login:register")}
        changeForm={changeForm}
      />
    </View>
  );
}

// custom styles
const styles = StyleSheet.create({});

// functions
function getRegisterInputs() {
  return [
    { key: "email", value: "login:email" },
    { key: "password", value: "login:password" },
  ];
}

// keys must be the same as above
function validationSchema() {
  const [t] = useTranslation(["login"]);
  return {
    email: Yup.string().email(t("incorrectEmail")).required(true),
    password: Yup.string().required(true),
  };
}
