import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  useCampaignStore,
} from "../store/useCampaignStore";

function CartCounter() {
  const count =
    useCampaignStore(
      (state) =>
        state.cart.reduce(
          (sum, item) =>
            sum +
            (item.quantity || 1),
          0
        )
    );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Cart: {count}
      </Text>
    </View>
  );
}

export default React.memo(
  CartCounter
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor:
      "#eeeeee",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});