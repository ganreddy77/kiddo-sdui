import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

type Props = {
  text: string;
};

function Footer({
  text,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
}

export default React.memo(Footer);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },

  text: {
    fontSize: 14,
    color: "#666",
  },
});