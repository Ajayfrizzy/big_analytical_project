"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Nav from "@/components/Nav";

// Accordion Component
const Accordion = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="max-w-2xl mx-auto mt-[7rem] space-y-4" id="faqs">
      <p className="text-center text-[0.9rem] md:text-[1.2rem]">
        <span className="block font-bold uppercase text-[#595959]">Frequently Asked Questions</span>
        <span className="text-[#837c67] block py-4 px-3 text-[0.9rem] md:text-[1.2rem]">
          Please reach us at{" "}
          <Link href="mailto:info@fusionproperty.co.uk" className="text-blue-500 hover:underline">
            info@fusionproperty.co.uk
          </Link>{" "}
          if you cannot find an answer to your question.
        </span>
      </p>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg mx-4 md:mx-0"
        >
          {/* Header */}
          <button
            onClick={() => toggleItem(index)}
            className="flex justify-between items-center w-full p-4 text-sm md:text-lg font-semibold bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out text-justify"
          >
            <span className="pr-4 md:text-[1.2rem] text-[0.8rem]">{item.title}</span>
            <motion.span
              animate={{ rotate: openIndexes.includes(index) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <IoIosArrowDown size={24} />
            </motion.span>
          </button>

          {/* Content */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openIndexes.includes(index) ? "auto" : 0,
              opacity: openIndexes.includes(index) ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-4"
          >
            <p className="p-4 text-gray-700 text-sm md:text-lg">
              {item.content}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

// Main Page Component
const Faqs = () => {
  const accordionItems = [
    {
      title: "WHAT TYPE OF PROPERTY DO YOU DEAL WITH?",
      content:
        "All types – but normally properties with a minimum of 2 bedrooms. They can be with or without a garden or parking and the property doesn’t have to be in good condition but nice enough for tenants to move in. If you’re unsure whether your property fits the bill, why not contact us to find out more.",
    },
    {
      title: "HOW QUICKLY CAN YOU TAKE A PROPERTY ON?",
      content:
        "Once we have visited your property, within 24 hours we will make you a fair offer based on market conditions in your area. The price we agree to will be the price we pay for the duration of the contract, regardless of what happens to the market. If the property is vacant, we could be signing contracts and preparing the property for letting.",
    },
    {
      title: "DOES THE PROPERTY NEED TO BE FURNISHED?",
      content:
        "Not necessarily. We take on fully furnished, part-furnished and completely unfurnished properties. If you have previously rented to undergraduate students, the furniture may not be the type we normally use and would ask you to remove it. Our customers are professionals and postgraduate students who expect a higher standard of living than most undergraduate students. This would be reflected in the offer we make you. ",
    },
    {
      title: "WHAT ARE YOUR FEES?",
      content:
        "We don’t take fees from landlords. Nor do we charge tenant finder fees or the usual sky-high management fees. We make our profit from the difference between what the customer pays us and what we pay the landlord. ",
    },
    {
      title:
        "I HAVE A PROPERTY PORTFOLIO, DO YOU TAKE ON MULTIPLE PROPERTIES FROM SAME LANDLORD?",
      content:
        "Yes that’s not a problem. We can take on one or 20 houses from you, provided they meet our criteria.",
    },
    {
      title: "WILL I HAVE DEAL WITH TENANTS?",
      content:
        "No, we are essentially now your tenant. We deal with all of our customers’ phones calls, emails, viewings, meetings etc. We do all the legwork for you, so you can relax. ",
    },
    {
      title: "WHAT IF ONE OF THE CUSTOMERS ISN'T PAYING OR LATE PAYING?",
      content:
        "That’s our problem not yours. This very rarely happens in reality, but when it does, we cover the cost and you receive your full rent on time. ",
    },
    {
      title:
        "WHAT INPUT WILL I HAVE WITH THE PROPERTY ONCE I SIGN THIS CONTRACT WITH YOU?",
      content:
        "Once we take over the tenancy at the property, if you don’t want to, you wouldn’t have to set foot in the house again until the end of our contract. Of course, if you wanted to inspect the property, that’s fine. We will pay you the agreed rent each month via standing order, and we will give you updates on inspections and any maintenance required, including gas safety checks. We take all the hassle out of being a landlord, no tenant issues, no voids, no missing rents – just guaranteed rent every month and peace of mind. ",
    },
    {
      title: "DO YOU REFERENCE AND CREDIT CHECK TENANTS?",
      content:
        "Yes we do, on application we will check your references with your employer and current/previous landlords/agencies. We will also do a credit check. ",
    },
    {
      title: "WHAT HAPPEN WHEN TENANTS WANT TO LEAVE?",
      content:
        "Once you are out of your initial grace period contract all you need to do is give us one calendar month’s notice. We will advertise your room/house and give you a minimum of 24-hours notice that someone is coming to view your room/house.",
    },
    {
      title: "WHAT IS THE MINIMUM CONTRACT LENGTH FOR TENANTS?",
      content:
        "We normally ask for a minimum of six months, which then rolls month-by-month after your initial fixed term. If you have a short contract term at work we can arrange for a shorter contract length to suit. ",
    },
    {
      title: "ARE THERE ANY OTHER FEE OR CHARGES?",
      content: "No.",
    },
    {
      title: "WHICH BILLS ARE INCLUDED?",
      content:
        "All of them. That’s gas, electricity, water, council tax, broadband and TV licence (where TVs are provided). ",
    },
    {
      title: "HOW DO I PAY RENT?",
      content:
        "Rent is paid via a standing order, set up to reach our account on the 1st of every month. ",
    },
    {
      title: "CAN MY FRIEND OR FAMILY MEMBER COME STAY WITH ME?",
      content:
        "Of course. But no more than two nights per week unless previously agreed with us. And it’s always polite to mention it in advance to your other house-mates – how would you feel bumping into a stranger in the middle of the night.",
    },
    {
      title: "DO I NEED TO BRING KICTHEN EQUIPMENT?",
      content:
        "All properties have the basic equipment: plates, bowls, cutlery, sharp knives, chopping boards, pots and pans, mugs and glasses. However if you’re thinking of competing in the next series of The Great British Bake Off you may want to add to the collection…",
    },
    {
      title: "WHO DEALS WITH MAINTENANCE ISSUES?",
      content:
        " We do. But we depend on your cooperation on this. Please tell us as soon as you think there is an issue with anything in the house, no matter how big or small and we will organise the repairs. If it is a structural problem or general wear and tear the landlord will pay for it, but if someone has broken something – by accident or not – they will have to pay for it. We are always very fair and will listen to everyone’s explanation first. ",
    },
    {
      title:
        "CAN I USE JOBSEEKERS ALLOWANCE OR HOUSING BENEFIT TO PAY FOR THE RENT?",
      content:
        "No, I’m afraid this isn’t allowed. You need to be in full-time employment or be a mature/postgraduate student. We will ask for confirmation from your employer or university. ",
    },
  ];

  return (
    <>
    <Nav/>
      <Accordion items={accordionItems} />
    </>
  );
};

export default Faqs;
