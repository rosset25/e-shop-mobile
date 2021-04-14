// react
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

// styles
import { layoutStyle } from "../styles";

// other imports
import logo from "../../assets/images/logo-title-black.png";
import RegisterForm from "../components/Login/RegisterForm";
import LoginForm from "../components/Login/LoginForm";

export default function Login() {
  const [showLogin, setShowLogin] = useState(true);

  // handles
  const handleChangeForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <View style={layoutStyle.mainContainer}>
      <Image style={styles.logo} source={logo} />
      {/* // FIXME: not working properly in Android (React Native open bug)
      
      // This should be resize the forms to show the fields
      // when the keyboard is displayed.

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        enabled={Platform.OS === "ios" ? true : false}
      >*/}
      {showLogin ? (
        <LoginForm changeForm={handleChangeForm}></LoginForm>
      ) : (
        <RegisterForm changeForm={handleChangeForm} />
      )}
      {/*</KeyboardAvoidingView>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 85,
    resizeMode: "contain",
    //marginTop: 25,
    marginBottom: 10,
  },
});
