import { useCountStore } from "@/store/coun-store";
import { cn } from "@/utils/cn";

export const Buttons = () => {
  const { count, increment, decrement } = useCountStore();

  return (
    <div>
      {count > 0 && (
        <button className="w-1/2" onClick={decrement}>
          prev
        </button>
      )}
      <button
        onClick={increment}
        className={cn("w-1/2", { "ml-[50%]": count === 0 })}
      >
        next
      </button>
    </div>
  );
};
