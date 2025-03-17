import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import Partner_Home from "./partner/Partner_Home";
import Partner_product_view from "./partner/Partner_product_view";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 700) {
      alert("This prototype is not made for small screen size");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partner" element={<Partner_Home />} />
        <Route path="/products/:id/:title" element={<Partner_product_view />} />
      </Routes>
    </>
  );
}

export default App;
