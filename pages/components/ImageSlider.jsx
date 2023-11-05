import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const slider1 =  "/images/h1.avif";
const slider2 = "/images/h2.avif";
const slider3 = "/images/h3.avif";
import Image from 'next/image';


function ImageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Slider {...settings} className="">
      <div className="cursor-pointer">
        <Image width={6000} height={6000} src={slider1} alt="slider" className="border-2 border-red-900 w-full h-96 object-cover shadow-md hover:border-2 hover:border-opacity-80" />
      </div>
      <div className="cursor-pointer">
        <Image width={7000} height={8000} src={slider2} alt="slider" className="border-2 border-red-900 w-full h-96 object-cover shadow-md hover:border-2 hover:border-opacity-80" />
      </div>
      <div className="cursor-pointer">
        <Image width={7000} height={8000} src={slider3} alt="slider" className="border-2 border-red-900 w-full h-96 object-cover shadow-md hover:border-2 hover:border-opacity-80" />
      </div>
     
    </Slider>
  );
}

export default ImageSlider;
