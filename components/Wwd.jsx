import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Wwd = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto text-center py-[5rem]">
        <p className="uppercase font-bold text-[1.2rem] text-[#707070]">
          What we do
        </p>

        {/* What we do 1 */}
        <div className="flex items-center flex-col md:flex-row gap-3 py-[3rem]">
          <div className="w-[100%] flex justify-center py-[2rem] md:py-0 px-5 md:px-0">
            <Image
              src="/asset/team.jpeg"
              alt="What We Do 1"
              width={500}
              height={400}
            />
          </div>

          <div className="w-[100%] mx-auto px-5">
            <h2 className="text-[2rem] font-bold pb-2 md:py-0">
              Estate Agents
            </h2>
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

            {/* <Link
              href="#"
              className="uppercase flex items-center justify-center text-[#7d7660] pb-2"
            >
              <span className="pr-3 border-b-2 border[#7d7660] text-[0.9rem]">
                Read more
              </span>
              <IoIosArrowForward />
            </Link> */}
          </div>
        </div>

        {/* What we do 2 */}
        <div className="flex items-center flex-col-reverse md:flex-row gap-3 py-[3rem]">
          <div className="w-[100%] mx-auto px-5">
            <h2 className="text-[2rem] font-bold pb-2 md:py-0">Landlords</h2>
            <p className="text-[#707070] text-[1.2rem] pb-5">
              <span className="block underline uppercase font-bold">HOW IT WORKS</span>
              <span className="block font-bold">We are your tenants</span>
              <span>
                We rent the property from you for three or more years and
                effectively become your tenants. If needed, we bring the
                property up to the requirements of our customers. We then rent
                the rooms on individual AST’s and take care of everything. As we
                are your tenants you will only ever have to deal with us. When
                renting a property there are of course lots of variables to
                consider, too many hidden costs eat away at your monthly profit.
                At the end of the day you ask yourself 'why you are doing it'?
              </span>
            </p>

            <Link
              href="/landlord"
              className="uppercase flex items-center justify-center text-[#7d7660] pb-2"
            >
              <span className="pr-3 border-b-2 border[#7d7660] text-[0.9rem]">
                Read more
              </span>
              <IoIosArrowForward />
            </Link>
          </div>

          <div className="w-[100%] flex justify-center py-[2rem] md:py-0 px-5 md:px-0">
            <Image
              src="/asset/team.jpeg"
              alt="What We Do 1"
              width={500}
              height={400}
            />
          </div>
        </div>

        {/* What we do 3 */}
        <div className="flex items-center flex-col md:flex-row gap-3 py-[3rem]">
          <div className="w-[100%] flex justify-center py-[2rem] md:py-0 px-5 md:px-0">
            <Image
              src="/asset/team.jpeg"
              alt="What We Do 1"
              width={500}
              height={400}
            />
          </div>

          <div className="w-[100%] mx-auto px-5">
            <h2 className="text-[2.5rem] font-bold py-4">Tenants</h2>
            <p className="text-[#707070] text-[1.2rem] pb-5">
              <span className="block font-bold underline text-[#5e5e5e]">
                What we offer?
              </span>
              <span className="block font-bold text-[#000] text-[2.5rem] py-2">
                Fully Furnished
              </span>
              All rooms are fully furnished, with double beds, wardrobes and
              chest of drawers.
            </p>

            <Link
              href="/tenant"
              className="uppercase flex items-center justify-center text-[#7d7660] pb-2"
            >
              <span className="pr-3 border-b-2 border[#7d7660] text-[0.9rem]">
                Find out more
              </span>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wwd;
