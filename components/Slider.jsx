"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";

const Slider = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  return (
    <div className="w-full h-full relative">
      {/* Swiper */}
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full z-0"
      >
        {["1", "2", "3", "4", "5", "6"].map((num) => (
          <SwiperSlide key={num}>
            <img
              src={`/asset/uk_house_${num}.jpeg`}
              alt={`Slide ${num}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/fallback.jpg";
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-30 pointer-events-none">
        <button
          onClick={handlePrev}
          className="pointer-events-auto bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/70 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/70 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
