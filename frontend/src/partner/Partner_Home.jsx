import React, { useEffect } from "react";
import Partner_navbar from "./Partner_navbar";
import Partner_offer from "./Partner_offer";
import Partner_Flashsale from "./Partner_Flashsale";

const Partner_Home = () => {
  document.title = "Darazi | Online shopping in Sri Lanka";
  useEffect(() => {
    document.getElementById("my_modal_2").showModal();
  }, []);
  return (
    <>
      <Partner_navbar />
      <Partner_offer />
      <Partner_Flashsale />

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Caution!</h3>
          <p className="py-4">This website is underdevelopment</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Partner_Home;
