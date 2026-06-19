import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

interface Item {
  id: string;
  name: string;
}

interface Props {
  title: string;
  items: Item[];
}

function DynamicCollection({
  title,
  items,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      <FlatList
        horizontal
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default React.memo(DynamicCollection);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },

  card: {
    width: 120,
    height: 120,
    backgroundColor: "#DDEEFF",
    borderRadius: 12,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});