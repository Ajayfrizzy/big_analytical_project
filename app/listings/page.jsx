'use client'

import Nav from "@/components/Nav";
import { motion } from "framer-motion";

const Listings = () => {
  return (
    <>
    <Nav/>
      <section className="max-w-7xl mx-auto px-4" id="listings">
        <motion.h2
          className="text-4xl my-[3rem] font-bold text-center uppercase text-[#707070]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Listings
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 items-center justify-center">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <motion.div
                key={index}
                className="bg-[url('/asset/square-house.png')] bg-cover bg-center bg-no-repeat h-[35vh] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-white font-bold text-3xl">Not Available</h3>
              </motion.div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Listings;