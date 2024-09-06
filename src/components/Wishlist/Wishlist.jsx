import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../Utils/Constant";

const Wishlist = () => {
  const movies = useSelector((store) => store.watchLater.item);

  return (
    <div className=" relative">
      <div className="py-20 px-20 flex gap-8 flex-wrap flex-row justify-center mb-5 absolute mt-10">
        {movies.map((item, index) => (
          <div className="w-36 md:w-56 pr-4" key={item.id}>
            <img
              alt="Movie Card"
              className=" rounded-md"
              src={IMG_CDN_URL + item.poster_path}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
