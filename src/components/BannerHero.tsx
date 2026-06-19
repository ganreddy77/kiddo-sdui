import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

import { dispatchAction } from "../engine/ActionDispatcher";
import { useTheme } from "../context/ThemeContext";
import { trackEvent } from "../utils/analytics";

type Props = {
  title: string;
  action?: any;
};

function BannerHero({
  title,
  action,
}: Props) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={() => {
        trackEvent(
          "banner_click",
          { title }
        );

        dispatchAction(action);
      }}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              theme.primary,
          },
        ]}
      >
        <Text style={styles.text}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

export default React.memo(
  BannerHero
);

const styles = StyleSheet.create({
  container: {
    height: 180,
    borderRadius: 12,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});