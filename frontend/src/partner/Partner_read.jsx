import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const Partner_read = () => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () => setIsLoading(false);
    const handleWaiting = () => setIsLoading(true);
    const handleStalled = () => setIsLoading(true);
    const handleCanPlayThrough = () => setIsLoading(false);

    if (video) {
      video.addEventListener("play", handlePlay);
      video.addEventListener("waiting", handleWaiting);
      video.addEventListener("stalled", handleStalled);
      video.addEventListener("canplaythrough", handleCanPlayThrough);
    }

    return () => {
      if (video) {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("waiting", handleWaiting);
        video.removeEventListener("stalled", handleStalled);
        video.removeEventListener("canplaythrough", handleCanPlayThrough);
      }
    };
  }, []);

  const updateProgress = () => {
    const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setVidProgress(percentage);
  };
  return (
    <>
      <Navbar />
      <div className=" max-w-screen-2xl min-h-screen overflow-hidden">
        <div className=" flex w-full h-[95vh] relative mt-8">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="h-12 w-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <video ref={videoRef} className=" w-full h-full object-cover" autoPlay loop muted playsInline>
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
