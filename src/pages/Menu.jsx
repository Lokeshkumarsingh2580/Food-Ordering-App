import React, { useContext, useState } from "react";
import { foodContext } from "../main";

const Menu = () => {
  const { allfoods, loading, handleAdd, addedCart } = useContext(foodContext);
  const [query, setQuery] = useState([]);
  const [isVeg, setVeg] = useState(false);
  const [isSpicy, setSpicy] = useState(false);
  const [isSort, setSort] = useState(null);

  const FoundFood = allfoods
    .filter(
      (foods) =>
        foods.name.toLowerCase().includes(query.toString().toLowerCase()) &&
        (!isVeg || foods.is_vegetarian) &&
        (!isSpicy || foods.is_spicy)
    )
    .sort((a, b) => {
      if (!isSort) return 0;
      return isSort === "asc" ? a.price - b.price : b.price - a.price;
    });

  return (
    <div className="space-y-4">
      <div className="filter m-4 flex flex-col items-start gap-2 ">
        <h1 className="font-bold text-xl">Filters:</h1>
        <div className="sm:flex-row gap-4 flex flex-col">
          <input
            type="text"
            className="border"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex gap-4 ">
            <div className="checkbox flex items-center justify-center gap-2 ">
              <label htmlFor="veg">Veg</label>
              <input
                onClick={() => setVeg(!isVeg)}
                type="checkbox"
                name="veg"
                id="veg"
              />
            </div>
            <div className="checkbox flex items-center justify-center gap-2 ">
              <label htmlFor="spicy">Spicy</label>
              <input
                onClick={() => setSpicy(!isSpicy)}
                type="checkbox"
                name="spicy"
                id="spicy"
              />
            </div>
            <div className="checkbox flex items-center justify-center gap-2 ">
              <label htmlFor="low">Low-High</label>
              <input
                onClick={() => setSort("asc")}
                type="radio"
                name="price"
                id="low"
              />
            </div>
            <div className="checkbox flex items-center justify-center gap-2 ">
              <label htmlFor="high">High-Low</label>
              <input
                onClick={() => setSort("dsc")}
                type="radio"
                name="price"
                id="high"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap m-8  items-center justify-center gap-4">
          {loading && <p>Loading....</p>}
          {!loading &&
            FoundFood.map((foodItems) => {
              return (
                <div className=" rounded shadow-lg min-h-40 w-72 items-start flex p-2 bg-white flex-col gap-4">
                  <img
                    src={foodItems.image}
                    alt=""
                    className="h-40 w-full object-cover object-center"
                  />
                  <h1>
                    <strong>Name:</strong> {foodItems.name}
                  </h1>
                  <p>
                    <strong>Desciption:</strong> {foodItems.description}
                  </p>
                  <h2>
                    <strong>Delivery Time:</strong> {foodItems.delivery_time}min
                  </h2>
                  <h1>
                    <strong>Price:</strong> {foodItems.price}
                  </h1>
                  <button
                    className="p-2 rounded font-medium bg-zinc-100 border-2 hover:bg-green-400 italic"
                    onClick={() => handleAdd(foodItems)}
                  >
                    {addedCart(foodItems.id) ? "Go To Cart" : " Add To Cart "}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
