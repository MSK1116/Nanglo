import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const Partner_read = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const [vidProgress, setVidProgress] = useState(0);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const updateProgress = () => {
    const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setVidProgress(percentage);
  };
  return (
    <>
      <Navbar />
      <div className=" max-w-screen-2xl min-h-screen overflow-hidden">
        <div className=" flex w-full h-[95vh] relative mt-8">
          <video onTimeUpdate={updateProgress} ref={videoRef} className=" w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="/Video/Short_vid.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-2 left-10">
            <button onClick={togglePlayPause} className={` overflow-hidden relative  px-4 py-2 opacity-80 bg-gray-300 text-gray-50 rounded-md `}>
              {!isPlaying ? <FaPlay /> : <FaPause />}
              <div className={` ${!isPlaying ? " bg-red-600" : "bg-emerald-600"} h-[2px] absolute bottom-0 left-0  rounded-lg "`} style={{ width: `${vidProgress}%` }}></div>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Partner_read;
