import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { ComponentRegistry } from "./ComponentRegistry";

type Props = {
  node: any;
};

export default function Renderer({
  node,
}: Props) {
  console.log(
    "RENDERING:",
    node?.type
  );

  const Component =
    (ComponentRegistry as any)[
      node?.type
    ];

  if (!Component) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.text}>
          Unknown Component
        </Text>

        <Text style={styles.type}>
          {node?.type}
        </Text>
      </View>
    );
  }

  return (
    <Component {...node} />
  );
}

const styles =
  StyleSheet.create({
    fallback: {
      padding: 20,
      margin: 10,
      backgroundColor:
        "#ffd7d7",
      borderRadius: 10,
    },

    text: {
      fontWeight: "bold",
    },

    type: {
      color: "red",
      marginTop: 5,
    },
  });