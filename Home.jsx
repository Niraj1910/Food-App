import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import FoodCard from "./FoodCard";

function Home() {
  const btn = ["All", "Breakfast", "Launch", "Dinner"];
  const [search, setSearch] = useState("");
  const [dish, setDish] = useState([]);

  const [selectedButton, setSelectedButton] = useState("All");

  const BtnDishes = async (text) => {
    try {
      const apiText = text[0].toLowerCase() + text.slice(1);
      const fetchDishes = await axios.get(
        `http://localhost:5000/api/v1/${apiText}`
      );

      setDish(fetchDishes.data.message);
      console.log(fetchDishes.data.message);
      setSelectedButton(text);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const SearchedDishes = async () => {
      try {
        const fetchDishes = await axios.get(
          `http://localhost:5000/api/v1/search/${search}`
        );

        setDish(fetchDishes.data.message);
        console.log(fetchDishes.data.message);
      } catch (error) {
        console.log(error);
      }
    };

    if (search.length > 0) SearchedDishes();
  }, [search]);

  useEffect(() => {
    // Fetch 'All' dishes when the component mounts
    BtnDishes("All");
  }, []); // Empty dependency array ensures this effect only run once on mount

  return (
    <div className="w-full min-h-screen overflow-scroll bg-slate-700">
      <div className="heading flex min-h-40 bg-slate-800 text-white justify-around items-center">
        <h1 className="text-4xl ">
          F<span className="text-red-600">oo</span>dy St
          <span className="text-red-500">a</span>ll
        </h1>

        <div className="buttons">
          {btn.map((item) => (
            <Button
              text={item}
              key={item}
              onClick={BtnDishes}
              selected={selectedButton === item}
            />
          ))}
        </div>

        <input
          className="text-slate-300 bg-black p-2 rounded-md outline-red-500 outline-none"
          type="text"
          placeholder="Search Food..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      <div className=" min-h-screen absolute bg-[url('./public/food-bg.jpg')] bg-no-repeat bg-cover bg-fixed">
        <div className="foods relative min-h-96 mx-40 my-10 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {dish.map((item, index) => (
            <FoodCard
              key={index}
              img={`./public/anya forger.jpg`}
              dish={item.name}
              text={item.text}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
