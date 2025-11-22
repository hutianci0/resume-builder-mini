import { create } from "zustand";

interface CountStore {
  count: number;

  increment: (max: number) => void;
  decrement: () => void;
  setCount: (max: number) => void;

  reset: () => void;
}

export const useCountStore = create<CountStore>()((set) => ({
  count: 0,

  increment: (max) =>
    set((state) => ({ count: state.count < max - 1 ? state.count + 1 : 0 })),
  decrement: () =>
    set((state) => ({ count: state.count < 0 ? 0 : state.count - 1 })),

  setCount: (max) => set({ count: max }),

  reset: () => set({ count: 0 }),
}));
