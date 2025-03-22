import Nav from "@/components/Nav";
import Image from "next/image";

const page = () => {
  return (
    <>
    <Nav />
      <section className="max-w-7xl mx-auto text-center md:text-justify py-[5rem]">
        <div className="flex items-center flex-col md:flex-row gap-3">
        {/* Image section */}
        <div className="w-[100%] h-[100%] flex justify-center py-[2rem] md:py-0 flex-wrap gap-3">
            <Image
              src="/asset/big-house.jpeg"
              alt="What We Do 3"
              width={400}
              height={700}
              />
            <Image
              src="/asset/big-house.jpeg"
              alt="What We Do 3"
              width={400}
              height={700}
              className="hidden md:block"
              />
        </div>

        {/* Text section */}
        <div className="w-[100%] mx-auto px-5">
          <h2 className="py-3">
            <span className="text-2xl font-bold block pb-2">Tenants</span>
            <span className="text-[#676767] text-xl"> What we offer?</span>
          </h2>
          <h2 className="py-3">
            <span className="text-2xl font-bold block pb-2">Fully Furnished</span>
            <span className="text-[#676767] text-xl">
              All rooms are fully furnished, with double beds, wardrobes and
              chest of drawers.
            </span>
          </h2>
          <h2 className="py-3">
            <span className="text-2xl font-bold block pb-2">Fortnightly Cleaner</span>
            <span className="text-[#676767] text-xl">
              A cleaner visits fortnightly, cleaning kitchens, bathrooms and all
              communal areas.
            </span>
          </h2>
          <h2 className="py-3">
            <span className="text-2xl font-bold block pb-2">Wifi</span>
            <span className="text-[#676767] text-xl">All houses have Wifi included.</span>
          </h2>
          <h2 className="py-3">
            <span className="text-2xl font-bold block pb-2">TV</span>
            <span className="text-[#676767] text-xl">Lounge with a large flat screen TV and comfy sofa</span>
          </h2>
          <h2 className="py-3">
            <span className="text-2xl font-bold block pb-2">Professional Service & Care</span>
            <span className="text-[#676767] text-xl">
              We believe a house should feel like home. That’s why we are
              committed to providing properties that are kept in immaculate
              condition and shared by friendly people. We only rent to working
              professionals and mature students whose priority is to live in a
              high-quality and comfortable house with like-minded housemates.
            </span>
          </h2>
          <h2 className="py-3">
            <span className="text-2xl font-bold block pb-2">Zero Deposit Scheme</span>
            <span className="text-[#676767] text-xl">
              One of the most expensive parts of moving into any rental property
              is the deposit, which is why here at Fusion’s Management we offer
              several options to you.
            </span>
          </h2>
          <h2 className="py-3">
            <span className="text-2xl font-bold block pb-2">Deposit Replacements</span>
            <span className="text-[#676767] text-xl">
              Deposit replacements are products that are designed to give you,
              as the tenant, more choice. Our landlords will accept a Zero
              Deposit Guarantee. You purchase the Zero Deposit Guarantee, which
              costs the same as one week’s rent, and this buys the landlord the
              same cover as a security deposit. If there are any deductions Zero
              Deposit uses TDS, one of the government-backed schemes, decides
              what you are responsible for. Zero Deposit then pays the landlord
              and you pay Zero Deposit.
            </span>
          </h2>
        </div>
        </div>
      </section>
    </>
  );
};

export default page;
