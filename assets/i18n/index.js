import { NativeModules, Platform } from "react-native";
import i18next from "i18next";

// Español
import global_es from "./es/global.json";
import login_es from "./es/login.json";
// English
import global_en from "./en/global.json";
import login_en from "./es/login.json";

const locale =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : Platform.OS === "android"
    ? NativeModules.I18nManager.localeIdentifier // Android
    : navigator.language || navigator.userLanguage; // Web

let language = locale ? locale.substring(0, 2) : "en";

// check locale translation, by default english
switch (language) {
  case "es":
  case "en":
    break;
  default:
    language = "en";
}

i18next.init({
  fallbackLng: language,
  resources: {
    es: {
      global: global_es,
      login: login_es,
    },
    en: {
      global: global_en,
      login: login_en,
    },
  },
});

export default i18next;
