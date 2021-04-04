// react
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {} from "react-native-paper";

// styles
import { layoutStyle } from "../styles";

// components
import logo from "../../assets/images/logo-title-black.png";
import RegisterForm from "../components/Login/RegisterForm";

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);

  // handles
  const handleChangeForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <View style={layoutStyle.mainContainer}>
      <Image style={styles.logo} source={logo} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} // FIXME: not working for now in Android
      >
        {showLogin ? (
          <Text>Form login</Text>
        ) : (
          <RegisterForm changeForm={handleChangeForm} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 85,
    resizeMode: "contain",
    marginBottom: 10,
  },
});
