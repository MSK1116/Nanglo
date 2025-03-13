import React from "react";

const Home_banner3 = () => {
  return (
    <>
      <section className=" max-w-screen-2xl overflow-hidden h-[85vh] w-full flex p-8">
        <div className=" w-[50%] ml-24 items-center">
          <p data-aos="fade-right" data-aos-duration="1000" className=" mt-36  text-sm text-emerald-600">
            Boost recycling
          </p>
          <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className=" text-3xl font-semibold">
            Give plastic, take eco-friendly
          </p>
          <div data-aos="fade-up" data-aos-duration="1000" className=" max-w-fit mt-8 ">
            <button className=" p-2  rounded-md text-white min-w-24  bg-emerald-600 hover:bg-emerald-700 transition-none duration-700 cursor-pointer">Read</button>
          </div>
        </div>
        <div className=" w-[50%] flex items-center justify-center">
          <div data-aos="zoom-in-left" data-aos-duration="1000" className=" size-96 bg-cover bg-no-repeat bg-[url(/clipart/GarbageTruck.png)]"></div>
        </div>
      </section>
      <hr></hr>
    </>
  );
};

export default Home_banner3;
