import { useEffect, useRef, useState } from "react";
import { BasicForm } from "./editor/basic-form";
import { CustomeForm } from "./editor/custome-form";
import { EduForm } from "./editor/edu-form";
import { ExpForm } from "./editor/exp-form";
import { SkillForm } from "./editor/skill-form";
import { Buttons } from "./ui/buttons";

/**TODO:
 * Custome section: Editor Form, Skills
 * complete Custome Form : Exp-like
 * Able to change section name  (Input)
 * save to store and local
 * complete Custome Form : Skill-like
 * Toogle section: DND
 * Try update Edu and Exp UI : same as SKills
 */
export default function EditorPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const [max, setMax] = useState<number>(0);
  useEffect(() => {
    if (ref.current) setMax(ref.current?.children.length);
  }, [max]);
  return (
    <>
      <section className="flex h-fit flex-col rounded-2xl bg-white text-black shadow-2xl transition-all duration-500">
        <div
          className="flex max-h-[250px] w-[500px] flex-1 overflow-hidden overflow-y-scroll transition duration-500"
          ref={ref}
        >
          <BasicForm />
          <EduForm />
          <ExpForm />
          <SkillForm />
          <CustomeForm />
        </div>
        <Buttons max={max} />
      </section>
    </>
  );
}
