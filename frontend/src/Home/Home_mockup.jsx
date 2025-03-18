import React from "react";
import { useNavigate } from "react-router-dom";

const Home_mockup = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" mt-14 p-8 max-w-screen-2xl h-[90vh]  flex flex-row overflow-hidden  ">
        <div data-aos="fade-up" data-aos-duration="1000" className=" w-[60%] mt-10 ">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
              <img src="\darazi\Darazi_gif.gif" className="h-[156px] md:h-[278px] w-full rounded-lg" alt=""></img>
            </div>
          </div>
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
          </div>
        </div>
        <div className=" w-[40%] relative flex flex-col justify-center">
          <span data-aos="fade-left" data-aos-duration="1000" className="text-xs text-emerald-600">
            {" "}
            Scan, Swap, Switch & more
          </span>

          <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className=" text-2xl font-semibold">
            Integrates with every e-commerce
          </h1>
          <div className=" flex space-x-4">
            <div data-aos="fade-up" data-aos-duration="1000" className=" max-w-fit mt-10 ">
              <button onClick={() => navigate("/partner/read")} className=" p-2  rounded-md text-white min-w-24  bg-emerald-600 hover:bg-emerald-700 transition-none duration-700 cursor-pointer">
                Read
              </button>
            </div>
            <div onClick={() => navigate("/partner")} data-aos="fade-up" data-aos-duration="1000" data-aos-offset="-5" className=" max-w-fit mt-10 ">
              <button className=" p-2  rounded-md text-white min-w-24 bg-gray-400 hover:bg-gray-500  transition-none duration-700 cursor-pointer">Try it</button>
            </div>
          </div>
          <span className=" absolute  size-40 opacity-70 top-0 right-10 bg-cover bg-no-repeat bg-[url(/clipart/integrate.png)]"></span>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Home_mockup;
