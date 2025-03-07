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
            <Link to='/brands'><img className="w-16 h-16" src={idx.brand_logo} alt={idx.brand_name || "Brand Logo"} /></Link>
          </div>
        ))}
      </Marquee>

      <h2 className="text-4xl text-center font-extrabold mt-5">Brands on Sell</h2>
      {
        
      }
    </div>
  );
};

export default Home;
