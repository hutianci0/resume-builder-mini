import { useExperienceStore } from "@/store/form-store";
import { useStyleStore } from "@/store/style-store";
import { CommonLayout } from "./container";

export const PreviewExp = () => {
  const data = useExperienceStore((s) => s.data);
  const itemGap = useStyleStore((s) => s.style.itemGap);

  return (
    <CommonLayout title="Profesional Experience">
      {data.map((ele) => (
        <div key={ele.id} style={{ marginBottom: itemGap + "mm" }}>
          <div className="flex justify-between font-semibold">
            <span>{ele.company}</span>
            <span>{ele.date}</span>
          </div>
          <div className="flex justify-between font-medium">
            <span className="mb-1 text-gray-600 italic">{ele.position}</span>

            <span>{ele.location}</span>
          </div>
          <ul className="list-disc space-y-0.5 pl-5">
            {ele.description
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
