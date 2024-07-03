import React, { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../fakeFetch";

export const foodContext = createContext();

export const ContextApi = ({ children }) => {
  const [allfoods, setAllFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  function handleAdd(id) {
    setCart((prev) => {
      if (prev.find((items) => items.id === id.id)) {
        return prev;
      }
      return [...cart, id];
    });
  }

  function addedCart(id) {
    return cart.some((items) => items.id === id);
  }

  useEffect(() => {
    const fetchApi = async () => {
      try {
        await fakeFetch("https://example.com/api/menu").then((data) =>
          setAllFoods(data.data.menu)
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);
  return (
    <foodContext.Provider
      value={{ allfoods, loading, cart, handleAdd, addedCart }}
    >
      {children}
    </foodContext.Provider>
  );
};

export default ContextApi;
