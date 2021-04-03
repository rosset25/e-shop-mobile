// react
import React, { useState } from "react";

// elements
import { StyleSheet, View, Text, Image } from "react-native";
import {} from "react-native-paper";

// styles
import { layoutStyle } from "../styles";

// components
import logo from "../../assets/images/logo-title-black.png";
import RegisterForm from "../components/Login/RegisterForm";

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <View style={layoutStyle.mainContainer}>
      <Image style={styles.logo} source={logo} />
      {showLogin ? <Text>Form login</Text> : <RegisterForm />}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    //height: 80,
    resizeMode: "contain",
    marginBottom: 40,
  },
});
