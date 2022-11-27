import React from "react";

const Banner = () => {
  return (
    <section className="container mt-5 m-auto w-auto h-auto border border-slate-600 shadow-xl grid grid-cols-6 gap-4 place-items-center p-2">
      <div className="col-start-1 col-end-3 ">
        <p className="text-xl md:text-center font-serif">
          Poweful Tagline for Your Product
        </p>
        <p className="text-sm text-red-600 text-center mt-5">Know more</p>
      </div>
      <div className="col-end-7 col-span-2">
        <img
          className="border-4 border-indigo-500/50"
          src="https://via.placeholder.com/300x100"
          alt="show placeholder"
        />
      </div>
    </section>
  );
};

export default Banner;
