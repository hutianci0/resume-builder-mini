import { create } from "zustand";
import { persist } from "zustand/middleware";

export type data = {
  id: string;
  location?: string;
  date?: string;
  name?: string;
  position?: string;
  description?: string;
};
export interface Custome {
  label?: string;
  id: string;
  data: data[];
}

interface CustomeStore {
  data: Custome[];
  reset: () => void;
  AddSection: () => void;
  AddItem: (id: string) => void;
  removeSection: (sectionId: string) => void;
  removeItem: (sectionId: string, id: string) => void;
  UpdateItem: (sectionId: string, id: string, data: data) => void;
  UpdateLabel: (sectionId: string, label: string) => void;
}

export const useCustomeStore = create<CustomeStore>()(
  persist(
    (set) => ({
      data: [{ id: crypto.randomUUID(), data: [] }],
      AddSection: () =>
        set((s) => {
          const defaultValue: Custome = {
            id: crypto.randomUUID(),
            data: [{ id: crypto.randomUUID() }],
          };
          return { data: [...s.data, defaultValue] };
        }),
      AddItem: (id) =>
        set((s) => ({
          data: s.data.map((ele) =>
            ele.id === id
              ? { ...ele, data: [...ele.data, { id: crypto.randomUUID() }] }
              : ele,
          ),
        })),
      reset: () => {},
      removeSection: (sectionId: string) =>
        set((s) => ({
          data: s.data.filter((i) => i.id !== sectionId),
        })),
      removeItem: (sectionId, id) =>
        set((s) => ({
          data: s.data.map((i) =>
            i.id === sectionId
              ? { ...i, data: i.data.filter((e) => e.id !== id) }
              : i,
          ),
        })),

      UpdateItem: (sectionId, id, data) =>
        set((state) => ({
          data: state.data.map((i) =>
            i.id === sectionId
              ? {
                  ...i,
                  data: i.data.map((ele) => (ele.id === id ? data : ele)),
                }
              : i,
          ),
        })),
      UpdateLabel: (sectionId: string, label: string) =>
        set((s) => ({
          data: s.data.map((i) => (i.id === sectionId ? { ...i, label } : i)),
        })),
    }),
    { name: "custome" },
  ),
);
