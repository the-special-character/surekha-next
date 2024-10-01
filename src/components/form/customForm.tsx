import React, { createElement } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./input";
import { Button } from "../ui/button";
import { Form, FormField } from "../ui/form";
import FormSelect from "./select";

type Props = {};

export const getInputElement = (input) => {
  switch (input) {
    case "input":
      return FormInput;
      break;

    case "select":
      return FormSelect;
      break;

    default:
      return FormInput;
  }
};

const CustomForm = ({ onSubmit, fields }: Props) => {
  const form = useForm({
    mode: "all",
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-2"
      >
        {fields.map(({ field: input, name, rules, ...x }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) =>
              createElement(getInputElement(input), {
                ...x,
                ...field,
              })
            }
            rules={rules}
          />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CustomForm;
