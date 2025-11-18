import { Form } from "@/component/ui/form";
import { PlusIcon } from "lucide-react";
import { Educontent } from "../ui/dialog-content";
import { Header } from "../ui/header";
import { OpenDialog } from "../ui/open-dialog";

export const EduForm = () => {
  return (
    <Form type="education">
      <Header type="education" />

      <OpenDialog Content={Educontent} type="education">
        <div className="m-auto flex size-[80%] rounded-2xl outline-dotted">
          <PlusIcon className="m-auto" />
        </div>
      </OpenDialog>
    </Form>
  );
};
