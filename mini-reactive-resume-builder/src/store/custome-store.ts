import { create } from "zustand";

type data = {
  id: string;
  location?: string; // if "e"
  date?: string; // "e"
  [k: string]: string | undefined;
};
export interface Custome {
  title: string; // section name
  type: "e" | "s"; // e: experience-like UI , S:Skill-like UI
  data: data[];
}

interface CustomeStore {
  data: Custome[];
  reset: () => void;
  Add?: () => void;
  // AddSection: () => void;
  // AddData: () => void;
  // deleteSection: () => void;
}

export const useCustomeStore = create<CustomeStore>()((set) => ({
  data: [],
  reset: () => set({ data: [] }),
}));
