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
      setAlternativePro(product.alternative);
      setMainProduct(product);
      document.title = product.name + " | Darazi";
    } else {
      const pullProduct = Getproduct.find((Getproduct) => Getproduct.id == id);
      setAlternativePro(pullProduct.alternative);
      setMainProduct(pullProduct);
      document.title = pullProduct.name + " | Darazi";
    }
  }, [id, product]);
  console.log(mainProduct);
  return (
    <>
      <Partner_navbar />
      <section className=" max-w-screen-2xl mt-10 p-8">
        <div className=" mt-20 px-20 shadow-md">
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
                <FaStar />
                <FaStar />
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
          <div className=" w-[20%] h-auto">
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner_product_view;
