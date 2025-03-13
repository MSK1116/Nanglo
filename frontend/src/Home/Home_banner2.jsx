import React from "react";

const Home_banner2 = () => {
  return (
    <>
      <section className=" max-w-screen-2xl h-[80vh] w-full p-8 flex  mt-10 relative overflow-hidden">
        <div data-aos="zoom-in-up" data-aos-duration="1000" className=" absolute bottom-56 right-52 z-10 size-fit bg-emerald-950">
          <span className=" absolute top-0  rotate-12 opacity-75 size-40 z-50 bg-cover bg-no-repeat bg-[url(/clipart/LocallyMade.png)]"></span>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className=" w-1/2 h-full mt-10 flex items-center justify-center">
          <div className=" bg-cover bg-no-repeat size-80 bg-[url(/clipart/womenKnitting.png)]"></div>
        </div>
        <div className=" w-1/2   ">
          <p data-aos="fade-left" data-aos-duration="1000" className=" mt-20 text-sm text-emerald-600">
            Nanglo aims to connect 90% womens working in manufacturing eco-products
          </p>

          <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className=" font-semibold text-3xl">
            Empowers women
          </p>
          <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className="  text-xl font-medium">
            & poverty allevation
          </p>

          <div data-aos="fade-up" data-aos-duration="1000" className=" max-w-fit mt-8 ">
            <button className=" p-2  rounded-md text-white min-w-24  bg-emerald-600 hover:bg-emerald-700 transition-none duration-700 cursor-pointer">Read</button>
          </div>
        </div>
      </section>
      <hr></hr>
    </>
  );
};

export default Home_banner2;
