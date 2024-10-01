import React from "react";
import { Label } from "../ui/label";
import { Input, InputProps } from "../ui/input";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";

type Props = {
  error?: string;
  label: string;
};

const FormInput = ({ label, desc, ...props }: Props) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input {...props} />
      </FormControl>
      {desc && <FormDescription>{desc}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};

export default FormInput;
