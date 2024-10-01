"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const Step1 = dynamic(() => import("../../../components/stepper/step1"));
const Step2 = dynamic(() => import("../../../components/stepper/step2"));
const Step3 = dynamic(() => import("../../../components/stepper/step3"));

const Register = () => {
  const form = useForm({
    mode: "all",
  });
  const [step, setStep] = useState(1);

  return (
    <FormProvider {...form}>
      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <Step2 setStep={setStep} />}
      {step === 3 && <Step3 setStep={setStep} />}
    </FormProvider>
  );
};

export default Register;
