import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {};

const Step2 = ({ setStep }: Props) => {
  const methods = useFormContext();

  console.log(methods.getValues());

  return (
    <div>
      <button onClick={() => setStep((x) => x - 1)}>Prev</button>
    </div>
  );
};

export default Step2;
