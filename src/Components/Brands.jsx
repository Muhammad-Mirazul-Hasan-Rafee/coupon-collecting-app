import React from "react";

const Brands = () => {
  return (
    <div>
        <h3 className="text-center font-bold text-4xl">This is your Brand section</h3>
      <div className="mockup-browser border-base-300 border w-full flex justify-center mt-4">
  <div className="mockup-browser-toolbar flex items-center gap-2 p-2">
    {/* Hide the three dots */}
    <div className="hidden">
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-base-300"></div>
        <div className="w-2 h-2 rounded-full bg-base-300"></div>
        <div className="w-2 h-2 rounded-full bg-base-300"></div>
      </div>
    </div>

    {/* Search box and button */}
    <div className="flex flex-1 items-center gap-2">
      <input
        type="text"
        className="input input-bordered w-64"
        placeholder="Search..."
      />
      <button className="btn btn-primary mr-64 border border-red-950">Search</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Brands;
