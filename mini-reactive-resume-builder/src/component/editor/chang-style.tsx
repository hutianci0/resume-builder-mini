import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useStyleStore, type style } from "@/store/style-store";
import { useState, type ReactNode } from "react";

const Item = ({ children, label }: { children: ReactNode; label: string }) => {
  return (
    <div className="grid gap-3">
      <label className="font-semibold">{label}:</label>
      <div className="flex items-center gap-1">{children}</div>
    </div>
  );
};
export const StyleForm = () => {
  const defaultForm = useStyleStore((s) => s.style);
  const updateForm = useStyleStore((s) => s.updateStyle);
  const [form, setForm] = useState<style>(defaultForm);
  const handleSave = () => updateForm(form);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Edit Format</AccordionTrigger>
        <AccordionContent>
          <Card>
            <CardHeader>
              <CardTitle>Edit Form : click save to change </CardTitle>
            </CardHeader>
            <CardContent>
              {" "}
              <form className="grid grid-cols-2 gap-6">
                <Item label="Font Type">
                  {" "}
                  <select
                    value={form.fontFamily}
                    onChange={(e) =>
                      setForm({ ...form, fontFamily: e.target.value })
                    }
                    name="fontFamily"
                  >
                    <option value="Arial, sans-serif">Arial</option>
                    <option value="'Times New Roman', serif">
                      Times New Roman
                    </option>
                    <option value="'Roboto', sans-serif">Roboto</option>
                  </select>
                </Item>

                <Item label="Font-size">
                  {" "}
                  <Input
                    name="fontSize"
                    min={0}
                    type="number"
                    value={form.fontSize}
                    onChange={(e) =>
                      setForm({ ...form, fontSize: e.target.value })
                    }
                  />
                  <span>pt</span>
                </Item>

                <Item label="Section Gap">
                  {" "}
                  <Input
                    name="sectionGap"
                    type="number"
                    min={0}
                    value={form.sectionGap}
                    onChange={(e) =>
                      setForm({ ...form, sectionGap: e.target.value })
                    }
                  />{" "}
                  <span>mm</span>
                </Item>

                <Item label="Item Gap">
                  {" "}
                  <Input
                    min={0}
                    name="itemGap"
                    type="number"
                    value={form.itemGap}
                    onChange={(e) =>
                      setForm({ ...form, itemGap: e.target.value })
                    }
                  />{" "}
                  <span>mm</span>
                </Item>

                <Button type="button" onClick={handleSave}>
                  save
                </Button>
              </form>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
