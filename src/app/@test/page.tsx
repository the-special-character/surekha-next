"use client";

import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <button>Click me</button>
    </div>
  );
};

export default Page;
