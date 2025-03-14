import React from 'react';
import { useNavigate } from 'react-router-dom';
import cards from '../Data.json';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider'; 

const Brands = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleViewCoupons = (brandId) => {
    if (user) {
      // Navigate to the dynamic route with brandId
      navigate(`/brandDetails/${brandId}`);
    } else {
      // Redirect to login if user is not logged in
      navigate('/login');
    }
  };

  return (
    <div>
      <h3 className="text-center font-bold text-4xl">
        This is your Brand section
      </h3>
      <div className="mockup-browser border-base-300 border w-full flex justify-center mt-4">
        <div className="mockup-browser-toolbar flex items-center gap-2 p-2">
          <div className="flex flex-1 items-center gap-2">
            <input
              type="text"
              className="input input-bordered w-64"
              placeholder="Search..."
            />
            <button className="btn btn-primary mr-64 border border-red-950">
              Search
            </button>
          </div>
        </div>
      </div>
      {cards.map((card, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-5 flex flex-col items-center gap-3 shadow-sm"
        >
          {/* Brand Logo */}
          <img
            src={card.brand_logo}
            alt={`${card.brand_name} Logo`}
            className="w-12 h-12"
          />

          {/* Brand Name and Rating */}
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">{card.brand_name}</h3>
            <div className="flex items-center gap-1">
              <span>⭐</span>
              <span>{card.rating}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-center text-gray-600">{card.description}</p>

          {/* Sale is On (Bouncing Text) */}
          {card.isSaleOn && (
            <div className="animate-bounce text-green-600 font-bold">
              🎉 Sale is on! 🎉
            </div>
          )}

          {/* View Coupons Button */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => handleViewCoupons(card.id)} // Pass brandId to handleViewCoupons
          >
            View Coupons
          </button>
        </div>
      ))}
    </div>
  );
};

export default Brands;