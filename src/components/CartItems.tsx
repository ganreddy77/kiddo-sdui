import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";

import {
  useCampaignStore,
} from "../store/useCampaignStore";

function CartItems() {
  const cart =
    useCampaignStore(
      (state) => state.cart
    );

  const addItem =
    useCampaignStore(
      (state) => state.addItem
    );

  const removeItem =
    useCampaignStore(
      (state) => state.removeItem
    );

  const total = cart.reduce(
    (sum, item) =>
      sum +
      (item.price || 0) *
        (item.quantity || 1),
    0
  );

  if (cart.length === 0) {
    return (
      <Text style={styles.empty}>
        Cart is empty
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Cart Items
      </Text>

      {cart.map((item) => (
        <View
          key={item.id}
          style={styles.row}
        >
          <View>
            <Text style={styles.item}>
              {item.name}
            </Text>

            <Text
              style={styles.price}
            >
              ₹{item.price || 0}
              {" × "}
              {item.quantity}
              {" = ₹"}
              {(item.price || 0) *
                (item.quantity || 1)}
            </Text>
          </View>

          <View
            style={styles.controls}
          >
            <Button
              title="-"
              onPress={() =>
                removeItem(
                  item.id
                )
              }
            />

            <Text
              style={
                styles.quantity
              }
            >
              {item.quantity}
            </Text>

            <Button
              title="+"
              onPress={() =>
                addItem(item)
              }
            />
          </View>
        </View>
      ))}

      <View style={styles.totalBox}>
        <Text
          style={styles.total}
        >
          Total: ₹{total}
        </Text>
      </View>
    </View>
  );
}

export default React.memo(
  CartItems
);

const styles =
  StyleSheet.create({
    container: {
      padding: 10,
      margin: 10,
      backgroundColor:
        "#F5F5F5",
      borderRadius: 10,
    },

    heading: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 15,
    },

    row: {
      flexDirection: "row",
      justifyContent:
        "space-between",
      alignItems: "center",
      marginBottom: 15,
    },

    controls: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },

    quantity: {
      fontSize: 18,
      fontWeight: "bold",
      minWidth: 20,
      textAlign: "center",
    },

    item: {
      fontSize: 18,
      fontWeight: "500",
    },

    price: {
      marginTop: 4,
      color: "#666",
    },

    totalBox: {
      marginTop: 20,
      paddingTop: 15,
      borderTopWidth: 1,
      borderColor: "#ccc",
    },

    total: {
      fontSize: 22,
      fontWeight: "bold",
    },

    empty: {
      padding: 10,
      margin: 10,
      color: "#666",
    },
  });