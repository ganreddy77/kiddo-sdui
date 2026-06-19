import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

import { trackEvent } from "../utils/analytics";

type Props = {
  title: string;
  subtitle: string;
};

function BannerHeroV2({
  title,
  subtitle,
}: Props) {
  return (
    <Pressable
      onPress={() => {
        trackEvent(
          "banner_v2_click",
          { title }
        );
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>
    </Pressable>
  );
}

export default React.memo(
  BannerHeroV2
);

const styles = StyleSheet.create({
  container: {
    height: 250,
    margin: 10,
    borderRadius: 16,
    backgroundColor: "#5EC55E",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 18,
    color: "#FFFFFF",
    marginTop: 12,
  },
});