import { useSkillStore } from "@/store/form-store";

export const PreviewSkill = () => {
  const data = useSkillStore((s) => s.data);
  return (
    <>
      {" "}
      <section className="mb-[10mm]">
        <h2 className="mb-2 border-b border-gray-300 pb-1 text-[14pt] font-semibold text-[#1a1a1a]">
          Skills
        </h2>
        <div>
          {data.map((i) => (
            <div key={i.label} className="flex items-center gap-1">
              <span className="font-bold">{i.label}:</span>
              <ul className="mt-1 flex flex-wrap gap-2">
                {i.data !== "" &&
                  i.data.split(",").map((i) => (
                    <span
                      key={i.length * Math.random() * Date.now()}
                      className="rounded-md bg-gray-100 px-3 py-1 text-[10pt]"
                    >
                      {i}
                    </span>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
