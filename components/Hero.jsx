import Link from "next/link";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden mt-[7.5rem]">
      {/* Slider */}
      <div className="absolute inset-0 z-0">
        <Slider />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none z-10"></div>

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center md:px-4 z-20 pointer-events-none">
        <div className="max-w-7xl px-4">
          <h1 className="md:text-[3.5rem] text-[1.5rem] font-bold md:px-[2rem]">
            <span className="block bg-black/20 px-2 py-1 mb-1 md:px-4">
              Whether you are a Landlord looking for guaranteed rent or an agent.
            </span>
          </h1>
          <p className="md:text-[1.8rem] text-[1.2rem] md:px-0 py-[1rem] md:py-[2rem] font-bold">
            <span className="inline-block bg-black/20 px-2 py-1 md:px-4 md:py-2">
              We make property management a breeze!
            </span>
          </p>
          <Link
            href="/listings"
            className="pointer-events-auto bg-black/20 border-3 border-white px-[2rem] py-[0.8rem] uppercase text-[0.9rem] font-semibold hover:bg-white hover:text-black transition ease-in-out my-2 md:my-5 backdrop-blur-sm inline-block"
          >
            see listings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
