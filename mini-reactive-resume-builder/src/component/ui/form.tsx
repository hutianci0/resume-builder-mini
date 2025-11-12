import { type resumeType } from "@/store";
import { useCountStore } from "@/store/coun-store";
import { cn } from "@/utils/cn";

interface IForm extends React.ComponentProps<"form"> {
  type: resumeType;
}

export const Form = ({ children, className }: IForm) => {
  const { count } = useCountStore();
  return (
    <form
      className={cn(
        "min-w-full flex-1 transform p-5 transition-all duration-500",
        className,
      )}
      style={{ transform: `translateX(-${count * 100}%)` }}
    >
      {children}
    </form>
  );
};
