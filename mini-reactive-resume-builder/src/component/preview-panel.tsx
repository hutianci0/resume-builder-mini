import { useCustomeStore } from "@/store/custome-store";
import { PreviewCustom } from "./preview/pre-c";
import { PreviewPersonal } from "./preview/pre-p";
import { PreviewEdu } from "./preview/pre_edu";
import { PreviewExp } from "./preview/pre_exp";
import { PreviewSkill } from "./preview/pre_sk";

const PreviewC = () => {
  const data = useCustomeStore((s) => s.data);

  return (
    <>
      {" "}
      {data.map((i) => (
        <PreviewCustom key={i.id} data={i} />
      ))}
    </>
  );
};
export const PreviewPanel = () => {
  return (
    <div className="resume-preview mx-auto my-4 flex min-h-[297mm] w-[210mm] flex-col bg-white p-[20mm_18mm] font-sans text-[12pt] leading-normal text-[#111] shadow-md print:m-0 print:shadow-none">
      {/* Header */}
      <PreviewPersonal />

      {/* Education */}
      <PreviewEdu />

      {/* Experience */}
      <PreviewExp />

      {/* Skills */}
      <PreviewSkill />

      {/* custome  */}
      <PreviewC />
    </div>
  );
};
