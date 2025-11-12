import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useResume } from "@/store";
import { useCountStore } from "@/store/coun-store";

export const Educontent = () => {
  const { education, updateEducation, deleteEducation } =
    useResume("education");
  const { d_count, d_decrement } = useCountStore();

  return (
    <div
      className="flex transition-all duration-500"
      style={{ transform: `translateX(-${d_count * 100}%)` }}
    >
      {education.map((item) => (
        <FieldSet key={item.id} className="min-w-full overflow-hidden">
          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              {" "}
              <Field>
                <FieldLabel htmlFor="institute">Institute</FieldLabel>
                <Input
                  value={item.school}
                  id="institute"
                  autoComplete="off"
                  onChange={(e) =>
                    updateEducation(item.id, { school: e.target.value })
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="Degree">Degree</FieldLabel>
                <Input
                  value={item.degree}
                  id="Degree"
                  autoComplete="off"
                  onChange={(e) =>
                    updateEducation(item.id, { degree: e.target.value })
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="Filed of Study">Filed of Study</FieldLabel>
                <Input
                  value={item.field}
                  id="Filed of Study"
                  autoComplete="off"
                  onChange={(e) =>
                    updateEducation(item.id, { field: e.target.value })
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="date">date</FieldLabel>
                <Input
                  value={item.date}
                  id="date"
                  autoComplete="off"
                  onChange={(e) =>
                    updateEducation(item.id, { date: e.target.value })
                  }
                />
              </Field>
            </div>
            <div>
              <Field>
                <FieldLabel htmlFor="location">location</FieldLabel>
                <Input
                  value={item.location}
                  id="location"
                  autoComplete="off"
                  onChange={(e) =>
                    updateEducation(item.id, { location: e.target.value })
                  }
                />
              </Field>
            </div>
            <button
              className="rounded-sm bg-black p-2 text-white"
              onClick={() => {
                deleteEducation(item.id);
                d_decrement();
              }}
            >
              delete
            </button>
          </FieldGroup>
        </FieldSet>
      ))}
    </div>
  );
};

export const Expcontent = () => {
  const { education, updateEducation, deleteEducation } =
    useResume("education");
  const { d_count, d_decrement } = useCountStore();

  return (
    <div
      className="flex transition-all duration-500"
      style={{ transform: `translateX(-${d_count * 100}%)` }}
    >
      {education.map((item) => (
        <FieldSet key={item.id} className="min-w-full overflow-hidden">
          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              {" "}
              <Field>
                <FieldLabel htmlFor="institute">Institute</FieldLabel>
                <Input
                  value={item.school}
                  id="institute"
                  autoComplete="off"
                  onChange={(e) =>
                    updateEducation(item.id, { school: e.target.value })
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="Degree">Degree</FieldLabel>
                <Input
                  value={item.degree}
                  id="Degree"
                  autoComplete="off"
                  onChange={(e) =>
                    updateEducation(item.id, { degree: e.target.value })
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="Filed of Study">Filed of Study</FieldLabel>
                <Input
                  value={item.field}
                  id="Filed of Study"
                  autoComplete="off"
                  onChange={(e) =>
                    updateEducation(item.id, { field: e.target.value })
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="date">date</FieldLabel>
                <Input
                  value={item.date}
                  id="date"
                  autoComplete="off"
                  onChange={(e) =>
                    updateEducation(item.id, { date: e.target.value })
                  }
                />
              </Field>
            </div>
            <div>
              <Field>
                <FieldLabel htmlFor="location">location</FieldLabel>
                <Input
                  value={item.location}
                  id="location"
                  autoComplete="off"
                  onChange={(e) =>
                    updateEducation(item.id, { location: e.target.value })
                  }
                />
              </Field>
            </div>
            <button
              className="rounded-sm bg-black p-2 text-white"
              onClick={() => {
                deleteEducation(item.id);
                d_decrement();
              }}
            >
              delete
            </button>
          </FieldGroup>
        </FieldSet>
      ))}
    </div>
  );
};
