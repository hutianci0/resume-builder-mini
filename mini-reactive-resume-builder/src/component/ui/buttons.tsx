import { useCountStore } from "@/store/coun-store";
import { useCustomeStore } from "@/store/custome-store";
import { cn } from "@/utils/cn";

export const Buttons = () => {
  // 只取 length，避免 data 数组整个引用改变导致重渲染
  const dataLength = useCustomeStore((s) => s.data.length);
  const count = useCountStore((s) => s.count);
  const increment = useCountStore((s) => s.increment);
  const decrement = useCountStore((s) => s.decrement);

  const max = 4 + dataLength;

  return (
    <div className="flex w-full">
      {count > 0 && (
        <button className="w-1/2" onClick={decrement}>
          prev
        </button>
      )}
      <button
        onClick={() => increment(max)}
        className={cn("w-1/2", { "ml-[50%]": count === 0 })}
      >
        next
      </button>
    </div>
  );
};
