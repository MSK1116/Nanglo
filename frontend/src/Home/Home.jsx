import React from "react";
import Navbar from "../components/Navbar";
import Home_mockup from "./Home_mockup";
import Home_banner from "./Home_banner";
import Home_mockup2 from "./Home_mockup2";
import Home_banner2 from "./Home_banner2";
import Home_banner3 from "./Home_banner3";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Home_banner />
      <Home_mockup />
      <Home_mockup2 />
      <Home_banner2 />
      <Home_banner3 />
      <Footer />
    </>
  );
};

export default Home;
