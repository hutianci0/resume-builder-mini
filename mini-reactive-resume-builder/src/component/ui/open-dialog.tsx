import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useResume } from "@/store";
import { useCountStore } from "@/store/coun-store";
import type React from "react";

export const OpenDialog = ({
  children,
  Content,
}: {
  children: React.ReactNode;
  Content: React.FunctionComponent;
}) => {
  const { addEducation, education, reset: resetEdu } = useResume("education");
  const { d_increment, d_decrement, d_count, reset, set_dcount } =
    useCountStore();
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader className="overflow-scroll">
          <DialogTitle>Education</DialogTitle>
          <DialogDescription className="flex justify-between">
            <span>Enter your most recent education</span>

            <span className="flex gap-2">
              <button
                onClick={() => {
                  addEducation();
                  set_dcount(education.length);
                }}
              >
                +
              </button>
              <button onClick={resetEdu}>🗑️</button>
            </span>
          </DialogDescription>

          <Content />
        </DialogHeader>
        <DialogFooter className="flex">
          <button onClick={d_decrement}>←</button>
          <button
            onClick={() => {
              if (d_count < education.length - 1) {
                d_increment();
              } else {
                reset();
              }
            }}
          >
            →
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
