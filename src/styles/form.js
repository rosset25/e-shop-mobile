import { StyleSheet } from "react-native";
import colors from "./colors";

const formStyles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
  btnSuccess: {
    backgroundColor: colors.primary,
    padding: 5,
  },
  btnSuccessText: {
    marginTop: 10,
    color: colors.primary,
  },
  btnTextLabel: {
    color: colors.dark,
  },
});
export default formStyles;
