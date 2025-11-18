import { Form } from "@/component/ui/form";
import { Button } from "@/components/ui/button";
import { useResume } from "@/store";
import type { Skill } from "@/store/form-store";
import { Ban } from "lucide-react";
import { Header } from "../ui/header";
import { OpenAddSkill, OpenSkillItem } from "../ui/open-dialog";

const SkillItem = (prop: Skill) => {
  const { deleteItem } = useResume("skills");

  return (
    <>
      {" "}
      <div className="grid grid-cols-6 gap-2">
        <OpenSkillItem data={prop}>
          <div className="mb-2 rounded-sm border-2 p-2 hover:shadow-sm">
            <span>{prop.label}</span>
          </div>
        </OpenSkillItem>
        <Button
          size="icon"
          variant={"ghost"}
          type="button"
          onClick={() => deleteItem(prop.label)}
        >
          {" "}
          <Ban
            size={20}
            className="transition-all duration-500 hover:cursor-pointer hover:bg-gray-500"
          />
        </Button>
      </div>
    </>
  );
};

export const SkillForm = () => {
  const { data } = useResume("skills");

  return (
    <Form type="skills">
      <Header type="skills" />
      {data.map((i) => (
        <SkillItem {...i} key={i.label} />
      ))}
      <OpenAddSkill>
        {" "}
        <div className="rounded-md bg-black p-1 text-white hover:cursor-pointer">
          +
        </div>
      </OpenAddSkill>
    </Form>
  );
};
