// store/usePreviewOrder.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PreviewOrderStore {
  order: string[];
  setOrder: (newOrder: string[]) => void;
  togglePanel: (id: string) => void;
}

export const usePreviewOrder = create<PreviewOrderStore>()(
  persist(
    (set, get) => ({
      order: ["personal", "education", "experience", "skills"],
      setOrder: (newOrder) => set({ order: newOrder }),
      togglePanel: (id) => {
        const { order } = get();
        if (order.includes(id)) {
          set({ order: order.filter((x) => x !== id) }); // 移除
        } else {
          set({ order: [...order, id] }); // 添加
        }
      },
    }),
    { name: "order" },
  ),
);
