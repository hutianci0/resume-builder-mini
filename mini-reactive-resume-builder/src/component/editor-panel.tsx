import { BasicForm } from "./editor/basic-form";
import { EduForm } from "./editor/edu-form";
import { ExpForm } from "./editor/exp-form";
import { SkillForm } from "./editor/skill-form";
import { Buttons } from "./ui/buttons";

/**TODO:
 * Forms
 * 3. experience
 * 4. siklls
 * responsive
 */
export default function EditorPanel() {
  return (
    <>
      <section className="flex h-fit flex-col rounded-2xl bg-white text-black shadow-2xl transition-all duration-500">
        <div className="flex w-[500px] flex-1 overflow-hidden transition duration-500">
          <BasicForm />
          <EduForm />
          <ExpForm />
          <SkillForm />
        </div>
        <Buttons />
      </section>
    </>
  );
}
