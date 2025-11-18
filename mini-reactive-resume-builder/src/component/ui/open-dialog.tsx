import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useResume, type resumeType } from "@/store";
import { useCountStore } from "@/store/coun-store";
import type { Skill } from "@/store/form-store";
import type React from "react";
import { useState, type ReactNode } from "react";

export const OpenDialog = ({
  children,
  Content,
  type,
}: {
  children: React.ReactNode;
  Content: React.FunctionComponent;
  type: resumeType;
}) => {
  const { data, reset: resetFom, Add } = useResume(type);
  const { d_increment, d_decrement, d_count, reset, set_dcount } =
    useCountStore();
  if (!Array.isArray(data)) return <>something went wrong</>;
  return (
    // 因为experience 和 education用了相同的模块, 所以关闭dialog时, 归零
    <Dialog onOpenChange={reset}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader className="overflow-scroll">
          <DialogTitle>{type.toUpperCase()}</DialogTitle>
          <DialogDescription className="flex justify-between">
            <span>Enter your most recent {type}</span>

            <span className="flex gap-2">
              <button
                onClick={() => {
                  if (Add) Add();
                  set_dcount(data.length);
                }}
              >
                +
              </button>
              <button onClick={resetFom}>🗑️</button>
            </span>
          </DialogDescription>

          <Content />
        </DialogHeader>
        <DialogFooter className="flex">
          <button onClick={d_decrement}>←</button>
          <button
            onClick={() => {
              if (d_count < data.length - 1) {
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

type ISKill = {
  children: ReactNode;
  data: Skill;
};
export const OpenSkillItem = ({ children, data }: ISKill) => {
  const { UpdateField } = useResume("skills");
  const [value, setvalue] = useState<Skill["data"]>(data.data);
  return (
    <Dialog>
      <DialogTrigger className="col-span-5">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{data.label}</DialogTitle>
          <DialogDescription>
            {'Enter related skills (split by ",)'}
          </DialogDescription>
          <Textarea value={value} onChange={(e) => setvalue(e.target.value)} />
        </DialogHeader>
        <DialogFooter>
          <button
            className="rounded-md bg-black p-2 text-white hover:cursor-pointer"
            onClick={() => {
              UpdateField(data.label, value);
            }}
          >
            save
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const OpenAddSkill = ({ children }: { children: ReactNode }) => {
  const { AddItem } = useResume("skills");
  const [skill, setSkill] = useState<Skill>({ label: "", data: "" });
  const handleClick = (skillData: Skill) => AddItem(skillData);

  return (
    <Dialog>
      <DialogTrigger className="w-[90%]">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New</DialogTitle>
          <DialogDescription>
            {'Enter related skills (split by ",)'}
          </DialogDescription>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <label htmlFor="label">Skill Category</label>
              <Input
                value={skill.label}
                onChange={(e) => setSkill({ ...skill, label: e.target.value })}
              />
            </div>
            <div className="grid gap-3">
              <label htmlFor="data">Skills</label>
              <Input
                value={skill.data}
                onChange={(e) => setSkill({ ...skill, data: e.target.value })}
              />
            </div>
          </div>
        </DialogHeader>
        <DialogFooter>
          <button
            className="rounded-md bg-black p-2 text-white hover:cursor-pointer"
            onClick={() => handleClick(skill)}
          >
            save
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const OpenCustomeItem = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  const { data } = useResume("custome");
  const [content, setContent] = useState(
    data.find((i) => i.title === title)?.data || [],
  );

  const handleAdd = () => {
    setContent((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        AddNew: "",
      },
    ]);
  };

  const handleDelete = (id: string) => {
    setContent(content.filter((i) => i.id !== id));
  };

  return (
    <Dialog>
      <DialogTrigger className="col-span-5">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {data.find((i) => i.title === title)?.title || (
              <Input value={"Add new"} />
            )}
          </DialogTitle>
          {/* <DialogDescription>
            {'Enter related skills (split by ",)'}
          </DialogDescription> */}
        </DialogHeader>
        <Tabs defaultValue="e">
          <TabsList>
            <TabsTrigger value="e">e</TabsTrigger>
            <TabsTrigger value="s">s</TabsTrigger>
          </TabsList>
          <TabsContent value="e">
            <Card>
              {/* <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re
              done.
            </CardDescription>
          </CardHeader> */}
              <CardContent className="grid gap-6 overflow-scroll">
                {content.map((i) => (
                  <div className="grid gap-3" key={i.id}>
                    <label>
                      <Input defaultValue={"Name"} className="w-fit" />
                    </label>
                    <div className="flex gap-1">
                      {" "}
                      <Input id="location" defaultValue="" />
                      <Button onClick={() => handleDelete(i.id)}>delete</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button>Save </Button>
                <Button onClick={handleAdd}>add more</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="s">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you&apos;ll be logged
                  out.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <label htmlFor="tabs-demo-current">Current password</label>
                  <Input id="tabs-demo-current" type="password" />
                </div>
                <div className="grid gap-3">
                  <label htmlFor="tabs-demo-new">New password</label>
                  <Input id="tabs-demo-new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
