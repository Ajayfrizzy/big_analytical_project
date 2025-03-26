import Link from "next/link"


const Hero = () => {
  return (
    <>
    <section className="bg-[url('/asset/mansion_with_pool.png')] bg-cover bg-center bg-no-repeat">

        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen text-white text-center">
            <h1 className="md:text-[3.5rem] text-[2rem] font-bold px-[4rem]">Whether you are a Landlord looking for guaranteed rent or an agent.</h1>
            <p className="md:text-[1.8rem] text-[1.2rem] px-4 md:px-0 py-[2rem] font-bold">We make property management a breeze!</p>
            <Link href="/listings" className="border-3 border-white px-[2rem] py-[0.8rem] uppercase text-[0.9rem] font-semibold hover:bg-white hover:text-black transition ease-in-out my-5">see listings</Link>
        </div>
    </section>
    </>
  )
}

export default Hero