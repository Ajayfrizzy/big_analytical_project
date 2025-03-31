"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Wwd = () => {
  return (
    <section className="max-w-7xl mx-auto text-center py-[5rem]">
      {/* Section Title */}
      <motion.p
        className="uppercase font-bold text-[1.2rem] text-[#707070]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What we do
      </motion.p>

      {/* What we do 1 */}
      <motion.div
        className="flex items-center flex-col md:flex-row gap-3 py-[3rem]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-[100%] flex justify-center py-[2rem] md:py-0 px-5 md:px-0"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src="/asset/uk_house_1.jpeg" alt="What We Do 1" width={400} height={300} />
        </motion.div>

        <motion.div
          className="w-[100%] mx-auto px-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[2rem] font-bold pb-2 md:py-0">Estate Agents</h2>
          <p className="text-[#707070] text-[1.2rem] pb-5">
          CREATING A WIN-WIN SITUATION With locations all around Yorkshire,
              we are constantly searching for new properties to add to our
              expanding portfolio. We primarily focus on properties located in
              Yorkshire and surroundings areas. Our business approach reflects
              our core values about creating win-win relationships and providing
              complete business transparency and professionalism. This is what
              we offer to estate agents across Yorkshire and surroundings. When
              you choose to rent your properties with us, we guarantee peace of
              mind, regular monthly rental payments as well as property
              maintenance conducted by our team of experienced and trained
              professionals.
          </p>
        </motion.div>
      </motion.div>

      {/* What we do 2 */}
      <motion.div
        className="flex items-center flex-col-reverse md:flex-row gap-3 py-[3rem]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="w-[100%] mx-auto px-5">
          <h2 className="text-[2rem] font-bold pb-2 md:py-0">Landlords</h2>
          <p className="text-[#707070] text-[1.2rem] pb-5">
            <span className="block underline uppercase font-bold py-4">HOW IT WORKS</span>
            <span className="block font-bold py-4">We are your tenants</span>
          </p>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Link href="/landlord" className="uppercase flex items-center justify-center text-[#7d7660] pb-2">
              <span className="pr-3 border-b-2 border-[#7d7660] text-[0.9rem]">Read more</span>
              <IoIosArrowForward />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-[100%] flex justify-center py-[2rem] md:py-0 px-5 md:px-0"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src="/asset/uk_house_2.jpeg" alt="What We Do 2" width={400} height={300} />
        </motion.div>
      </motion.div>

      {/* What we do 3 */}
      <motion.div
        className="flex items-center flex-col md:flex-row gap-3 py-[3rem]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-[100%] flex justify-center py-[2rem] md:py-0 px-5 md:px-0"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src="/asset/uk_house_3.jpeg" alt="What We Do 3" width={400} height={300} />
        </motion.div>

        <motion.div
          className="w-[100%] mx-auto px-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[2.5rem] font-bold py-4">Tenants</h2>
          <p className="text-[#707070] text-[1.2rem] pb-5">
            <span className="block font-bold underline text-[#5e5e5e]">What we offer?</span>
            <span className="block font-bold text-[#000] text-[2.5rem] py-2">Fully Furnished</span>
            All rooms are fully furnished...
          </p>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Link href="/tenant" className="uppercase flex items-center justify-center text-[#7d7660] pb-2">
              <span className="pr-3 border-b-2 border-[#7d7660] text-[0.9rem]">Find out more</span>
              <IoIosArrowForward />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Wwd;
