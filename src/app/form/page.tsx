"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFieldArray, useForm } from "react-hook-form";

const Form = (props: Props) => {
  const form = useForm({
    mode: "all",
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: form.control, // control props comes from useForm (optional: if you are using FormProvider)
      name: "friends", // unique name for your Field Array
    }
  );

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <div>
            <Input
              key={field.id}
              {...form.register(`friends.${index}.value`)}
            />
          </div>
          <div>
            <Input key={field.id} {...form.register(`friends.${index}.text`)} />
          </div>
        </div>
      ))}
      <button onClick={() => append({ value: "", text: "" })}>
        Add Friend
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
