"use client"

import React from "react";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({}) => {
  return (
    <div className="hidden search border-gray-500 border-2 w-1/2 rounded-full overflow-hidden md:flex items-center p-1">
      <input
        type="text"
        placeholder="50% Off Nike, New Balance, Adidas"
        className="w-full p-1 border-none outline-none"
      />
      <div className="rounded-full bg-black h-7 w-7 grid place-items-center">
        <IconContext.Provider value={{ color: "white"}}>
          <FaSearch />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default SearchBar;
