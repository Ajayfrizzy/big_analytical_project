"use client";

import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Feedback from "@/components/Feedback"; // Import the Feedback Form component
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState("auto");
  const containerRef = useRef(null);
  
  // Store the original height when component mounts
  useEffect(() => {
    if (containerRef.current && !isFormOpen) {
      // Set a default compact height for the initial view
      setContainerHeight("auto");
    }
  }, []);

  // Handle opening the form - expand the container height
  const handleOpenForm = () => {
    // First store current height
    const currentHeight = containerRef.current.offsetHeight;
    
    // Set a taller height for the form
    setContainerHeight("500px"); // Adjust this value based on your form's needs
    setIsFormOpen(true);
  };
  
  // Handle closing the form - revert to original height
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setContainerHeight("auto");
  };
  
  return (
    <>
      <footer className="bg-[url('/asset/hand_streched.jpeg')] bg-cover bg-center bg-no-repeat mt-[7rem] px-5 py-10" id="bookus">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h3 className="text-white font-bold text-lg md:text-3xl py-4">
            Call or Visit
          </h3>

          {/* Container Box */}
          <div 
            ref={containerRef}
            style={{ height: containerHeight, transition: "height 0.3s ease" }}
            className="bg-white w-full max-w-3xl mx-auto my-6 rounded-lg shadow-lg relative"
          >
            {/* This container will be completely replaced by the feedback form when open */}
            {!isFormOpen ? (
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-xl md:text-2xl py-2">
                  Fusions Property Ltd
                </h3>

                {/* Dropdown (Opening Hours) */}
                <div className="mx-auto mt-2">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-center items-center p-2 rounded-lg cursor-pointer"
                  >
                    <span className="pr-2">Today Closed</span>
                    <IoIosArrowDown
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-2 shadow-md rounded-lg">
                      <ul className="py-2">
                        {[
                          "Mon 09:00 – 17:00",
                          "Tue 09:00 – 17:00",
                          "Wed 09:00 – 17:00",
                          "Thu 09:00 – 17:00",
                          "Fri 09:00 – 17:00",
                          "Sat 10:00 – 16:00",
                          "Sun Closed",
                        ].map((day, index) => (
                          <li
                            key={index}
                            className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
                          >
                            {day}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Business Hours - More compact */}
                <div className="py-3 text-sm md:text-base">
                  <p>Monday - Friday: 9am - 5pm</p>
                  <p>Saturday: 10am-4pm</p>
                  <p>Sunday: Closed</p>
                </div>

                {/* "Drop Us a Line" Button */}
                <p
                  onClick={handleOpenForm}
                  className="text-[#000] border-2 cursor-pointer px-6 py-2 mx-auto mt-3 uppercase text-sm md:text-base transition ease-in-out duration-300 font-semibold hover:bg-black hover:text-white w-fit"
                >
                  Drop Us a Line!
                </p>
              </div>
            ) : (
              <Feedback isOpen={isFormOpen} onClose={handleCloseForm} />
            )}
          </div>
        </div>
      </footer>
      <footer className="max-w-7xl mx-auto text-center pt-[2rem] pb-[1rem] px-[1rem]">
        <div>
            <Image src="/asset/bottom_logo.png" width={300} height={150} alt="Fusions Property Ltd Logo" className="md:block hidden"/>
            <Image src="/asset/bottom_logo.png" width={150} height={75} alt="Fusions Property Ltd Logo" className="md:hidden"/>
        </div>

        <div className="text-[#000] text-sm md:text-base py-[2.5rem]">
          <p className="md:text-[1.2rem] text-[0.9rem]">Connect with us on our Social Media Pages</p>
          <ul className="flex justify-center items-center gap-3 py-5">
            <li>
              <Link href="https://web.facebook.com/DFUSP/" target="_blank"><FaFacebookF className="w-[2rem] h-[2rem] border-1 border-[#00f] rounded-full p-1 text-[#fff] bg-[#00f]"/></Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/deefusionproperty_/?igsh=MXc1dzZ1Mm5pcTluYg%3D%3D&utm_source=qr#" target="_blank" ><FaInstagram className="w-[2rem] h-[2rem] border-1 border-[#e1306c] rounded-full p-1 text-[#fff] bg-[#e1306c]"/></Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@FusionProperty" target="_blank" ><AiFillYoutube className="w-[2rem] h-[2rem] border-1 border-[#f00] rounded-full p-1 text-[#fff] bg-[#f00]"/></Link>
            </li>
          </ul>
        </div>

          <p className="text-[#000] md:text-[1.2rem] text-[0.8rem] uppercase">
          Copyright &copy; 2025 Fusions Property Ltd - All Rights Reserved.
          </p>
          <p className="text-right pt-[1.2rem] md:text-[1rem] text-[0.9rem]">Powered by Ajay<span className="md:text-[1.2rem] text-[0.9rem] font-bold">Tech</span></p>
      </footer>
    </>
  );
};

export default Footer;