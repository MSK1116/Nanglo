import React, { useEffect, useState } from "react";
import Partner_navbar from "./Partner_navbar";
import { useLocation, useParams } from "react-router-dom";
import Getproduct from "./product.json";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Partner_product_view = () => {
  const { id, title } = useParams();
  const location = useLocation();
  const product = location.state;

  const [mainProduct, setMainProduct] = useState([null]);
  const [alternativePro, setAlternativePro] = useState([null]);

  useEffect(() => {
    if (product && product.alternative) {
      setAlternativePro(product.alternative[0]);
      setMainProduct(product);
      document.title = product.name + " | Darazi";
    } else {
      const pullProduct = Getproduct.find((Getproduct) => Getproduct.id == id);
      setAlternativePro(pullProduct.alternative[0]);
      setMainProduct(pullProduct);
      document.title = pullProduct.name + " | Darazi";
    }
  }, [id, product]);

  return (
    <>
      <Partner_navbar />
      <section className=" max-w-screen-2xl mt-10 p-8">
        <div className=" mt-20 pl-20 p-2 shadow-md flex">
          <div className=" w-[80%] h-auto  flex flex-row space-x-6 border-r-2">
            <div className="">
              <div className="w-80 h-96 ">
                <img className=" w-full h-full object-cover" src={mainProduct.imageLink}></img>
              </div>
            </div>
            <div>
              <p className=" text-xl font-normal">{mainProduct.name}</p>

              <p className=" flex items-center text-yellow-400 mt-10 text-sm">
                <FaStar />
                <FaStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <span className=" text-gray-800">| Ratings {mainProduct.rating}K</span>
              </p>
              <p className=" mt-7 text-sm text-gray-800">Brand: {mainProduct.brand}</p>
              <hr></hr>
              <div className=" text-[#f85606] text-xl mt-20">Rs. {mainProduct.price}</div>
              <div className=" text-gray-700 text-xs ">Rs. {mainProduct.mainPrice}</div>
              <div className=" space-x-3 mt-5">
                <button className=" p-2 rounded-md text-white font-medium bg-[#f85606]">Buy now</button>
                <button className=" p-2 rounded-md text-white font-medium bg-[#f85606]/50">Add to cart</button>
              </div>
            </div>
          </div>
          <div className=" w-[20%] h-auto p-2 ">
            <h1 className=" text-sm text-gray-700"> Eco-friendly suggestion</h1>
            <div className=" w-full flex justify-center  ">
              <div className=" flex w-48 h-52 items-center relative overflow-hidden ">
                <div className=" absolute -top-4 -left-4 p-1 pl-4 flex  size-24 bg-emerald-700/10 hover:bg-emerald-700/30 transition-all   rounded-full">
                  <img className=" size-20 object-cover" src="/Logo.png"></img>
                </div>
                <img className=" w-full h-full " alt={alternativePro.name} src={alternativePro.imageLink}></img>
              </div>
            </div>
            <div className=" relative">
              <div className=" absolute right-0 size-16 mt-4 -z-10">
                <img className=" w-full h-full object-cover" src="/GIF/saveTheOcean_gif.gif"></img>
              </div>
              <p className=" text-sm">{alternativePro.name}</p>
              <div className=" flex text-[#f85606]">
                Rs. {alternativePro.price} |
                <div className=" text-sm ml-1 flex items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <CiStar />
                  {(Math.random() * (5.0 - 1.0) + 1.0).toFixed(1)}K
                </div>
              </div>
              <p className=" text-xs text-gray-700">{alternativePro.mainPrice}</p>
              <p className=" text-xs text-gray-700">
                Brand: <span className=" text-emerald-700">Nanglo</span>
              </p>
            </div>
            <p className=" text-xs mt-6">Reduce your home plastic by {(Math.random() * 10).toFixed(1)}%</p>
            <div className=" w-full mt-1 justify-around flex ">
              <button className="   bg-emerald-600 hover:bg-emerald-700 p-2 text-white rounded-lg">Buy now</button>
              <button className="   bg-emerald-600/50 hover:bg-emerald-700 p-2 text-white rounded-lg">Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner_product_view;
