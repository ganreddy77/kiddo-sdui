import { create } from "zustand";

interface CartStore {
  count: number;

  addToCart: () => void;
}

export const useCartStore =
  create<CartStore>((set) => ({
    count: 0,

    addToCart: () =>
      set((state) => ({
        count: state.count + 1,
      })),
  }));