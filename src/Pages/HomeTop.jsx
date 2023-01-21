import React from 'react';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const HomeTop = ({ items}) => {
  const { name, image, price, _id, category, publishedAt } = items;
  console.log(items);
  let click = () => {
    let i = 0;
    i++;
    console.log(i);
  };

  return (
    <Card sx={{ maxWidth: 292 }} onClick={click}>
      <CardMedia
        sx={{ objectFit: "cover" }}
        component='img'
        alt='green iguana'
        height='140'
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>
          {name}
        </Typography>
        <Typography variant='h6' color='text.secondary'>
          Price: ${price}
        </Typography>
        <Typography variant='h6' color='text.secondary'>
          Catagory: {category}
        </Typography>
        <Typography variant='h6' color='text.secondary'>
          Date: {publishedAt}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeTop;