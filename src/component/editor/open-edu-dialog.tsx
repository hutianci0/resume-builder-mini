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

import { useEducationStore, type Education } from "@/store/form-store";
import { useState, type ReactNode } from "react";
import { toast } from "sonner";

type IEdu = {
  children: ReactNode;
  data: Education;
};
export const OpenEduItem = ({ children, data }: IEdu) => {
  const [isopen, setopen] = useState(false);
  const [draft, setdraft] = useState<Education>(data);
  const setField = useEducationStore((s) => s.setField);
  return (
    <Dialog open={isopen} onOpenChange={setopen}>
      <DialogTrigger className="col-span-5">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Education</DialogTitle>
          <DialogDescription>
            Click save if everything is done
          </DialogDescription>
          <FieldSet className="min-w-full overflow-hidden">
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                {" "}
                <Field>
                  <FieldLabel htmlFor="institute">Institute</FieldLabel>
                  <Input
                    value={draft.school || ""}
                    id="institute"
                    autoComplete="off"
                    onChange={(e) =>
                      setdraft({ ...draft, school: e.target.value })
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="Degree">Degree</FieldLabel>
                  <Input
                    value={draft.degree || ""}
                    id="Degree"
                    autoComplete="off"
                    onChange={(e) =>
                      setdraft({ ...draft, degree: e.target.value })
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="Filed of Study">
                    Filed of Study
                  </FieldLabel>
                  <Input
                    value={draft.field || ""}
                    id="Filed of Study"
                    autoComplete="off"
                    onChange={(e) =>
                      setdraft({ ...draft, field: e.target.value })
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
