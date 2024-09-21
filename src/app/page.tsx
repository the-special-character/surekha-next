import axiosInstance from "@/lib/axiosInstance";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const products = await axiosInstance.get("products");

  if (products.status >= 400) {
    throw new Error("unable to fetch products");
  }

  return (
    <div className="container mx-auto my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
      {products.data.map((x) => (
        <Link href={`product/${x.id}`} key={x.id}>
          <Card>
            <CardHeader className="relative object-fill object-center aspect-square">
              <Image src={x.image} alt={x.title} fill className="p-4" />
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <CardTitle className="line-clamp-1">{x.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {x.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Add To Cart</Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Home;
