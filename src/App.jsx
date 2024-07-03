import React, { useContext } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import { foodContext } from "./main";

const App = () => {
  const { cart } = useContext(foodContext);
  const navStyle = ({ isActive }) => {
    return { color: isActive ? "red" : "blue" };
  };
  return (
    <div className="p-4 italic bg-zinc-50 min-h-screen w-full">
      <nav>
        <ul className="flex gap-4">
          <NavLink style={navStyle} to="/">
            Home
          </NavLink>
          <NavLink style={navStyle} to="/menu">
            Menu
          </NavLink>
          <NavLink style={navStyle} to="/cart">
            Cart <sup>{cart.length}</sup>
          </NavLink>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
