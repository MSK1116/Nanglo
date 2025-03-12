import React from "react";

const Home_mockup = () => {
  return (
    <>
      <div className=" mt-14 p-8 max-w-screen-2xl h-full  flex flex-row  ">
        <div data-aos="fade-up" className=" w-[60%] mt-10 ">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
              <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" className="h-[156px] md:h-[278px] w-full rounded-lg" alt=""></img>
            </div>
          </div>
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
          </div>
        </div>
        <div className=" w-[40%] flex flex-col justify-center">
          <span className="text-xs text-emerald-600"> Scan, Swap, Switch & more</span>

          <p className=" text-2xl font-semibold">Integrates with every e-commerce</p>
        </div>
      </div>
    </>
  );
};

export default Home_mockup;
