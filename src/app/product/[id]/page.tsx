import axiosInstance from "@/lib/axiosInstance";
import React from "react";

const page = async ({ params }) => {
  const products = await axiosInstance.get(`products/${params.id}`);

  if (products.status >= 400) {
    throw new Error("unable to fetch products");
  }

  return (
    <div>
      <h1>{products.data.title}</h1>
    </div>
  );
};

export default page;
