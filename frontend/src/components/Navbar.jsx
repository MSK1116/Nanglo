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
          <ul className="menu menu-horizontal px-1 mr-24">
            <li>
              <a>Social</a>
            </li>
            <li>
              <a>Economy</a>
            </li>

            <li>
              <a>About</a>
            </li>
            <li>
              <details className=" min-w-fit w-full">
                <summary>Shop</summary>
                <ul className="bg-base-100 min-w-44 w-full  rounded-t-none p-2">
                  <li>
                    <a className=" text-xs">Nanglo shop</a>
                  </li>
                  <li>
                    <a className=" text-xs">Partner e-commerce</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
