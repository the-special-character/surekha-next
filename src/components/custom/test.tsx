"use client";

import { LocaleContext } from "@/context/localeContext";
import React, { memo } from "react";

const Test = () => {
  console.log("test");

  return (
    <div>
      <LocaleContext.Consumer>
        {({ locale }) => {
          console.log("hello from consumer");

          return <p>{locale}</p>;
        }}
      </LocaleContext.Consumer>
      <p>hello world</p>
    </div>
  );
};

export default memo(Test);
