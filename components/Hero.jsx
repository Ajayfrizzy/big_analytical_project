import Link from "next/link";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Slider as background with lower z-index */}
      <div className="absolute inset-0 z-0">
        <Slider />
      </div>
      
      {/* Light vignette overlay with higher z-index than slider but lower than content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 z-[5] pointer-events-none"></div>
      
      {/* Hero content overlaid on slider with highest z-index */}
      <div className="relative z-[15] max-w-7xl mx-auto flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="md:text-[3.5rem] text-[1.5rem] font-bold md:px-[4rem]">
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
          className="bg-black/20 border-3 border-white px-[2rem] py-[0.8rem] uppercase text-[0.9rem] font-semibold hover:bg-white hover:text-black transition ease-in-out my-2 md:my-5 backdrop-blur-sm"
        >
          see listings
        </Link>
      </div>
    </div>
  );
};

export default Hero;