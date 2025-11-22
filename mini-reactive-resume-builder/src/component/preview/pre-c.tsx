import type { Custome } from "@/store/custome-store";

export const PreviewCustom = ({ data }: { data: Custome }) => {
  const { label, data: FormData } = data;
  if (!label?.trim()) return;
  return (
    <section className="mb-[10mm]">
      <h2 className="mb-2 border-b border-gray-300 pb-1 text-[14pt] font-semibold text-[#1a1a1a]">
        {label}
      </h2>

      {FormData.map((ele) => (
        <div className="mt-[4mm]" key={ele.id}>
          <div className="flex justify-between font-medium">
            <span>{ele.name}</span>
            <span>{ele.date}</span>
          </div>
          <div className="flex justify-between font-medium">
            <span className="mb-1 text-gray-700 italic">{ele.position}</span>

            <span>{ele.location}</span>
          </div>
          <ul className="list-disc space-y-0.5 pl-5">
            {(ele?.description || "")
              .split(",")
              .filter((ele) => ele !== "")
              .map((ele) => (
                <li key={ele}>{ele}</li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
