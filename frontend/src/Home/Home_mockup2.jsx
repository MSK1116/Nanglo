import React from "react";
import GIF1 from "/clipart/workingOnPhone.gif";

const Home_mockup2 = () => {
  return (
    <>
      <section className=" flex max-w-screen-2xl h-[95vh] w-full p-8 ">
        <div className=" w-[70%] relative  h-full">
          <img className=" absolute size-40 left-9 -bottom-12" src={GIF1}></img>
          <div className="  h-full flex-col flex justify-center mb-10 ml-8">
            <p data-aos="fade-right" data-aos-duration="1000" className=" text-sm text-emerald-600">
              Speak to sell, Surf to buy
            </p>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className=" text-3xl font-semibold">
              Easy to sell, Easy to buy
            </p>
            <div className=" flex space-x-4">
              <div data-aos="fade-up" data-aos-duration="1000" className=" max-w-fit mt-10 ">
                <button className=" p-2  rounded-md text-white min-w-24  bg-emerald-600 hover:bg-emerald-700 transition-none duration-700 cursor-pointer">Read</button>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="-5" className=" max-w-fit mt-10 ">
                <button className=" p-2  rounded-md text-white min-w-24 bg-gray-400 hover:bg-gray-500  transition-none duration-700 cursor-pointer">Try it</button>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="1000" className=" w-[30%]  mr-10">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[550px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[522px] bg-white dark:bg-gray-800">
              <img src="/shop/Demo_gif.gif" className=" w-[272px] h-[522px]" alt=""></img>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
    </>
  );
};

export default Home_mockup2;
