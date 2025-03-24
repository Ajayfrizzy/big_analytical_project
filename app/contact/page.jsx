import Nav from "@/components/Nav";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { LiaPhoneAltSolid } from "react-icons/lia";

const page = () => {
  return (
    <>
      <Nav />
      <section className="max-w-7xl mx-auto text-justify">
        <h3 className="text-center font-bold text-[1.5rem] uppercase py-[3rem]">
          Contact US
        </h3>
        <div className="max-w-3xl mx-auto">
          <p>
            TO ENQUIRE ABOUT THE AVAILABILITY OF ANY OF OUR ROOMS, OR FOR MORE
            INFORMATION ABOUT WHAT WE DO, PLEASE CONTACT BY EITHER CALLING US,
            SENDING US AN EMAIL OR SIMPLY FILL OUT THE FORM BELOW.
          </p>
          <Link
            href="mailto:INFO@FUSIONPROPERTY.CO.UK"
            className="flex items-center gap-2 underline py-3"
          >
            <span>
              <CiMail />
            </span>
            INFO@FUSIONPROPERTY.CO.UK
          </Link>
          <Link href="tel:07367783778" className="flex items-center gap-2 underline py-3">
            <span>
              <LiaPhoneAltSolid />
            </span>
            07367783778
          </Link>
          <address>15 Lewdendale Worsbrough Barnsley S70 5DT</address>
        </div>
      </section>
    </>
  );
};

export default page;
