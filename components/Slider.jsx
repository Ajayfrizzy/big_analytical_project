"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect } from "react";

const Slider = () => {
  // Add custom CSS for Swiper navigation and pagination
  useEffect(() => {
    // Add custom styles to document head
    const style = document.createElement('style');
    style.innerHTML = `
      /* Custom navigation arrow colors */
      .swiper-button-next,
      .swiper-button-prev {
        color: #fff !important; /* Change to your preferred color */
        background-color: rgba(114, 114, 114, 0.5);
        padding: 30px;
        border-radius: 50%;
        transform: scale(0.6);
      }
      
      /* Hover state for arrows */
      .swiper-button-next:hover,
      .swiper-button-prev:hover {
        background-color: rgba(0, 0, 0, 0.7);
      }
      
      /* Custom pagination bullet colors */
      .swiper-pagination-bullet {
        background:rgb(250, 7, 7) !important; /* Change to your preferred color */
        opacity: 0.7;
      }
      
      .swiper-pagination-bullet-active {
        opacity: 1;
        background:rgb(0, 0, 0) !important; /* Change to your preferred color */
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full h-full"> 
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-full !z-2"
        style={{ zIndex: -1 }}
      >
        <SwiperSlide>
          <img src="/asset/uk_house_1.jpeg" alt="Slide 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/asset/uk_house_2.jpeg" alt="Slide 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/asset/uk_house_3.jpeg" alt="Slide 3" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/asset/uk_house_4.jpeg" alt="Slide 4" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/asset/uk_house_5.jpeg" alt="Slide 5" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/asset/uk_house_6.jpeg" alt="Slide 6" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};


export default Slider;