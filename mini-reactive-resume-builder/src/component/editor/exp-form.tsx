import { Form } from "@/component/ui/form";
import { Button } from "@/components/ui/button";

import { useExperienceStore, type Experience } from "@/store/form-store";
import { Ban } from "lucide-react";

import { Header } from "../ui/header";

import { OpenExpItem } from "./open-exp-dialog";

const ExpItem = (prop: Experience) => {
  const deleteForm = useExperienceStore((s) => s.deleteForm);
  return (
    <div className="grid grid-cols-6 gap-2">
      <OpenExpItem data={prop}>
        <div className="mb-2 rounded-sm border-2 p-2 hover:shadow-sm">
          <span>{prop.position}</span>
        </div>
      </OpenExpItem>
      <Button
        size="icon"
        variant={"ghost"}
        type="button"
        onClick={() => deleteForm(prop.id)}
      >
        {" "}
        <Ban
          size={20}
          className="transition-all duration-500 hover:cursor-pointer hover:bg-gray-500"
        />
      </Button>
    </div>
  );
};

export const ExpForm = () => {
  const data = useExperienceStore((s) => s.data);
  const defaultVaue: Experience = {
    id: crypto.randomUUID(),
    company: "",
    position: "",
    date: "",
    location: "",
    description: "",
  };
  return (
    <Form type="experience">
      <Header type="experience" />
      {data.map((i) => (
        <ExpItem key={i.id} {...i} />
      ))}

      <OpenExpItem data={defaultVaue}>
        <div className="bg-foreground text-background w-[100px] rounded-md p-1 hover:cursor-pointer">
          +
        </div>
      </OpenExpItem>
    </Form>
  );
};
