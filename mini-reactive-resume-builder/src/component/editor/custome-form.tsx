import {
  useCustomeStore,
  type Custome,
  type data,
} from "@/store/custome-store";
import { Ban } from "lucide-react";
import { Form } from "../ui/form";
import { HeaderCustom } from "../ui/header";
import { OpenCustomeItem } from "../ui/open-dialog";

type IItem = {
  title?: string;
  sectionId: string;
  data: data;
};
const Item = ({ sectionId, data }: IItem) => {
  const removeItem = useCustomeStore((s) => s.removeItem);
  return (
    <>
      {" "}
      <div className="grid grid-cols-6 items-center gap-2">
        <OpenCustomeItem data={data} sectionId={sectionId}>
          {" "}
          <div className="col-span-5 mb-2 rounded-sm border-2 p-2 hover:shadow-sm">
            <span>{data.name || "Add new"}</span>
          </div>
        </OpenCustomeItem>

        <Ban size={20} onClick={() => removeItem(sectionId, data.id)} />
      </div>
    </>
  );
};

export const CustomeForm = ({
  data,
  sectionId,
}: {
  data: Custome;
  sectionId: string;
}) => {
  const { label, data: FormData } = data;
  return (
    <Form type="custome">
      <HeaderCustom id={sectionId} />
      <div className="w-full">
        {FormData &&
          FormData.map((i) => (
            <Item key={i.id} title={label} sectionId={sectionId} data={i} />
          ))}
      </div>
    </Form>
  );
};
