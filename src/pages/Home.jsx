import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex gap-4 flex-col items-center justify-center h-screen">
      <h1 className="font-bold sm:text-3xl text-2xl italic">
        Welcome To Food Ordering App
      </h1>
      <button className="p-2 font-medium bg-zinc-100 border-2 hover:bg-green-400 italic rounded-lg">
        <Link to={"/menu"}>Go to Menu</Link>
      </button>
    </div>
  );
};

export default Home;
