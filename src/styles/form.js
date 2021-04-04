import { StyleSheet } from "react-native";
import colors from "./colors";

const formStyles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: colors.secondary,
  },
  btnSuccess: {
    backgroundColor: colors.dark,
    padding: 5,
  },
  btnSuccessLabel: {
    color: colors.primary,
  },
  btnOutlined: {
    marginTop: 10,
    padding: 5,
    color: colors.dark,
  },
  btnOutlinedLabel: {
    color: colors.dark,
  },
  btnCancel: {
    backgroundColor: colors.light,
    padding: 5,
    //width: "45%",
  },
  btnLogin: {
    backgroundColor: colors.primary,
    padding: 5,
    marginTop: 10,
    width: "100%",
  },
});
export default formStyles;
