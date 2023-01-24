import {  Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Component/Loading';
import Cards from './Cards';

const Products = () => {
     const { isLoading, data: product = [] } = useQuery({
       queryKey: ["Product"],
       queryFn: async () => {
         const res = await fetch(`http://localhost:5000/products`);
         const data = await res.json();
         return data;
       },
     });
     if (isLoading) {
       <Loading />;
     }
    return (
      <div className='container mx-auto flex sm:flex-row flex-col'>
        <div className='sm:w-1/5'>
          <Typography variant='h4' p={2} fontWeight={500}>
            Catagory
          </Typography>
          <span className='flex flex-col pl-4'>
            <span>
              <input type='radio' value='Men' id='men' name='men'></input>
              <label htmlFor='men'> Men</label>
            </span>
            <span>
              <input type='radio' value='Women' id='women' name='women'></input>
              <label htmlFor='women'> Women</label>
            </span>
            <span>
              <input
                type='radio'
                value='BestSeller'
                id='best'
                name='best'></input>
              <label htmlFor='best'> best Selling</label>
            </span>
            <span>
              <input
                type='radio'
                value='TopRate'
                id='top'
                name='top'></input>
              <label htmlFor='top'> Top Rated</label>
            </span>
            <span>
              <input
                type='radio'
                value='Arrivalls'
                id=''
                name=''></input>
              <label htmlFor=''>  Arrivals</label>
            </span>
          </span>
          <div className='filterItem'>
            <Typography variant='h4' p={2} fontWeight={500}>
              Fillter By Price
            </Typography>
            <div className='pl-4'>
              <span>0</span>
              <input type='range' min={0} max={500} />
              <span>$ 50</span>
            </div>
          </div>
        </div>
        <div className='w-4/5'>
          <Typography variant='h3' p={2} fontWeight={700}>
            All Product
          </Typography>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center'>
           {product.map((items) => (
            <Cards key={items._id} items={items}></Cards>
          ))}
          </div>
        </div>
      </div>
    );
};

export default Products;