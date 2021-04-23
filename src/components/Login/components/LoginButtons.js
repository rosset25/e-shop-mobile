// react
import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

// styles
import { formStyles, layoutStyle } from "../../../styles";

export default function LoginButtons(props) {
  const { formik, loading, containedText, outlinedText, changeForm } = props;

  // handles
  const handleChangeForm = () => {
    // changeForm
  };

  return (
    <View>
      <View style={layoutStyle.containerButtonsLogin}>
        <Button
          mode="contained"
          style={formStyles.btnSuccess}
          labelStyle={formStyles.btnSuccessLabel}
          onPress={formik.handleSubmit}
          loading={loading}
        >
          {containedText}
        </Button>
        <Button
          mode="outlined"
          style={formStyles.btnOutlined}
          labelStyle={formStyles.btnOutlinedLabel}
          onPress={changeForm}
        >
          {outlinedText}
        </Button>
      </View>
    </View>
  );
}
