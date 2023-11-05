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
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Slider {...settings} className="">
      <div className="cursor-pointer">
        <Image width={700} height={800} src={slider1} alt="slider" className="border-2 border-gray-900 w-full h-96 object-cover shadow-md hover:border-2 hover:border-opacity-80" />
      </div>
      <div className="cursor-pointer">
        <Image width={700} height={800} src={slider2} alt="slider" className="border-2 border-gray-900 w-full h-96 object-cover shadow-md hover:border-2 hover:border-opacity-80" />
      </div>
      <div className="cursor-pointer">
        <Image width={700} height={800} src={slider3} alt="slider" className="border-2 border-gray-900 w-full h-96 object-cover shadow-md hover:border-2 hover:border-opacity-80" />
      </div>
     
    </Slider>
  );
}

export default ImageSlider;
