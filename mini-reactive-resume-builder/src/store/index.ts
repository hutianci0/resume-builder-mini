import { useEducationStore, usePersonalStore } from "./form-store";

export type resumeType = "personal" | "education" | "experience" | "skills";

// 用泛型让返回类型根据参数自动变化
export const useResume = <T extends resumeType>(type: T) => {
  const stores = {
    personal: usePersonalStore(),
    education: useEducationStore(),
    experience: usePersonalStore(),
    skills: usePersonalStore(),
  };
  return stores[type];
};
