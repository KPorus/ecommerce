import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Component/Loading";
import "./Home.css";
import Cards from "./Cards";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1500, once: false });

const TopRate = () => {
  const { isLoading, data: TopProduct = [] } = useQuery({
    queryKey: ["TopProduct"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/topProduct`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <Loading />;
  }

  console.log(TopProduct);
  return (
    <div>
      <div
        className='new w-[100%] h-1/2 bg-zinc-900 text-white font-bold text-center py-20 text-xl'
        data-aos='flip-left'>
        <span className='underLine'>Top Rated Products</span>
      </div>
      <div className='container mx-auto grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 justify-items-center gap-[1rem] mt-10'>
        {TopProduct.map((items) => (
          <Cards key={items._id} items={items}></Cards>
        ))}
      </div>
    </div>
  );
};

export default TopRate;
