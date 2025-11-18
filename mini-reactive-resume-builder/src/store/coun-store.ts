import { create } from "zustand";

interface CountStore {
  count: number;
  d_count: number;
  increment: (max: number) => void;
  decrement: () => void;
  d_increment: () => void;
  d_decrement: () => void;
  set_dcount: (len: number) => void;
  reset: () => void;
}

export const useCountStore = create<CountStore>()((set) => ({
  count: 0,
  d_count: 0,
  increment: (max) =>
    set((state) => ({ count: state.count < max - 1 ? state.count + 1 : 0 })),
  decrement: () =>
    set((state) => ({ count: state.count < 0 ? 0 : state.count - 1 })),
  d_increment: () =>
    set((state) => ({
      d_count: state.d_count + 1,
    })),

  d_decrement: () =>
    set((state) => ({
      d_count: state.d_count > 0 ? state.d_count - 1 : 0,
    })),

  set_dcount: (len) => set({ d_count: len }),
  reset: () => set({ d_count: 0 }),
}));
