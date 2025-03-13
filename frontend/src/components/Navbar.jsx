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
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {" "}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div onClick={() => navigate("/")} data-aos="" className=" flex-1 cursor-pointer">
            <span data-aos-duration="1000" data-aos="zoom-in-right" data-aos-delay="200" className=" absolute -left-8 -top-2 size-20 bg-cover bg-no-repeat bg-[url(/Transparent_Nanglo.png)]"></span>
            <div data-aos="fade-right" data-aos-duration="1000" className=" ml-5 z-20 ">
              <span className="p-2  rounded-md font-playwrite font-semibold text-emerald-600 text-2xl">Nanglo</span>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
