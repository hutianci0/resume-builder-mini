import { create } from "zustand";
import { persist } from "zustand/middleware";

// Make IEdit generic so each store can specify the setField parameter type.
interface IEdit<TSet extends PersonalInfo | Education | Experience | string> {
  reset: () => void;
  setField: (data: TSet) => void;
}
interface PersonalInfo {
  name?: string;
  headline?: string;
  email?: string;
  phone?: string;
  location?: string;
  website?: string;
  [key: string]: string | undefined;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  location?: string;
  date?: string;
}

interface Experience {
  company: string;
  position: string;
  start: string;
  end: string;
  description?: string;
}

// PersonalStore's setField accepts a PersonalInfo object.
interface PersonalStore extends IEdit<PersonalInfo> {
  data: PersonalInfo;
}

// EducationStore's setField accepts a single Education entry while data is an array.
interface EducationStore {
  education: Education[];
  addEducation: () => void;
  updateEducation: (id: string, updated: Partial<Education>) => void;
  deleteEducation: (id: string) => void;
  reset: () => void;
}

interface ExperienceStore extends IEdit<Experience> {
  data: Experience[];
}

export const usePersonalStore = create<PersonalStore>()(
  persist(
    (set) => ({
      data: {},
      reset: () => set(() => ({ data: {} })),
      setField: (data) =>
        set((state) => ({ data: { ...state.data, ...data } })),
    }),
    { name: "personal" },
  ),
);

export const useEducationStore = create<EducationStore>()(
  persist(
    (set, get) => ({
      education: [
        {
          id: "1",
          school: "",
          field: "",
          degree: "",
        },
      ],

      addEducation: () =>
        set({
          education: [
            ...get().education,
            {
              id: crypto.randomUUID(),
              school: "",
              degree: "",
              field: "",
            },
          ],
        }),

      updateEducation: (id, updated) =>
        set({
          education: get().education.map((e) =>
            e.id === id ? { ...e, ...updated } : e,
          ),
        }),

      deleteEducation: (id) =>
        set({
          education: get().education.filter((e) => e.id !== id),
        }),

      reset: () =>
        set({
          education: [],
        }),
    }),
    { name: "resume-education" },
  ),
);

export const useExperienceStore = create<ExperienceStore>()(
  persist(
    (set) => ({
      data: [],
      reset: () => set(() => ({ data: [] })),
      setField: (data) => set((state) => ({ data: [...state.data, data] })),
    }),
    { name: "experience" },
  ),
);
