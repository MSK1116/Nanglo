import React, { use, useEffect } from "react";
import { FlipWords } from "./FlipWords";
import Aos from "aos";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.refresh();
  });
  return (
    <>
      <div className="navbar bg-base-200 shadow-md fixed top-0 right-0 left-0 z-50">
        <div className="navbar-start">
          <div onClick={() => navigate("/")} data-aos="" className=" flex-1 cursor-pointer">
            <span data-aos-duration="1000" data-aos="zoom-in-right" data-aos-delay="200" className=" absolute -left-8 -top-2 size-20 bg-cover bg-no-repeat bg-[url(/Transparent_Nanglo.png)]"></span>
            <div data-aos="fade-right" data-aos-duration="1000" className=" ml-5 z-20 ">
              <span className="p-2  rounded-md font-playwrite font-semibold text-emerald-600 text-2xl">Nanglo</span>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <button onClick={() => navigate("/partner")} className=" p-2 bg-red-600 rounded-lg hover:bg-red-700  cursor-pointer mr-3 text-gray-100">
            Demo on partner ecommerce
          </button>
          <button className="  p-2 bg-emerald-600 rounded-lg hover:bg-emerald-700  cursor-pointer mr-3 text-gray-100">Demo of our own ecommerce</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
