'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@styles/globals.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white text-black shadow-2xl sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-2 px-4">
        <div className="border-2 border-[#FAF9F6] rounded-3xl">
          <Image src="/asset/top_logo.png" alt="Fusion Property Logo" width={100} height={100} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-5 text-lg font-semibold gap-5 uppercase">
          <Link href="/" className="hover:text-blue-500 transition duration-300">home</Link>
          <Link href="/contact" className="hover:text-blue-500 transition duration-300">contact us</Link>
          <Link href="/about" className="hover:text-blue-500 transition duration-300">book now</Link>
          <Link href="/faq" className="hover:text-blue-500 transition duration-300">faq</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoIosClose size={30} /> : <GiHamburgerMenu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden flex flex-col items-center bg-white shadow-xl py-4 uppercase ${isOpen ? 'block' : 'hidden'}`}
      >
        <Link href="/" className="hover:text-blue-500 py-4 transition duration-300" onClick={() => setIsOpen(false)}>home</Link>
        <Link href="/contact" className="hover:text-blue-500 py-4 transition duration-300" onClick={() => setIsOpen(false)}>contact us</Link>
        <Link href="/about" className="hover:text-blue-500 py-4 transition duration-300" onClick={() => setIsOpen(false)}>book now</Link>
        <Link href="/faq" className="hover:text-blue-500 py-4 transition duration-300" onClick={() => setIsOpen(false)}>faq</Link>
      </motion.div>
    </div>
  );
};

export default Nav;
