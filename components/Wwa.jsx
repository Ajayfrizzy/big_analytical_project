"use client";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Wwa = () => {
  return (
    <section className="max-w-7xl mx-auto text-center">
      <motion.div
        className="md:w-[50%] w-[100%] px-5 md:px-0 mx-auto py-[3rem] md:py-[5rem]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Title Animation */}
        <motion.h2
          className="text-[2rem] font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Who We Are
        </motion.h2>

        {/* Text & Border Animation */}
        <motion.div
          className="flex py-[2.5rem]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="border-l-4 border-[#999076] pr-[2rem] md:block hidden"></p>
          <p className="text-[#707070] text-[1rem] md:text-[1.5rem] px-[2rem] md:px-0">
            We are a property management company specialising in Corporate Lets, 
            Houses of Multiple Occupancy (HMOs) and Serviced Accommodation (SA). 
            We offer guaranteed rents over minimum length contracts of three years, 
            free maintenance and 0% commission.
          </p>
        </motion.div>

        {/* Read More Link Animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/wwa" className="uppercase flex items-center justify-center text-[#7d7660]">
            <span className="pr-3 border-b-2 border-[#7d7660] text-[0.9rem]">
              Read more
            </span>
            <IoIosArrowForward />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Wwa;
