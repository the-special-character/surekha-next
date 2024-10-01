import Loading from "@/components/custom/loading";
import ProductsList from "@/components/productList";
import { Suspense } from "react";

const Home = async () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ProductsList />
      </Suspense>
    </>
  );
};

export default Home;
