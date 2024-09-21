import axiosInstance from "@/lib/axiosInstance";
import React from "react";
import { Modal } from "./modal";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { updateUser } from "../../../actions";
import { Input } from "@/components/ui/input";

const page = async ({ params }) => {
  const product = await axiosInstance.get(`products/${params.id}`);
  const updateUserWithId = updateUser.bind(null, params.id);

  if (product.status >= 400) {
    throw new Error("unable to fetch products");
  }

  return (
    <Modal>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="relative aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5 object-cover object-center">
          <Image alt={product.data.title} src={product.data.image} fill />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
            {product.data.title}
          </h2>

          <section aria-labelledby="information-heading" className="mt-2">
            <h3 id="information-heading" className="sr-only">
              Product information
            </h3>

            <p className="text-2xl text-gray-900">{product.data.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h4 className="sr-only">Reviews</h4>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={cn(
                        product.data.rating.rate > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">
                  {product.data.rating.rate} out of 5 stars
                </p>
                <a
                  href="#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {product.data.rating.count} reviews
                </a>
              </div>
            </div>
          </section>

          <section aria-labelledby="options-heading" className="mt-10">
            <h3 id="options-heading" className="sr-only">
              Product options
            </h3>

            <form action={updateUserWithId}>
              <div>
                <Input name="email" id="email" type="email" />
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export default page;
