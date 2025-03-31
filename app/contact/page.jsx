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
        <div className="max-w-3xl mx-auto px-4 md:px-0">
          <p>
            TO ENQUIRE ABOUT THE AVAILABILITY OF ANY OF OUR ROOMS, OR FOR MORE
            INFORMATION ABOUT WHAT WE DO, PLEASE CONTACT BY EITHER CALLING US,
            SENDING US AN EMAIL OR SIMPLY FILL OUT THE FORM BELOW.
          </p>
          <Link
            href="mailto:INFO@FUSIONPROPERTY.CO.UK"
            className="flex items-center gap-2 underline py-3"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <CiMail />
            </span>
            INFO@FUSIONPROPERTY.CO.UK
          </Link>
          <Link
            href="tel:07367783778"
            className="flex items-center gap-2 underline py-3"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <LiaPhoneAltSolid />
            </span>
            07367783778
          </Link>
          <address>
            Unit 805 The gateway 74-79 Broad Street Sheffield S2 5TN
          </address>
        </div>
      </section>
    </>
  );
};

export default page;
