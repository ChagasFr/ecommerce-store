import { create } from "zustand";
import toast from "react-hot-toast";

import { Product } from "@/types";
import { persist } from "zustand/middleware";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItem = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id);

      if (existingItem) {
        return toast("Item already in cart.");
      }

      set({ items: [...get().items, data] });
      toast.success("Imte add to cart.");
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast.success("Item removed from the cart");
    },
    removeAll: () => set({ items: [] }),
  }))
);

export default useCart;
