import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { useCustomeStore, type data } from "@/store/custome-store";
import { useState, type ReactNode } from "react";
import { toast } from "sonner";

export const OpenCustomeItem = ({
  children,
  data,
  sectionId,
}: {
  children: ReactNode;
  data: data;
  sectionId: string;
}) => {
  const UpdateItem = useCustomeStore((s) => s.UpdateItem);
  const [draft, setdraft] = useState<data>(data);
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="col-span-5">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            Click to edit, blur to save item
          </DialogDescription>
          <DialogTitle>Custom Section</DialogTitle>
        </DialogHeader>
        <FieldSet className="min-w-full overflow-hidden">
          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              {" "}
              <Field>
                <FieldLabel htmlFor="institute">Name</FieldLabel>
                <Input
                  value={draft.name || ""}
                  id="institute"
                  autoComplete="off"
                  onChange={(e) => setdraft({ ...draft, name: e.target.value })}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="Degree">position</FieldLabel>
                <Input
                  value={draft.position || ""}
                  id="Degree"
                  autoComplete="off"
                  onChange={(e) =>
                    setdraft({ ...draft, position: e.target.value })
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="Filed of Study">location</FieldLabel>
                <Input
                  value={draft.location || ""}
                  id="Filed of Study"
                  autoComplete="off"
                  onChange={(e) =>
                    setdraft({ ...draft, location: e.target.value })
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="date">date</FieldLabel>
                <Input
                  value={draft.date || ""}
                  id="date"
                  autoComplete="off"
                  onChange={(e) => setdraft({ ...draft, date: e.target.value })}
                />
              </Field>
            </div>
            <div>
              <Field>
                <FieldLabel htmlFor="location">description</FieldLabel>
                <Input
                  value={draft.description || ""}
                  id="description"
                  autoComplete="off"
                  onChange={(e) =>
                    setdraft({ ...draft, description: e.target.value })
                  }
                />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
        <div className="flex justify-between">
          <Button
            onClick={() => {
              UpdateItem(sectionId, data.id, draft);
              setOpen(false);
              toast.success("saved");
            }}
          >
            Save{" "}
          </Button>
        </div>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
