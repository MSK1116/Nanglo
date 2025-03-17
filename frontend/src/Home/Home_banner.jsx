import Aos from "aos";
import React, { use, useEffect } from "react";

const Home_banner = () => {
  useEffect(() => {
    Aos.refresh();

    document.getElementById("my_modal_2").showModal();
  }, []);
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Caution!</h3>
          <p className="py-4">This website is underdevelopment</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <section className=" relative flex flex-row max-w-screen-2xl h-[85vh] overflow-hidden ">
        <div data-aos="zoom-in-up" data-aos-duration="1000" className="">
          <span className=" opacity-15 absolute bottom-0   size-72 -left-20 bg-cover bg-no-repeat bg-[url(/BambooTree.png)]"></span>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="">
          <span className=" absolute top-32 size-80 left-48 bg-cover bg-no-repeat bg-[url(/clipart/womenWithecoShoppingBags.png)]"></span>
        </div>
        <div data-aos="zoom-in" className="  size-40 absolute top-10 right-0">
          <span className=" absolute top-0 right-0 rotate-12 size-40 opacity-45  bg-cover bg-no-repeat bg-[url(/clipart/Sustainable.png)]"></span>
        </div>
        <div className="  w-full justify-center items-end mr-14 flex flex-col text-3xl uppercase ">
          <p data-aos="fade-left" data-aos-duration="1000" className=" text-sm text-emerald-600">
            A tool that changes how we
          </p>
          <p className=" font-semibold" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
            buy, sell and exchange eco products
          </p>
        </div>
      </section>
      <hr></hr>
    </>
  );
};

export default Home_banner;
