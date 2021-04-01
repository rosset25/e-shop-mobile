// react
import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

// components
import logo from "../../assets/images/logo-title-black.png";
import RegisterForm from "../components/Login/RegisterForm";

// styles
import { layoutStyle } from "../styles";

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <View style={layoutStyle.container}>
      <Image style={styles.logo} source={logo} />
      {showLogin ? <Text>Form login</Text> : <RegisterForm />}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 80,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
