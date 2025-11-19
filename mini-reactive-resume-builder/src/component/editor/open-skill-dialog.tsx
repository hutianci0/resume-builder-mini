import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useResume } from "@/store";
import type { Skill } from "@/store/form-store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { type ReactNode, useState } from "react";

type ISKill = {
  children: ReactNode;
  data: Skill;
};
export const OpenSkillItem = ({ children, data }: ISKill) => {
  const { UpdateField } = useResume("skills");
  const [value, setvalue] = useState<Skill["data"]>(data.data);
  return (
    <Dialog>
      <DialogTrigger className="col-span-5">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{data.label}</DialogTitle>
          <DialogDescription>
            {'Enter related skills (split by ",)'}
          </DialogDescription>
          <Textarea value={value} onChange={(e) => setvalue(e.target.value)} />
        </DialogHeader>
        <DialogFooter>
          <button
            className="rounded-md bg-black p-2 text-white hover:cursor-pointer"
            onClick={() => {
              UpdateField(data.label, value);
            }}
          >
            save
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const OpenAddSkill = ({ children }: { children: ReactNode }) => {
  const { AddItem } = useResume("skills");
  const [skill, setSkill] = useState<Skill>({ label: "", data: "" });
  const handleClick = (skillData: Skill) => AddItem(skillData);

  return (
    <Dialog>
      <DialogTrigger className="w-[90%]">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New</DialogTitle>
          <DialogDescription>
            {'Enter related skills (split by ",)'}
          </DialogDescription>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <label htmlFor="label">Skill Category</label>
              <Input
                value={skill.label}
                onChange={(e) => setSkill({ ...skill, label: e.target.value })}
              />
            </div>
            <div className="grid gap-3">
              <label htmlFor="data">Skills</label>
              <Input
                value={skill.data}
                onChange={(e) => setSkill({ ...skill, data: e.target.value })}
              />
            </div>
          </div>
        </DialogHeader>
        <DialogFooter>
          <button
            className="rounded-md bg-black p-2 text-white hover:cursor-pointer"
            onClick={() => handleClick(skill)}
          >
            save
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
