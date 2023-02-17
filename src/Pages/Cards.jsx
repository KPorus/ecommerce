import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init({ duration: 1500, once: false });
const Cards = ({ items }) => {
  const { name, image, price, _id, category, publishedAt } = items;
  console.log(items);
  let click = () => {
    let i = 0;
    i++;
    console.log(_id);
  };

  return (
    <Card
      sx={{ maxWidth: 292 }}
      onClick={click}
      data-aos="zoom-in"
      data-aos-easing='ease-out-cubic'>
      <CardMedia
        sx={{ height: "74%", objectFit: "cover" }}
        component='img'
        alt='green iguana'
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

export default Cards;
