import { useResume, type resumeType } from "@/store";
import {
  BriefcaseBusiness,
  LaptopMinimalCheck,
  University,
  User,
  type LucideIcon,
} from "lucide-react";

type IHeader = {
  label: string;
  Icon: LucideIcon;
};

type IHeaders = Record<resumeType, IHeader>;
const HeaderType: IHeaders = {
  personal: {
    label: "Personal",
    Icon: User,
  },
  education: {
    label: "Education",
    Icon: University,
  },
  experience: {
    label: "Experience",
    Icon: BriefcaseBusiness,
  },
  skills: {
    label: "Skills",
    Icon: LaptopMinimalCheck,
  },
};

type Itype = {
  type: resumeType;
};
export const Reset = ({ type }: Itype) => {
  const { reset } = useResume(type);

  return (
    <button onClick={reset} type="reset" className="absolute right-0">
      reset
    </button>
  );
};
export const Header = ({ type }: Itype) => {
  const Icon = HeaderType[type].Icon;
  const label = HeaderType[type].label;
  return (
    <section className="relative mb-1.5 flex items-center text-2xl">
      <Icon />
      <h1>{label}</h1>
    </section>
  );
};
