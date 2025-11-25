import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/coun-store";
import { useCustomeStore } from "@/store/custome-store";
import type { ReactNode } from "react";
import { BasicForm } from "./editor/basic-form";

import { StyleForm } from "./editor/chang-style";
import { CustomeForm } from "./editor/custome-form";
import { EduForm } from "./editor/edu-form";
import { ExpForm } from "./editor/exp-form";
import { SkillForm } from "./editor/skill-form";
import { Buttons } from "./ui/buttons";

/**TODO:
 * Toogle section: DND
 * able to change
 * font-size: section title, section content, persoanl section is different
 * spacing: spacing between item, section
 * typography
 * personal info:able to custome: icon + personal info
 */

// EditorContainer.jsx
const EditorContainer = ({ children }: { children: ReactNode }) => {
  const count = useCountStore((s) => s.count);

  const slideStyle = {
    transform: `translateX(-${count * 500}px)`,
  };

  return (
    <section className="h-fit w-fit overflow-hidden rounded-2xl bg-white text-black shadow-2xl">
      <div
        className="flex max-h-[250px] w-[500px] flex-1 transition duration-500"
        style={slideStyle}
      >
        {children}
      </div>
      <Buttons />
    </section>
  );
};

const CustomePanel = () => {
  const data = useCustomeStore((s) => s.data);
  return (
    <>
      {data.map((i) => (
        <CustomeForm key={i.id} data={i} sectionId={i.id} />
      ))}
    </>
  );
};

export default function EditorPanel() {
  return (
    <div className="flex gap-2 lg:flex-col">
      {" "}
      <EditorContainer>
        {" "}
        <BasicForm />
        <EduForm />
        <ExpForm />
        <SkillForm />
        <CustomePanel />
      </EditorContainer>
      <Button onClick={() => window.print()}>Export as PDF</Button>
      <StyleForm />
    </div>
  );
}
