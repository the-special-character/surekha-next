import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = {};

const FormSelect = ({
  label,
  desc,
  onChange,
  value,
  placeholder,
  options,
  className,
  ...props
}: Props) => {
  return (
    <FormItem className={className}>
      <FormLabel>{label}</FormLabel>
      <Select onValueChange={onChange} defaultValue={value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options.map((x) => (
            <SelectItem key={x.value} value={x.value}>
              {x.text}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {desc && <FormDescription>{desc}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};

export default FormSelect;
