import { Form } from "@/component/ui/form";
import { Button } from "@/components/ui/button";
import { useResume } from "@/store";
import type { Education } from "@/store/form-store";
import { Ban } from "lucide-react";
import { Header } from "../ui/header";
import { OpenEduItem } from "./open-edu-dialog";

const EduItem = (prop: Education) => {
  const { deleteForm } = useResume("education");
  return (
    <div className="grid grid-cols-6 gap-2">
      <OpenEduItem data={prop}>
        <div className="mb-2 rounded-sm border-2 p-2 hover:shadow-sm">
          <span>{prop.school}</span>
        </div>
      </OpenEduItem>
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

export const EduForm = () => {
  const { data } = useResume("education");
  const defaultVaue = {
    id: crypto.randomUUID(),
    school: "",
    location: "",
    field: "",
    degree: "",
  };

  return (
    <Form type="education">
      <Header type="education" />
      {data.map((i) => (
        <EduItem key={i.id} {...i} />
      ))}

      <OpenEduItem data={defaultVaue}>
        <div className="bg-foreground text-background w-[100px] rounded-md p-1 hover:cursor-pointer">
          +
        </div>
      </OpenEduItem>
    </Form>
  );
};
