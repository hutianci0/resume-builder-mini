import { useResume } from "@/store";
import type { Education } from "@/store/form-store";
import type React from "react";

const EduLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mb-[10mm]">
      <h2 className="mb-2 border-b border-gray-300 pb-1 text-[14pt] font-semibold text-[#1a1a1a]">
        Education
      </h2>
      {children}
    </section>
  );
};

const EduItem = (prop: Education) => {
  return (
    <div className="mt-[4mm]">
      <div className="flex justify-between font-medium">
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
  const { education } = useResume("education");
  return (
    <EduLayout>
      {education.map((edu) => (
        <EduItem {...edu} key={edu.id} />
      ))}
    </EduLayout>
  );
};
