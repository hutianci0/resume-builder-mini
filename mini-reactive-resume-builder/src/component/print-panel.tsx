import { PreviewC } from "./preview-panel";
import { PreviewPersonal } from "./preview/pre-p";
import { PreviewEdu } from "./preview/pre_edu";
import { PreviewExp } from "./preview/pre_exp";
import { PreviewSkill } from "./preview/pre_sk";

export const PrintPanel = () => {
  return (
    <div
      id="print-resume"
      className="mx-auto min-h-[297mm] w-[210mm] bg-white px-[20mm] py-[15mm] text-[11pt] leading-[1.35] text-black"
    >
      <PreviewPersonal />
      <PreviewEdu />
      <PreviewExp />
      <PreviewSkill />
      <PreviewC />
    </div>
  );
};
