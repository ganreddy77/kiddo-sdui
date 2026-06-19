import React from "react";
import { Button } from "react-native";

import {
  useCampaignStore,
} from "../store/useCampaignStore";

function ClearCartButton() {
  const clearCart =
    useCampaignStore(
      (state) => state.clearCart
    );

  return (
    <Button
      title="CLEAR CART"
      onPress={clearCart}
    />
  );
}

export default React.memo(
  ClearCartButton
);