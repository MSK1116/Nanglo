import React from "react";
import Getproduct from "./product.json";

const Partner_Flashsale = () => {
  const numberOfProductToDisplay = Getproduct.slice(0, 12);
  const product = numberOfProductToDisplay.sort(() => Math.random() - 0.12);

  return (
    <>
      <section className=" p-16 max-w-screen-2xl h-auto bg-gray-100 ">
        <div className=" ">
          <h1 className=" text-2xl">Flash sale</h1>
        </div>
        <div className=" h-full bg-gray-50 ">
          <div className=" text-[#f85606] w-full  flex items-center justify-between px-8 min-h-12 border-b-2">
            <span>On Sale Now</span>
            <button className=" border p-1 border-[#f85606] text-sm font-medium uppercase">Show all products</button>
          </div>
          <div className=" grid grid-cols-6 gap-x-3 gap-y-3 mt-4">
            {product.map((product) => (
              <div key={product.id} className="w-auto h-80 hover:shadow-lg cursor-pointer">
                <div className=" h-[75%] w-full p-2 ">
                  <img className=" w-full h-full object-cover " src={product.imageLink} alt={product.name}></img>
                </div>
                <div className=" h-[25%] p-1 ">
                  <span className=" text-xs  line-clamp-2">{product.name}</span>
                  <div className=" text-[#f85606]">
                    <span className="  text-xl">Rs.</span>
                    {product.price}
                  </div>
                  <div className=" text-xs text-gray-800">{(Math.random() * (5.0 - 1.0) + 1.0).toFixed(1)}K Sold</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner_Flashsale;
