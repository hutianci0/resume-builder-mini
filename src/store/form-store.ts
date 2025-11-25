import { create } from "zustand";
import { persist } from "zustand/middleware";

export type resumeType =
  | "personal"
  | "education"
  | "experience"
  | "skills"
  | "custome";
// Make IEdit generic so each store can specify the setField parameter type.
interface IEdit<TSet extends PersonalInfo | Education | Experience | Skill> {
  reset: () => void;
  setField: (data: TSet) => void;
  Add?: () => void;
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

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  date: string;
  description: string;
}

export interface Skill {
  label: string;
  data: string;
}

// PersonalStore's setField accepts a PersonalInfo object.
interface PersonalStore extends IEdit<PersonalInfo> {
  data: PersonalInfo;
}

// EducationStore's setField accepts a single Education entry while data is an array.
interface EducationStore extends IEdit<Education> {
  data: Education[];

  deleteForm: (id: string) => void;
}

// ExperienceStore Interface
interface ExperienceStore extends IEdit<Experience> {
  data: Experience[];
  deleteForm: (id: string) => void;
}

// SkillStore Interface
interface SkillStore extends IEdit<Skill> {
  data: Skill[];
  deleteItem: (title: string) => void;
  UpdateField: (title: string, data: string) => void;
  AddItem: ({ label, data }: Skill) => void;
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
    (set) => ({
      data: [
        {
          id: crypto.randomUUID(),
          school: "",
          degree: "",
          field: "",
          location: "",
          date: "",
        },
      ],
      setField: (data) =>
        set((s) => {
          const isHere = s.data.some((i) => i.id === data.id);
          return isHere
            ? {
                data: s.data.map((i) => (i.id === data.id ? { ...data } : i)),
              }
            : { data: [...s.data, data] };
        }),

      deleteForm: (id) =>
        set((s) => ({
          data: s.data.filter((ele) => ele.id !== id),
        })),
      reset: () =>
        set({
          data: [],
        }),
      Add: () =>
        set((state) => ({
          data: [
            ...state.data,
            {
              id: crypto.randomUUID(),
              field: "",
              school: "Add more",
              degree: "",
              date: "",
            },
          ],
        })),
    }),
    { name: "education" },
  ),
);

export const useExperienceStore = create<ExperienceStore>()(
  persist(
    (set) => ({
      data: [
        {
          id: crypto.randomUUID(),
          company: "",
          position: "",
          date: "",
          location: "",
          description: "",
        },
      ],
      reset: () => set(() => ({ data: [] })),
      setField: (data) =>
        set((s) => {
          const isHere = s.data.some((i) => i.id === data.id);
          return isHere
            ? {
                data: s.data.map((i) => (i.id === data.id ? { ...data } : i)),
              }
            : { data: [...s.data, data] };
        }),
      deleteForm: (id) =>
        set((state) => ({ data: state.data.filter((ele) => ele.id !== id) })),
      Add: () =>
        set((state) => ({
          data: [
            ...state.data,
            {
              id: crypto.randomUUID(),
              company: "",
              position: "",
              date: "",
              location: "",
              description: "",
            },
          ],
        })),
    }),

    { name: "experience" },
  ),
);

export const useSkillStore = create<SkillStore>()(
  persist(
    (set) => ({
      data: [
        {
          label: "TechStack",
          data: "",
        },

        {
          label: "Modules",
          data: "",
        },
        {
          label: "Languages",
          data: "",
        },
      ],
      deleteItem: (title) =>
        set((s) => ({
          data: s.data.filter((i) => i.label !== title),
        })),
      reset: () =>
        set({
          data: [
            {
              label: "TechStack",
              data: "",
            },

            {
              label: "Modules",
              data: "",
            },
            {
              label: "Languages",
              data: "",
            },
          ],
        }),

      setField: () => {},
      UpdateField: (title, data) =>
        set((s) => ({
          data: s.data.map((i) =>
            i.label === title ? { label: title, data } : i,
          ),
        })),
      AddItem: ({ label, data }) =>
        set((s) => {
          const found = s.data.some((ele) => ele.label === label);

          return {
            data: found
              ? s.data.map((ele) =>
                  ele.label === label
                    ? { ...ele, data: [ele.data, data].join(",") }
                    : ele,
                )
              : [...s.data, { label, data }],
          };
        }),
    }),

    { name: "skills" },
  ),
);
