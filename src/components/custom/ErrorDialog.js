// react
import React from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, Text } from "react-native";
import { Button, Dialog, Portal, Paragraph } from "react-native-paper";

// styles
import { formStyles } from "../../styles";

export default function ErrorDialog(props) {
  const { text, display, setDisplay } = props;

  const [t] = useTranslation(["login", "global", "errors"]);

  // handles
  const handleHideDialog = () => {
    setDisplay(false);
  };

  return (
    <View>
      <Portal>
        <Dialog
          visible={display}
          onDismiss={handleHideDialog}
          style={styles.dialog}
        >
          <Dialog.Title>{t("errors:errorTitle")}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{text}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions style={styles.dialogActions}>
            <Button
              mode="contained"
              style={formStyles.btnSuccess}
              labelStyle={formStyles.btnSuccessLabel}
              onPress={handleHideDialog}
            >
              {t("global:ok")}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

// custom styles
const styles = StyleSheet.create({
  dialog: {
    padding: 5,
  },
  dialogActions: {
    marginRight: "5%",
  },
});
