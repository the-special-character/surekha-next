"use client";

import CustomForm from "@/components/form/customForm";
import FormInput from "@/components/form/input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

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
  {
    field: "select",
    name: "contry",
    label: "Contry",
    type: "contry",
    placeholder: "Please Select Country",
    options: [
      {
        value: "india",
        text: "India",
      },
      {
        value: "us",
        text: "US",
      },
    ],
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "password is required",
      },
    },
    className: "col-span-full",
  },
];

const Login = () => {
  const login = (values) => {
    console.log(values);
  };

  return (
    <div>
      <CustomForm onSubmit={login} fields={fields} />
    </div>
  );
};

export default Login;
