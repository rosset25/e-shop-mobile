import React, { useState } from "react";
import { Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import LoginView from "./src/views/Login";

export default function App() {
  const [auth, setAuth] = useState();

  return (
    <PaperProvider>
      {auth ? <Text>zona usuario</Text> : <LoginView />}
    </PaperProvider>
  );
}

/*const styles = StyleSheet.create({
});*/
