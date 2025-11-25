import type { Custome } from "@/store/custome-store";
import { useStyleStore } from "@/store/style-store";
import { CommonLayout } from "./container";

export const PreviewCustom = ({ data }: { data: Custome }) => {
  const { label, data: FormData } = data;
  const itemGap = useStyleStore((s) => s.style.itemGap);

  if (!label?.trim()) return;
  return (
    <CommonLayout title={label}>
      {FormData.map((ele) => (
        <div style={{ marginBottom: itemGap + "mm" }} key={ele.id}>
          <div className="flex justify-between font-medium">
            <span>{ele.name}</span>
            <span>{ele.date}</span>
          </div>
          <div className="flex justify-between font-medium">
            <span className="mb-1 text-gray-700 italic">{ele.position}</span>
            <span>{ele.location}</span>
          </div>
          <ul className="list-disc space-y-0.5 pl-5">
            {(ele?.description || "")
              .split(",")
              .filter((ele) => ele !== "")
              .map((ele) => (
                <li key={ele}>{ele}</li>
              ))}
          </ul>
        </div>
      ))}
    </CommonLayout>
  );
};
