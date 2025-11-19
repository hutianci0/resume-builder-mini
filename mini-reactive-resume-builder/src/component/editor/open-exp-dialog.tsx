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
import { useResume } from "@/store";
import type { Experience } from "@/store/form-store";
import { type ReactNode, useState } from "react";
import { toast } from "sonner";

type IExp = {
  children: ReactNode;
  data: Experience;
};
export const OpenExpItem = ({ children, data }: IExp) => {
  const [isopen, setopen] = useState(false);
  const [draft, setdraft] = useState<Experience>(data);
  const { setField } = useResume("experience");
  return (
    <Dialog open={isopen} onOpenChange={setopen}>
      <DialogTrigger className="col-span-5">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Professional Experience</DialogTitle>
          <DialogDescription>
            Click save if everything is done
          </DialogDescription>
          <FieldSet className="min-w-full overflow-hidden">
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                {" "}
                <Field>
                  <FieldLabel htmlFor="institute">Company</FieldLabel>
                  <Input
                    value={draft.company || ""}
                    id="company"
                    autoComplete="off"
                    onChange={(e) =>
                      setdraft({ ...draft, company: e.target.value })
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="position">position</FieldLabel>
                  <Input
                    value={draft.position || ""}
                    id="position"
                    autoComplete="off"
                    onChange={(e) =>
                      setdraft({ ...draft, position: e.target.value })
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="location">location</FieldLabel>
                  <Input
                    value={draft.location || ""}
                    id="location"
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
                    onChange={(e) =>
                      setdraft({ ...draft, date: e.target.value })
                    }
                  />
                </Field>
              </div>
              <div>
                <Field>
                  <FieldLabel htmlFor="description">description</FieldLabel>
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
        </DialogHeader>
        <DialogFooter>
          <button
            className="rounded-md bg-black p-2 text-white hover:cursor-pointer"
            onClick={() => {
              setopen(false);
              setField(draft);
              toast.success("successfully saved");
            }}
          >
            save
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
