import { useStyleStore } from "@/store/style-store";

export const CommonLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const sectionGap = useStyleStore((s) => s.style.sectionGap);
  const fontSize = useStyleStore((s) => s.style.fontSize);
  return (
    <section className="mt-[10mm]" style={{ marginTop: sectionGap + "mm" }}>
      <h2
        className="bg-gray-pb-1 mb-2 bg-gray-400 text-[14pt] font-semibold text-[#1a1a1a]"
        style={{ fontSize: +fontSize + 2 + "pt" }}
      >
        {title}
      </h2>
      <div style={{ fontSize: fontSize + "pt" }}>{children}</div>
    </section>
  );
};
