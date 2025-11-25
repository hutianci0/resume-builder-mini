import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface style {
  fontFamily: string;
  fontSize: string;
  sectionGap: string;
  itemGap: string;
}

interface StyleStore {
  style: style;
  updateStyle: (data: style) => void;
}
const defaultForm = {
  fontFamily: "Arial",
  fontSize: "16",
  sectionGap: "30",
  itemGap: "4",
};
export const useStyleStore = create<StyleStore>()(
  persist(
    (set) => ({
      style: defaultForm,
      updateStyle: (data) => {
        set({ style: data });
      },
    }),
    { name: "style" },
  ),
);
