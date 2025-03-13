import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

const Partner_offer = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    duration: 1000, // Smooth transition
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!instanceRef.current) return;

    setLoaded(true);
    instanceRef.current.on("slideChanged", (slider) => {
      setCurrentSlide(slider.track.details.rel);
    });

    const interval = setInterval(() => {
      instanceRef.current.next();
    }, 3000); // Auto-slide every 3s

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="max-w-screen-2xl p-8 h-[90vh] w-full flex mt-24 relative ">
      {/* Slider Container */}
      <div ref={sliderRef} className="keen-slider w-full mx-auto overflow-hidden">
        <img src="/darazi/offer_1.png" className=" keen-slider__slide"></img>
        <img src="/darazi/offer_2.png" className=" keen-slider__slide"></img>
        <img src="/darazi/offer_3.png" className=" keen-slider__slide"></img>
      </div>

      {/* Arrow Buttons */}
      {loaded && (
        <>
          <button onClick={() => instanceRef.current?.prev()} className="absolute z-50 opacity-50 left-8 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full">
            ◀
          </button>
          <button onClick={() => instanceRef.current?.next()} className="absolute z-50 opacity-50 right-8 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full">
            ▶
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {loaded && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(instanceRef.current?.slides.length || 0)].map((_, idx) => (
            <button key={idx} className={`w-3 h-3 rounded-full ${currentSlide === idx ? "bg-gray-200" : "bg-gray-400"}`} onClick={() => instanceRef.current?.moveToIdx(idx)}></button>
          ))}
        </div>
      )}
    </section>
  );
};

export default Partner_offer;
