import React from 'react';
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.css"
import img1 from "../assets/banner/pexels-photo-1549200.jpeg"
import img2 from "../assets/banner/pexels-spencer-selover-428340.jpg"
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


let img = [img1, img2];

const Home = () => {
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
                <h1 className='uppercase text-[0.9rem] font-semibold text-[#c4c4c4]'>
                  Welcome To tričko(T-Shirt)
                </h1>
                <p className='text-[1.2rem] sm:text-4xl font-bold'>
                  Exclucive Collection <br /> on sell
                </p>
                <a href='#'>
                  {" "}
                  <Button
                    sx={{
                      color: "#DBB660",
                      fontWeight: "700",
                      fontSize: "1.2rem",
                    }}>
                    <Link to="/products">see all</Link>
                  </Button>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default Home;