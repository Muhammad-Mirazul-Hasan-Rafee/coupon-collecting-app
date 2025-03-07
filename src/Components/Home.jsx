import React from "react";
import Swiper from "./Swiper";
import Marquee from "react-fast-marquee";
import data from "../Data.json";
import { Link } from "react-router-dom";
const Home = () => {
  // const handleLogo =(id)=>{
  //   navigate('/brands');
  // };

  return (
    <div>
      <Swiper></Swiper>
      <h3 className="text-2xl text-center mt-2">
        Here are the brands. Take a look below!
      </h3>

      <Marquee
        className="mt-4"
        pauseOnHover
        speed={50}
        direction="left"
        gradient
        gradientWidth={50}
      >
        {data.map((idx) => (
          <div key={idx.id} className="mx-4 h-18">
            <Link to="/brands">
              <img
                className="w-16 h-16"
                src={idx.brand_logo}
                alt={idx.brand_name || "Brand Logo"}
              />
            </Link>
          </div>
        ))}
      </Marquee>

      <h2 className="text-4xl text-center underline font-extrabold mt-5">
        Brands on Sell
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 ">
      {data.map((idx) => (
        <div className="w-44 h-48 bg-[#21243f]  shadow-2xl mx-auto">
          <div
            key={idx.id}
            className="w-44 h-48 mt-2 text-center text-white shadow-2xl"
          >
            <img
              className="w-14 h-14 mx-auto rounded-xl"
              src={idx.brand_logo}
              alt=""
            />
            <h4 className="text-xl font-semibold">{idx.brand_name}</h4>
            <h5 className="mt-6">
              Total Coupons: {""}
              <span className="font-semibold">{idx.quantity}</span>
            </h5>
            <p className="font-bold">{idx.category}</p>
          </div>
        </div>
      ))}
      </div>
      

    </div>
  );
};

export default Home;
