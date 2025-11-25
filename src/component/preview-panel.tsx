import { useCustomeStore } from "@/store/custome-store";
import { usePreviewOrder } from "@/store/order-store";
import { useStyleStore } from "@/store/style-store";
import {
  closestCenter,
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useEffect } from "react";
import { PreviewCustom } from "./preview/pre-c";
import { PreviewPersonal } from "./preview/pre-p";
import { PreviewEdu } from "./preview/pre_edu";
import { PreviewExp } from "./preview/pre_exp";
import { PreviewSkill } from "./preview/pre_sk";

const SortableItem = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-grab active:cursor-grabbing"
    >
      {children}
    </div>
  );
};

export const PreviewPanel = () => {
  const fontFamily = useStyleStore((s) => s.style.fontFamily);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const order = usePreviewOrder((s) => s.order);
  const setOrder = usePreviewOrder((s) => s.setOrder);
  const data = useCustomeStore((s) => s.data);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = order.indexOf(active.id);
      const newIndex = order.indexOf(over.id);
      setOrder(arrayMove(order, oldIndex, newIndex));
    }
  };

  useEffect(() => {
    const customIds = data.map((i) => i.id);

    // ========== Add new custom ids ==========
    const merged = [...order];
    customIds.forEach((id) => {
      if (!merged.includes(id)) merged.push(id);
    });

    // ========== Remove deleted custom ids ==========
    const cleaned = merged.filter((id) => {
      // system ids 永远保留
      const systemIds = ["personal", "education", "experience", "skills"];
      if (systemIds.includes(id)) return true;

      // custom id 如果不在 data 中 → 移除
      return customIds.includes(id);
    });

    if (cleaned.toString() !== order.toString()) {
      setOrder(cleaned);
    }
  }, [data.length]);

  const renderSection = (id: string) => {
    // 渲染固定 section
    switch (id) {
      case "personal":
        return <PreviewPersonal />;
      case "education":
        return <PreviewEdu />;
      case "experience":
        return <PreviewExp />;
      case "skills":
        return <PreviewSkill />;
    }

    // 上面都匹配不到 → custom section
    const custom = data.find((c) => c.id === id);
    if (custom) {
      return <PreviewCustom data={custom} />;
    }

    return null;
  };

  return (
    <div
      className="resume-preview mx-auto my-4 flex min-h-[297mm] w-[210mm] flex-col bg-white p-[20mm_18mm] font-sans text-[12pt] leading-normal text-[#111] shadow-md print:m-0 print:shadow-none"
      id="print-resume"
      style={{ fontFamily }}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={order} strategy={verticalListSortingStrategy}>
          {order.map((id) => (
            <SortableItem key={id + Date.now() * Math.random()} id={id}>
              {renderSection(id)}
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};
