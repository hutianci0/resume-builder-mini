import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useResume } from "@/store";
import { useCountStore } from "@/store/coun-store";
import type { Education, Experience } from "@/store/form-store";
import { useEffect, useState } from "react";

export const Educontent = () => {
  const { setField, deleteForm, data } = useResume("education");
  const { d_count, d_decrement } = useCountStore();
  const [draft, setdraft] = useState<Education[]>(data);

  useEffect(() => {
    setdraft(data);
  }, [data]);

  return (
    <div
      className="flex transition-all duration-500"
      style={{ transform: `translateX(-${d_count * 100}%)` }}
    >
      {draft.map((item) => (
        <FieldSet key={item.id} className="min-w-full overflow-hidden">
          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              {" "}
              <Field>
                <FieldLabel htmlFor="institute">Institute</FieldLabel>
                <Input
                  value={item.school || ""}
                  id="institute"
                  autoComplete="off"
                  onChange={(e) =>
                    setdraft((prev) =>
                      prev.map((ele) =>
                        ele.id === item.id
                          ? { ...ele, school: e.target.value }
                          : ele,
                      ),
                    )
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="Degree">Degree</FieldLabel>
                <Input
                  value={item.degree || ""}
                  id="Degree"
                  autoComplete="off"
                  onChange={(e) =>
                    setdraft((prev) =>
                      prev.map((ele) =>
                        ele.id === item.id
                          ? { ...ele, degree: e.target.value }
                          : ele,
                      ),
                    )
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="Filed of Study">Filed of Study</FieldLabel>
                <Input
                  value={item.field || ""}
                  id="Filed of Study"
                  autoComplete="off"
                  onChange={(e) =>
                    setdraft((prev) =>
                      prev.map((ele) =>
                        ele.id === item.id
                          ? { ...ele, field: e.target.value }
                          : ele,
                      ),
                    )
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="date">date</FieldLabel>
                <Input
                  value={item.date || ""}
                  id="date"
                  autoComplete="off"
                  onChange={(e) =>
                    setdraft((prev) =>
                      prev.map((ele) =>
                        ele.id === item.id
                          ? { ...ele, date: e.target.value }
                          : ele,
                      ),
                    )
                  }
                />
              </Field>
            </div>
            <div>
              <Field>
                <FieldLabel htmlFor="location">location</FieldLabel>
                <Input
                  value={item.location || ""}
                  id="location"
                  autoComplete="off"
                  onChange={(e) =>
                    setdraft((prev) =>
                      prev.map((ele) =>
                        ele.id === item.id
                          ? { ...ele, location: e.target.value }
                          : ele,
                      ),
                    )
                  }
                />
              </Field>
            </div>
            <div className="flex justify-between">
              <button onClick={() => setField(draft)}>save</button>
              <button
                className="rounded-sm bg-black p-2 text-white"
                onClick={() => {
                  deleteForm(item.id);
                  d_decrement();
                }}
              >
                delete
              </button>
            </div>
          </FieldGroup>
        </FieldSet>
      ))}
    </div>
  );
};

export const Expcontent = () => {
  const { data, setField, deleteForm } = useResume("experience");
  const { d_count, d_decrement } = useCountStore();
  const [draft, setdraft] = useState<Experience[]>(data);

  useEffect(() => {
    setdraft(data);
  }, [data]);

  return (
    <div
      className="flex transition-all duration-500"
      style={{ transform: `translateX(-${d_count * 100}%)` }}
    >
      {draft.map((item) => (
        <div key={item.id} className="min-w-full overflow-hidden">
          {" "}
          <FieldGroup className="mb-2">
            <FieldSet>
              {" "}
              <div className="grid gap-1">
                {" "}
                <Field>
                  <FieldLabel htmlFor="institute">Company</FieldLabel>
                  <Input
                    value={item.company}
                    id="Company"
                    autoComplete="off"
                    onChange={(e) =>
                      setdraft((prev) =>
                        prev.map((ele) =>
                          ele.id === item.id
                            ? { ...ele, company: e.target.value }
                            : ele,
                        ),
                      )
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="institute">location</FieldLabel>
                  <Input
                    value={item.location}
                    id="location"
                    autoComplete="off"
                    onChange={(e) =>
                      setdraft((prev) =>
                        prev.map((ele) =>
                          ele.id === item.id
                            ? { ...ele, location: e.target.value }
                            : ele,
                        ),
                      )
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="Degree">date</FieldLabel>
                  <Input
                    value={item.date}
                    id="date"
                    autoComplete="off"
                    onChange={(e) =>
                      setdraft((prev) =>
                        prev.map((ele) =>
                          ele.id === item.id
                            ? { ...ele, date: e.target.value }
                            : ele,
                        ),
                      )
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="Filed of Study">position</FieldLabel>
                  <Input
                    value={item.position}
                    id="position"
                    autoComplete="off"
                    onChange={(e) =>
                      setdraft((prev) =>
                        prev.map((ele) =>
                          ele.id === item.id
                            ? { ...ele, position: e.target.value }
                            : ele,
                        ),
                      )
                    }
                  />
                </Field>
              </div>
            </FieldSet>
          </FieldGroup>
          <FieldGroup>
            {" "}
            <Field>
              <FieldLabel htmlFor="date">Description</FieldLabel>
              <Textarea
                value={item.description}
                id="description"
                autoComplete="off"
                onChange={(e) =>
                  setdraft((prev) =>
                    prev.map((ele) =>
                      ele.id === item.id
                        ? { ...ele, description: e.target.value }
                        : ele,
                    ),
                  )
                }
              />
              <FieldDescription>Use ", " to seperate lines</FieldDescription>
            </Field>
          </FieldGroup>
          <FieldGroup>
            <FieldLabel></FieldLabel>
            <Field orientation={"horizontal"} className="justify-between">
              <button
                className="rounded-sm bg-black p-2 text-white"
                onClick={() => {
                  setField(draft);
                }}
              >
                save
              </button>
              <button
                className="rounded-sm bg-black p-2 text-white"
                onClick={() => {
                  deleteForm(item.id);
                  d_decrement();
                }}
              >
                delete
              </button>
            </Field>
          </FieldGroup>
        </div>
      ))}
    </div>
  );
};
