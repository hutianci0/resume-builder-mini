import { useResume } from "@/store";
import { Ban } from "lucide-react";
import { Form } from "../ui/form";
import { Header } from "../ui/header";
import { OpenCustomeItem } from "../ui/open-dialog";

const Item = ({ title = "add new" }: { title?: string }) => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-6 items-center gap-2">
        <OpenCustomeItem title={title}>
          {" "}
          <div className="col-span-5 mb-2 rounded-sm border-2 p-2 hover:shadow-sm">
            <span>{title}</span>
          </div>
        </OpenCustomeItem>

        <Ban size={20} />
      </div>
    </>
  );
};

export const CustomeForm = () => {
  const { data } = useResume("custome");
  return (
    <Form type="custome">
      <Header type="custome" />
      <div className="w-full">
        {data.length === 0 ? (
          <Item />
        ) : (
          data.map((i) => <Item key={i.title + Date.now()} title={i.title} />)
        )}
      </div>
    </Form>
  );
};
