import { PreviewPersonal } from "./preview/pre-p";
import { PreviewEdu } from "./preview/pre_edu";

export const PreviewPanel = () => {
  return (
    <div className="resume-preview mx-auto my-4 flex min-h-[297mm] w-[210mm] flex-col bg-white p-[20mm_18mm] font-sans text-[12pt] leading-normal text-[#111] shadow-md print:m-0 print:shadow-none">
      {/* Header */}
      <PreviewPersonal />

      {/* Education */}
      <PreviewEdu />

      {/* Experience */}
      <section className="mb-[10mm]">
        <h2 className="mb-2 border-b border-gray-300 pb-1 text-[14pt] font-semibold text-[#1a1a1a]">
          Experience
        </h2>

        <div className="mt-[4mm]">
          <div className="flex justify-between font-medium">
            <span>Software Engineer</span>
            <span>2022 – Present</span>
          </div>
          <p className="mb-1 text-gray-700 italic">TechCorp Ltd, London</p>
          <ul className="list-disc space-y-0.5 pl-5">
            <li>Developed scalable web applications using React and Node.js</li>
            <li>Improved CI/CD deployment speed by 30%</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-[10mm]">
        <h2 className="mb-2 border-b border-gray-300 pb-1 text-[14pt] font-semibold text-[#1a1a1a]">
          Skills
        </h2>
        <ul className="mt-1 flex flex-wrap gap-2">
          {["React", "TypeScript", "Node.js", "TailwindCSS"].map((skill) => (
            <li
              key={skill}
              className="rounded-md bg-gray-100 px-3 py-1 text-[10pt]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
