import React, { createElement } from "react";
import { useFormContext } from "react-hook-form";
import { Form, FormField } from "../ui/form";
import { getInputElement } from "../form/customForm";
import { Button } from "../ui/button";

type Props = {};

const fields = [
  {
    field: "input",
    name: "email",
    label: "Email Address",
    type: "email",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "email is required",
      },
    },
  },
  {
    field: "input",
    name: "password",
    label: "Password",
    type: "password",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "password is required",
      },
    },
  },
];

const Step1 = ({ setStep }: Props) => {
  const methods = useFormContext();

  return (
    <Form {...methods}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const isStepValid = await methods.trigger();
          if (isStepValid) setStep((x) => x + 1);
        }}
      >
        {fields.map(({ field: input, name, rules, ...x }) => (
          <FormField
            key={name}
            control={methods.control}
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

export default Step1;
