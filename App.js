import React, { useState } from "react";
import { Text } from "react-native";
import { I18nextProvider } from "react-i18next";
import { Provider as PaperProvider } from "react-native-paper";

import i18next from "./assets/i18n/index";

import LoginView from "./src/views/Login";

export default function App() {
  const [auth, setAuth] = useState();

  return (
    <PaperProvider>
      <I18nextProvider i18n={i18next}>
        {auth ? <Text>zona usuario</Text> : <LoginView />}
      </I18nextProvider>
    </PaperProvider>
  );
}
