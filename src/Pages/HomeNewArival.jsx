import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Component/Loading';
import Cards from './Cards';


const HomeNewArival = () => {
    const { isLoading,data: NewProduct = [] } = useQuery({
      queryKey: ["NewProduct"],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/homeNewProducts`);
        const data = await res.json();
        return data;
      },
    });
      if (isLoading) {
        <Loading />;
      }
    return (
      <div>
        <div className='flex sm:flex-row flex-col-reverse md:gap-28 mx-auto mt-14 container items-center'>
          <Typography
            px={2}
            sx={{
              width: { md: "50%", sm: "80%", xs: "100%" },
              marginX: "auto",
            }}>
            <blockquote>
              ""Dress shabbily and they remember the dress; dress impeccably and
              they notice the woman.""
            </blockquote>
          </Typography>
          <Typography textAlign='left' fontWeight='800' fontSize='2rem' m={2}>
            New Arrivals Products
            <hr className='h-1 bg-gray-500' />
          </Typography>
        </div>
        <div className='container mx-auto grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 justify-items-center gap-[0.5rem] mt-10'>
          {NewProduct.map((items) => (
            <Cards key={items._id} items={items}></Cards>
          ))}
        </div>
      </div>
    );
};

export default HomeNewArival;