import { StyleSheet } from "react-native";
import colors from "./colors";

const formStyles = StyleSheet.create({
  input: {
    marginBottom: 15,
    backgroundColor: colors.secondary,
  },
  btnSuccess: {
    backgroundColor: colors.dark,
    padding: 5,
    width: "45%",
  },
  btnCancel: {
    backgroundColor: colors.light,
    padding: 5,
    width: "45%",
  },
  btnLogin: {
    backgroundColor: colors.primary,
    padding: 5,
    marginTop: 10,
    width: "100%",
  },
  btnSuccessText: {
    //marginTop: 10,
    color: colors.primary,
  },
  btnBlackText: {
    //marginTop: 10,
    color: colors.dark,
  },
  btnTextLabel: {
    color: colors.dark,
  },
});
export default formStyles;
