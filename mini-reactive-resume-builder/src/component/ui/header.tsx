import { useResume, type resumeType } from "@/store";
import {
  BriefcaseBusiness,
  LaptopMinimalCheck,
  Lightbulb,
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
  custome: {
    label: "Custome",
    Icon: Lightbulb,
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
    <section className="relative mb-1.5 flex justify-between text-2xl">
      <div className="flex items-center">
        <Icon />
        <h1>{label}</h1>
      </div>
    </section>
  );
};
