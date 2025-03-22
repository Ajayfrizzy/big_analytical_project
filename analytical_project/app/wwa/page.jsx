import Nav from "@/components/Nav"
import Image from "next/image"

const page = () => {
  return (
    <>
    <Nav/>
    <section className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mt-[2rem] text-[#707070]">Who We Are</h2>

        <div className="flex flex-col md:flex-row py-[5rem]">
            <div className="w-[100%] flex justify-center items-center md:block hidden pt-[2rem]">
                <Image src="/asset/big-house.jpeg" alt="Big-House" width={350} height={750} className="block mx-auto"/>
            </div>
            <div className="md:hidden block flex justify-center pb-[2rem]">
                <Image src="/asset/square-house.png" alt="Square-House" width={300} height={300} className="w-[90vw]"/>
            </div>

            <div className="w-[100%] mx-auto md:pr-[5rem] px-[2rem] md:px-0">
                <ul className="list-disc text-[1.2rem] text-[#707070] md:text-justify text-center">
                    <li className="pb-2">We are a property management company specialising in Corporate Lets, Houses of Multiple Occupancy (HMOs) and Serviced Accommodation (SA). We offer guaranteed rents over minimum length contracts of three years, free maintenance and 0% commission.</li>
                    <li className="pb-2">As a professional property management company, it is our mission to provide a supreme level of professional care and management for both landlords, estate agents and residents. We have established a trusted community where residents can enjoy a positive and social environment and where landlords and investors can enjoy peace of mind with financial security.  </li>
                    <li className="pb-2">We are looking for new homes in great locations for long term tenancies that guarantees your landlords security of tenancy. We create and design exclusive homes for working professional residents, the properties are taken care of by our experienced property managers and we provide the support and cleaning services to encourage the continued maintenance of your property. </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default page