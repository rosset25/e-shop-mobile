import { StyleSheet } from "react-native";

const layoutStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  containerColumn: {
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
});
export default layoutStyle;
