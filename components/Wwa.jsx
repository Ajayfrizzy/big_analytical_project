import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io";


const Wwa = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto text-center">
        <div className="md:w-[50%] w-[100%] px-5 md:px-0 mx-auto py-[3rem] md:py-[5rem]">
            <h2 className="text-[2rem] font-bold">Who We Are</h2>
            <div className="flex py-[2.5rem]">
            <p className="border-l-4 border-[#999076] pr-[2rem] md:block hidden"></p>
            <p className="text-[#707070] text-[1.5rem]">We are a property management company specialising in Corporate Lets, Houses of Multiple Occupancy (HMOs) and Serviced Accommodation (SA). We offer guaranteed rents over minimum length contracts of three years, free maintenance and 0% commission.</p>
            </div>
            <Link href="/wwa" className="uppercase flex items-center justify-center text-[#7d7660]">
                    <span className="pr-3 border-b-2 border[#7d7660] text-[0.9rem] border-w-[10%]">Read more</span>
                    <IoIosArrowForward/>
            </Link>
        </div>
    </section>
    </>
  )
}

export default Wwa