import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../Data.json";
const Swiper = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div className="w-3/4 m-auto mb-24">
      <div className="mt-20">
      <Slider {...settings}>
        {Data.map((e) => (
          <div className="bg-[#2e303d] h-[300px] text-black rounded-xl">
            <div className="h-56 rounded-t-xl bg-[#2e303d] flex justify-center items-center">
              <img className="h-44 w-44" src={e.brand_logo} alt="" />
            </div>
            <div className="bg-[#2e303d] flex justify-center items-center gap-4 p-4">
            <p className="text-lg font-bold bg-[#2e303d] text-white ">{e.brand_name}</p>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default Swiper;
