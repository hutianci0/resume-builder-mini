import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useCountStore } from "@/store/coun-store";
import { useCustomeStore } from "@/store/custome-store";
import type { resumeType } from "@/store/form-store";
import {
  BriefcaseBusiness,
  LaptopMinimalCheck,
  Lightbulb,
  University,
  User,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

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

export const HeaderCustom = ({ id }: { id: string }) => {
  const [isEditing, setEditing] = useState(false);
  const [isDisable, setDisable] = useState(false);
  const [sectionName, setName] = useState<string | undefined>(undefined);
  const { AddSection, data, AddItem, removeSection, UpdateLabel } =
    useCustomeStore();
  const setCount = useCountStore((s) => s.setCount);
  const handleBlur = () => {
    setEditing(false);
    UpdateLabel(id, sectionName || "Add new");
  };

  useEffect(() => {
    if (data.length <= 1) setDisable(true);
    setCount(4 + data.length - 1);
  }, [data.length, setCount]);

  return (
    <section className="relative mb-1.5 flex justify-between text-2xl">
      <div className="flex items-center">
        <Lightbulb />
        {isEditing ? (
          <Input
            onBlur={handleBlur}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            value={sectionName}
          />
        ) : (
          <h1 onClick={() => setEditing(true)}>{sectionName || "Custome"}</h1>
        )}
        <div className="absolute right-0 flex gap-2">
          <Button
            type="button"
            onClick={() => {
              AddSection();
            }}
          >
            + section
          </Button>
          <Button
            type="button"
            onClick={() => {
              AddItem(id);
            }}
          >
            + item
          </Button>
          <Button
            disabled={isDisable}
            onClick={() => {
              removeSection(id);
            }}
          >
            - section
          </Button>
        </div>
      </div>
    </section>
  );
};
