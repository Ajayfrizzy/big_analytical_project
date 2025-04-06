import Nav from "@/components/Nav";

const page = () => {
  return (
    <>
      <Nav />
      {/* What we do 2 */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10 text-center mt-[7.8rem]">
        <div className="pt-4 md:pt-[1.5rem] pb-4 md:pb-[1.8rem]">
          <h2 className="text-xl md:text-[2rem] font-bold">Landlords</h2>
          <span className="border-b-2 border-[#5dd2b4] w-16 md:w-24 mx-auto block pt-2"></span>
        </div>
        <div className="text-[#707070] text-base md:text-[1.2rem]">
          <span className="block underline uppercase font-bold">
            HOW IT WORKS
          </span>

          <div className="w-full md:w-[80%] lg:w-[60%] mx-auto text-sm md:text-base py-3 md:py-[1.2rem] px-3 md:px-0">
            <h2 className="font-bold pt-3 md:pt-[1rem] text-lg md:text-[1.5rem]">
              We are your tenants
            </h2>
            <span className="block py-2 md:py-[1rem] break-words">
              We rent the property from you for three or more years and
              effectively become your tenants. If needed, we bring the property
              up to the requirements of our customers. We then rent the rooms on
              individual AST's and take care of everything.
            </span>
            <span className="block py-2 md:py-[1rem] break-words">
              As we are your tenants you will only ever have to deal with us.
              When renting a property there are of course lots of variables to
              consider, too many hidden costs eat away at your monthly profit.
              At the end of the day you ask yourself 'why you are doing it'?
            </span>
            <span className="block py-2 md:py-[1rem] break-words">
              We start paying you your guaranteed rent as soon as the property
              is ready to let. This could be from the day we sign the lease or
              as soon as any refurb is carried out depending on what work is
              required.
            </span>
          </div>

          <div className="w-full md:w-[80%] lg:w-[60%] mx-auto text-sm md:text-base py-3 md:py-[1.2rem] px-3 md:px-0">
            <h2 className="font-bold pt-3 md:pt-[1rem] text-lg md:text-[1.5rem]">Management with care</h2>
            <span className="block py-2 md:py-[1rem] break-words">
              We work hard to consistently maintain the best standards in all
              areas. We are not like high-street agents; in fact we couldn't be
              more different. Can you imagine a high street agent offering to
              refurb your property or arranging a fortnightly cleaner or a
              gardener?
            </span>
            <span className="block py-2 md:py-[1rem] break-words">
              We take such great care of the properties that they are often in
              better condition by the end of the contract period than they were
              at the start. Consequently, we find that most of the landlords,
              who use our services, choose to extend their contracts over and
              over again.​
            </span>
          </div>

          <div className="w-full md:w-[80%] lg:w-[60%] mx-auto text-sm md:text-base py-3 md:py-[1.2rem] px-3 md:px-0">
            <h2 className="font-bold pt-3 md:pt-[1rem] text-lg md:text-[1.5rem]">Responsibility for tenants</h2>
            <span className="block py-2 md:py-[1rem] break-words">
              We have operated both as landlord and agents for a long time and
              therefore really understand the importance of selecting only the
              best-quality tenants for the property. All of our tenants are
              young professionals who are thoroughly vetted prior to moving in.
              After all, from day one we take responsibility for any lost rent,
              potential damage or misbehaviour.
            </span>
            <span className="block py-2 md:py-[1rem] break-words">
              We also deal with calls, emergencies and in fact all tenant
              issues. You will also never again have to worry about voids – a
              recent survey by Spare Room showed that most properties have a
              void period of at least six weeks per year so this is a
              significant factor.
            </span>
          </div>

          <div className="w-full md:w-[80%] lg:w-[60%] mx-auto text-sm md:text-base py-3 md:py-[1.2rem] px-3 md:px-0">
            <h2 className="font-bold pt-3 md:pt-[1rem] text-lg md:text-[1.5rem]">Too good to be true?</h2>
            <span className="block py-2 md:py-[1rem] break-words">
              Some landlords have initially said no to us because they can’t see
              where we would make our money, and experience has taught them how
              tough this industry can be.
            </span>
          </div>

          <div className="w-full md:w-[80%] lg:w-[60%] mx-auto text-sm md:text-base py-3 md:py-[1.2rem] px-3 md:px-0">
            <h2 className="font-bold pt-3 md:pt-[1rem] text-lg md:text-[1.5rem]">So how do we do it?</h2>
            <span className="block py-2 md:py-[1rem] break-words">
              The monthly rent we pay you may be slightly lower than high-street
              agents, however the benefits and guarantees we offer more than
              compensate so that your income actually increases. We become
              completely responsible for the management of your property and the
              various risks involved, while you receive guaranteed rental
              payments for the duration of our contract. Our profit is the
              difference. Simple.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;