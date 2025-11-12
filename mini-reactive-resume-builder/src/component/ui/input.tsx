import { cn } from "@/utils/cn";
import React, { useRef } from "react";
interface InputProps extends React.ComponentProps<"input"> {
  label: string;
}

export const Input = ({ className, label, onChange, value }: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (ref.current) {
      if (e.key === "Enter") {
        ref.current.blur();
      }
    }
  };

  return (
    <div className="flex justify-between">
      <span>{label}</span>

      <input
        ref={ref}
        value={value || ""}
        onChange={onChange}
        onKeyUp={handleEnter}
        type="text"
        className={cn(
          "border-b border-b-black outline-none focus:border-b-2",
          className || "",
        )}
      />
    </div>
  );
};
