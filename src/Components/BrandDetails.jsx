import React from 'react';
import { useParams } from 'react-router-dom';
import cards from '../Data.json';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const BrandDetails = () => {
  const { user } = useContext(AuthContext); 
  const { id } = useParams(); // Extract id from the URL
 

  // Finding the brand with the matching id
  const brand = cards.find((card) => card.id === id);
 

  // If brand is not found, show an error message
  if (!brand) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-2xl font-bold">Brand not found!</div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <div className="max-w-2xl mx-auto bg-[#1d1836] border border-gray-200 rounded-lg shadow-2xl p-6">
        {/* Brand Logo */}
        <img
          src={brand.brand_logo}
          alt={`${brand.brand_name} Logo`}
          className="w-24 h-24 mx-auto rounded-full"
        />

        {/* Brand Name and Rating */}
        <div className="text-center mt-4">
          <h1 className="text-3xl font-bold text-white">{brand.brand_name}</h1>
          <div className="flex items-center justify-center gap-1 mt-2">
            <span className="text-yellow-400">⭐</span>
            <span className="text-green-600">{brand.rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-white mt-4">{brand.description}</p>

        {/* Coupons */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-green-600">Available Coupons:</h2>
          <ul className="list-disc list-inside mt-2">
            {brand.coupons.map((coupon, index) => (
              <li key={index} className="text-white">
                <strong className='text-yellow-600'>{coupon['coupon-code']}</strong>: {coupon.description} (Expires on {coupon['expiry-date']})
              </li>
            ))}
          </ul>
        </div>

        {/* Shop Link */}
        <div className="mt-6 text-center">
          <a
            href={brand['shop-Link']}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-slate-500 hover:text-yellow-300 transition-colors"
          >
            Visit Shop
          </a>
        </div>

        {/* Sale is On (Bouncing Text) */}
        {brand.isSaleOn && (
          <div className="animate-bounce text-green-600 font-bold mt-6 text-center">
            🎉 Sale is on! 🎉
          </div>
        )}

        {/* Back Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;