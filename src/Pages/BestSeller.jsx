import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Component/Loading";
import "./Home.css";
import Cards from "./Cards";

const BestSeller = () => {
  const {refetch, isLoading, data: BestProduct = [] } = useQuery({
    queryKey: ["bestProduct"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bestSelling`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <Loading />;
  }

  refetch()
  console.log(BestProduct);
  return (
    <div>
      <div className='new w-[100%] h-1/2 bg-zinc-900 text-white font-bold text-center py-20 text-xl'>
        <span className='underLine'>Best Selling Products</span>
      </div>
      <div className='container mx-auto grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 justify-items-center gap-[1rem] mt-10'>
        {BestProduct.map((items) => (
          <Cards key={items._id} items={items}></Cards>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
