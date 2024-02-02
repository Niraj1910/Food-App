import React from "react";

function FoodCard({ img, dish, text, price }) {
  return (
    <div className=" flex flex-col min-w-40 mx-2 my-2 mb-4 rounded-xl backdrop-filter backdrop-blur-3xl text-white">
      <img
        src={img}
        alt="food-img"
        className="w-[90%] h-full top-10 m-3 mx-auto block rounded-md"
      />
      <div className="info flex flex-col my-3 px-3">
        <h1 className="font-semibold text-xl">{dish}</h1>
        <p className="text-start text-sm">{text}</p>
        <button className="bg-red-500 w-20 rounded-md my-4 m-auto block">
          ${price}.00
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
