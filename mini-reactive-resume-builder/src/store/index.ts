import { useCustomeStore } from "./custome-store";
import {
  useEducationStore,
  useExperienceStore,
  usePersonalStore,
  useSkillStore,
} from "./form-store";

export type resumeType =
  | "personal"
  | "education"
  | "experience"
  | "skills"
  | "custome";

// 用泛型让返回类型根据参数自动变化
export const useResume = <T extends resumeType>(type: T) => {
  const stores = {
    personal: usePersonalStore(),
    education: useEducationStore(),
    experience: useExperienceStore(),
    skills: useSkillStore(),
    custome: useCustomeStore(),
  };
  return stores[type];
};
