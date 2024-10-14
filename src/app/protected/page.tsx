import React from "react";
import { auth } from "@/auth";

type Props = {};

const Protected = async (props: Props) => {
  const session = await auth();

  console.log("Protected session", session);

  if (!session) return <div>Not authenticated</div>;

  return <div>Protected</div>;
};

export default Protected;
