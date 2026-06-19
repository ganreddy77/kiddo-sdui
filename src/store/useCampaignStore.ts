import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  price?: number;
  quantity?: number;
};

type CampaignState = {
  cart: CartItem[];

  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const useCampaignStore =
  create<CampaignState>((set) => ({
    cart: [],

    addItem: (item) =>
      set((state) => {
        const existing =
          state.cart.find(
            (cartItem) =>
              cartItem.id === item.id
          );

        if (existing) {
          return {
            cart: state.cart.map(
              (cartItem) =>
                cartItem.id === item.id
                  ? {
                      ...cartItem,
                      quantity:
                        (cartItem.quantity || 1) +
                        1,
                    }
                  : cartItem
            ),
          };
        }

        return {
          cart: [
            ...state.cart,
            {
              ...item,
              quantity: 1,
            },
          ],
        };
      }),

    removeItem: (id) =>
      set((state) => ({
        cart: state.cart.filter(
          (item) => item.id !== id
        ),
      })),

    clearCart: () =>
      set({
        cart: [],
      }),
  }));