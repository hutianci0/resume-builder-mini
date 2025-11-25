import { usePersonalStore } from "@/store/form-store";
import { Form } from "../ui/form";
import { Header } from "../ui/header";
import { Input } from "../ui/input";

interface BasicInfo {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const BasicForm = () => {
  const data = usePersonalStore((s) => s.data);
  const setField = usePersonalStore((s) => s.setField);
  const basicInfo: BasicInfo[] = [
    {
      label: "Full Name:",
      value: data.name,
      onChange: (e) => {
        setField({ name: e.target.value });
      },
    },
    {
      label: "HeadLine:",
      value: data.headline,
      onChange(e) {
        setField({ headline: e.target.value });
      },
    },
    {
      label: "Email:",
      value: data.email,
      onChange(e) {
        setField({ email: e.target.value });
      },
    },
    {
      label: "Phone:",
      value: data.phone,
      onChange(e) {
        setField({ phone: e.target.value });
      },
    },
    {
      label: "Location:",
      value: data.location,
      onChange(e) {
        setField({ location: e.target.value });
      },
    },
    {
      label: "Website:",
      value: data.website,
      onChange(e) {
        setField({ website: e.target.value });
      },
    },
  ];

  return (
    <Form type="personal">
      <Header type="personal" />
      {basicInfo.map((item) => (
        <Input
          value={item.value}
          label={item.label}
          className="pl-1"
          key={item.label}
          onChange={item.onChange}
        />
      ))}
    </Form>
  );
};
