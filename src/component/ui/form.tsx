import type { resumeType } from "@/store/form-store";
import { cn } from "@/utils/cn";

interface IForm extends React.ComponentProps<"form"> {
  type: resumeType;
}

export const Form = ({ children, className }: IForm) => {
  return (
    <form className={cn("w-[500px] shrink-0 overflow-y-scroll p-5", className)}>
      {children}
    </form>
  );
};
