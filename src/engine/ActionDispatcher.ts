import { useCampaignStore }
from "../store/useCampaignStore";

export function dispatchAction(
  action: any
) {
  if (!action) {
    console.log(
      "NO ACTION RECEIVED"
    );
    return;
  }

  switch (action.type) {
    case "ADD_TO_CART":
      console.log(
        "ADD_TO_CART",
        action.payload
      );

      useCampaignStore
        .getState()
        .addItem(
          action.payload
        );

      console.log(
        "STORE AFTER ADD",
        useCampaignStore
          .getState()
          .cart
      );

      break;

    case "CLEAR_CART":
      console.log(
        "CLEAR_CART"
      );
    case "REMOVE_FROM_CART":
  useCampaignStore
    .getState()
    .removeItem(
      action.payload.id
    );
  break;

      useCampaignStore
        .getState()
        .clearCart();

      break;

    default:
      console.log(
        "Unknown action:",
        action.type
      );
  }
}