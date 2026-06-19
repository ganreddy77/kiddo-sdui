import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";

import { useCampaignStore }
from "../store/useCampaignStore";

type Product = {
  id: string;
  name: string;
  price: number;
};

type Props = {
  products: Product[];
};

export default function ProductGrid({
  products = [],
}: Props) {
  const addItem =
    useCampaignStore(
      (state) => state.addItem
    );

  console.log(
    "PRODUCTS:",
    products
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Products
      </Text>

      <View style={styles.grid}>
        {products.map(
          (product) => (
            <View
              key={product.id}
              style={styles.card}
            >
              <Text
                style={styles.name}
              >
                {product.name}
              </Text>

              <Text
                style={styles.price}
              >
                ₹{product.price}
              </Text>

              <Button
                title="Add To Cart"
                onPress={() =>
                  addItem(product)
                }
              />
            </View>
          )
        )}
      </View>
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      marginTop: 20,
      paddingHorizontal: 10,
    },

    heading: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 15,
    },

    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent:
        "space-between",
    },

    card: {
      width: "48%",
      backgroundColor:
        "#f5f5f5",
      padding: 15,
      marginBottom: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#ddd",
    },

    name: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },

    price: {
      fontSize: 16,
      marginBottom: 10,
      color: "#555",
    },
  });