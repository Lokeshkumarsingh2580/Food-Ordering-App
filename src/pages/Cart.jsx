import React, { useContext, useState } from "react";
import { foodContext } from "../main";

const Cart = () => {
  const { cart } = useContext(foodContext);
  const [couponApplied, setCouponApplied] = useState(false);
  function calculateTotalCost() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return couponApplied ? total - 5 : total;
  }
  return (
    <div className="m-4 space-y-3">
      <h1>
        <strong>Duration:</strong>{" "}
        {cart.reduce((acc, val) => acc + val.delivery_time, 0)} minutes
      </h1>
      <h1>
        <strong>Price:</strong> Rs {calculateTotalCost()}
      </h1>
      <button
        className="p-2 rounded font-medium italic  bg-zinc-100 border-2 hover:bg-green-300 "
        onClick={() => setCouponApplied(true)}
      >
        Apply Coupon
      </button>
      <div className="flex flex-wrap m-8  items-center justify-center gap-4">
        {cart.map((foodItems) => {
          return (
            <div
              className=" rounded shadow-lg min-h-40 w-72 items-start flex p-2 bg-white flex-col gap-4"
              key={foodItems.id}
            >
              <img
                src={foodItems.image}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
