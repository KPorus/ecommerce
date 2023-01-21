import React from "react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.css";
import img1 from "../assets/banner/pexels-photo-1549200.jpeg";
import img2 from "../assets/banner/pexels-spencer-selover-428340.jpg";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeBestSeller from "./HomeBestSeller";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Component/Loading";
import HomeTop from "./HomeTop";
import HomeNew from "./HomeNew";

let img = [img1, img2];

const Home = () => {
  const { isLoading, data: product = [] } = useQuery({
    queryKey: ["Product"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/homebestSelling`);
      const data = await res.json();
      return data;
    },
  });

  const { data: TopProduct = [] } = useQuery({
    queryKey: ["TopProduct"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/hometopProduct`);
      const data = await res.json();
      return data;
    },
  });

  const { data: NewProduct = [] } = useQuery({
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
    <div id='home'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'>
        {img.map((img) => (
          <SwiperSlide>
            <div className='img'>
              <img src={img} alt='image'></img>
            </div>
            <div className='absolute z-1 text-white sm:top-52 '>
              <h1 className='uppercase text-[0.9rem] md:text-[1rem] font-semibold text-[#c4c4c4]'>
                <span className='underLine'>Welcome To tričko(T-Shirt)</span>
              </h1>
              <p className='text-[1.2rem] sm:text-4xl font-bold'>
                <span className='underLine'>Exclucive Collection</span> <br />{" "}
                <span className='underLine'>on sell</span>
              </p>
              <a href='#'>
                {" "}
                <Button
                  sx={{
                    color: "#DBB660",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                  }}>
                  <Link to='/products'>see all</Link>
                </Button>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* new arrival product */}
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
          <HomeNew key={items._id} items={items}></HomeNew>
        ))}
      </div>
      <div className='mt-10 flex justify-center'>
        <Button variant='contained'>
          <Link to='/newArivals'>View All</Link>
        </Button>
      </div>

      {/* best selling product */}
      <div className='flex sm:flex-row flex-col md:gap-28 mx-auto mt-14 container items-center'>
        <Typography textAlign='left' fontWeight='800' fontSize='2rem' m={2}>
          Best Selling Products
          <hr className='h-1 bg-gray-500' />
        </Typography>
        <Typography
          px={2}
          sx={{
            width: { md: "50%", sm: "80%", xs: "100%" },
            marginX: "auto",
          }}>
          <blockquote>
            "What you wear is how you present yourself to the world, especially
            today, when human contacts are so quick. Fashion is instant
            language."
          </blockquote>
        </Typography>
      </div>
      <div className='container mx-auto grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 justify-items-center gap-[0.5rem]  mt-10'>
        {product.map((items) => (
          <HomeBestSeller key={items._id} items={items}></HomeBestSeller>
        ))}
      </div>
      <div className='mt-10 flex justify-center'>
        <Button variant='contained'>View All</Button>
      </div>

      {/* top rated product */}
      <div className='flex sm:flex-row flex-col-reverse md:gap-28 mx-auto mt-14 container items-center'>
        <Typography
          px={2}
          sx={{
            width: { md: "50%", sm: "80%", xs: "100%" },
            marginX: "auto",
          }}>
          <blockquote>
            "Being well-dressed hasn't much to do with having good clothes. It's
            a question of good balance and good common sense."
          </blockquote>
        </Typography>
        <Typography textAlign='left' fontWeight='800' fontSize='2rem' p={2}>
          Top Rated Products
          <hr className='h-1 bg-gray-500' />
        </Typography>
      </div>
      <div className='container mx-auto grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 justify-items-center gap-[0.5rem] mt-10'>
        {TopProduct.map((items) => (
          <HomeTop key={items._id} items={items}></HomeTop>
        ))}
      </div>
      <div className='mt-10 mb-20 flex justify-center'>
        <Button variant='contained'>View All</Button>
      </div>
    </div>
  );
};

export default Home;
