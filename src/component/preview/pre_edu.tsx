import { useEducationStore, type Education } from "@/store/form-store";
import { useStyleStore } from "@/store/style-store";
import { CommonLayout } from "./container";

//

const EduItem = (prop: Education) => {
  const itemGap = useStyleStore((s) => s.style.itemGap);
  return (
    <div style={{ marginBottom: itemGap + "mm" }}>
      <div className="flex justify-between font-semibold">
        <span>{prop.school}</span>
        <div className="flex gap-2">
          <span>{prop.date}</span>
          <span className="font-medium not-italic">{prop.location || ""}</span>
        </div>
      </div>
      <div className="flex justify-between text-gray-700 italic">
        {" "}
        <span>
          {prop.degree} {prop.field}
        </span>
      </div>
    </div>
  );
};
export const PreviewEdu = () => {
  const data = useEducationStore((s) => s.data);
  return (
    <CommonLayout title="Education">
      {data.map((edu) => (
        <EduItem {...edu} key={edu.id} />
      ))}
    </CommonLayout>
  );
};
