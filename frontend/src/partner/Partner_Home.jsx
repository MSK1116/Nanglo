import React from "react";
import Partner_navbar from "./Partner_navbar";
import Partner_offer from "./Partner_offer";

const Partner_Home = () => {
  document.title = "Darazi | Online shopping in Sri Lanka";
  return (
    <>
      <Partner_navbar />
      <Partner_offer />
    </>
  );
};

export default Partner_Home;
