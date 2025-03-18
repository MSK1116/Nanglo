import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

const Partner_navbar = () => {
  return (
    <>
      <div className=" cursor-not-allowed fixed top-0 max-h-[7.5rem] h-full z-[9999] right-0 left-0 flex flex-col bg-[#f85606] ">
        <div className=" uppercase text-white text-xs space-x-9 mt-1 flex w-full justify-end pr-24">
          <span className=" cursor-pointer">Save more on App</span>
          <span className=" cursor-pointer">Become a seller</span>
          <span className=" cursor-pointer">Help and support</span>
          <span className=" cursor-pointer">login</span>
          <span className=" cursor-pointer">Signup</span>
          <span className=" cursor-pointer">Change language</span>
        </div>
        <div className=" flex flex-row w-full mt-3 pl-28 items-center">
          <div className="w-28 h-16 overflow-hidden ">
            <img src="/darazi/Logo.png" className="w-full h-full object-cover " alt="Logo" />
          </div>

          <div className=" flex bg-white rounded-sm  max-h-11 ml-20">
            <input placeholder="Search in Darazi" className="p-2 w-[80vh]  h-full rounded-sm outline-none placeholder:text-sm"></input>
            <div className=" text-[#f85606] bg-[#f85606] bg-opacity-25 w-[8%] p-2 cursor-pointer">
              <CiSearch className=" size-full" />
            </div>
          </div>
          <span className=" text-white ml-20">
            <LuShoppingCart className=" size-10" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Partner_navbar;
