import { usePersonalStore } from "@/store/form-store";
import { cn } from "@/utils/cn";
import {
  Briefcase,
  Link,
  Mail,
  Pin,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

type IItem = {
  Icon: LucideIcon;
  Info: string | undefined;
  className?: string;
};
const InfoItem = ({ Icon, Info, className }: IItem) => {
  return (
    <>
      <span className={cn("flex items-center gap-1 text-[10pt]", className)}>
        {Info && <Icon size={25} />}
        {Info || ""}
      </span>
    </>
  );
};

export const PreviewPersonal = () => {
  const { data } = usePersonalStore();
  return (
    <section className="mb-[12mm] text-center">
      <h1 className="mb-[3mm] text-[24pt] font-bold">{data.name}</h1>
      <p className="grid grid-cols-4 text-[10pt] text-gray-600">
        <InfoItem Info={data.headline} Icon={Briefcase} />
        <InfoItem Info={data.email} Icon={Mail} />
        <InfoItem Info={data.phone} Icon={Smartphone} />
        <InfoItem Info={data.location} Icon={Pin} />
      </p>
      <p className="flex w-full">
        <InfoItem Info={data.website} Icon={Link} className="m-auto" />
      </p>
    </section>
  );
};
