import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const layoutStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    width: wp("100%"),
    height: hp("90%"),
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
    //justifyContent: "space-between",
  },
  containerButtonsLogin: {
    flexDirection: "column",
    width: "100%",
    marginTop: 25,
  },
});
export default layoutStyle;
