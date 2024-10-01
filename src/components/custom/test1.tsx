"use client";
import { useLocale } from "@/context/localeContext";
import { memo } from "react";

const Test1 = () => {
  console.log("test1");

  const { toggleLocale } = useLocale();

  return <button onClick={toggleLocale}>Change Locale</button>;
};

export default memo(Test1);
