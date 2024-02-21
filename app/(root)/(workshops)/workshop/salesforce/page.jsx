import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import React from "react";

const ProgramFor = [
  {
    _id: 1,
    title: "BCA / MCA Graduates",
  },
  {
    _id: 2,
    title: "Engineering Students",
  },
  {
    _id: 3,
    title: "Data Science Enthusiasts",
  },
  {
    _id: 4,
    title: "Business Professionals",
  },
  {
    _id: 5,
    title: "Graphic Designers",
  },
  {
    _id: 6,
    title: "Web Developers",
  },
  {
    _id: 7,
    title: "Artificial Intelligence Researchers",
  },
  {
    _id: 8,
    title: "Marketing Experts",
  },
];

const Benefits = [
  {
    _id: 1,
    title: "Learn the foundations of Salesforce from scratch",
    imgUrl: "/assets/workshops/pencil.svg",
  },
  {
    _id: 2,
    title: "Understand the career opportunities in the Salesforce ecosystem",
    imgUrl: "/assets/workshops/star.svg",
  },
  {
    _id: 3,
    title: "Gain insights from real-world industry experiences",
    imgUrl: "/assets/workshops/bulb.svg",
  },
  {
    _id: 4,
    title: "Interactive Q&A session to get your queries answered",
    imgUrl: "/assets/workshops/flash.svg",
  },
];

const Agendas = [
  {
    _id: 1,
    title: "Introduction to Salesforce",
    description:
      "Learn about the basics of Salesforce and its importance in the industry.",
  },
  {
    _id: 2,
    title: "Career Opportunities in the Salesforce Ecosystem",
    description:
      "Explore the various career paths and job opportunities available in the Salesforce ecosystem.",
  },
  {
    _id: 3,
    title: "Building Blocks of Salesforce Knowledge",
    description:
      "Understand the key components and concepts of Salesforce that form the foundation of your knowledge.",
  },
  {
    _id: 4,
    title: "Q&A Session",
    description:
      "Engage in a question and answer session to clarify doubts and queries related to Salesforce.",
  },
  {
    _id: 5,
    title: "Exclusive Offer: Unlock Full Salesforce Course",
    description:
      "Introduction to the comprehensive Salesforce course offered by Coding Commando. Special discount or bonuses for workshop attendees who enroll in the full course.",
  },
  {
    _id: 6,
    title: "Closing and Call to Action",
    description:
      "Wrap up the workshop with a summary of key takeaways and encourage attendees to take action, such as signing up for further courses or resources.",
  },
];

const Faqs = [
  {
    _id: 1,
    title: "Introduction to Salesforce",
    description:
      "Learn about the basics of Salesforce and its importance in the industry.",
  },
  {
    _id: 2,
    title: "Career Opportunities in the Salesforce Ecosystem",
    description:
      "Explore the various career paths and job opportunities available in the Salesforce ecosystem.",
  },
  {
    _id: 3,
    title: "Building Blocks of Salesforce Knowledge",
    description:
      "Understand the key components and concepts of Salesforce that form the foundation of your knowledge.",
  },
  {
    _id: 4,
    title: "Q&A Session",
    description:
      "Engage in a question and answer session to clarify doubts and queries related to Salesforce.",
  },
  {
    _id: 5,
    title: "Exclusive Offer: Unlock Full Salesforce Course",
    description:
      "Introduction to the comprehensive Salesforce course offered by Coding Commando. Special discount or bonuses for workshop attendees who enroll in the full course.",
  },
  {
    _id: 6,
    title: "Closing and Call to Action",
    description:
      "Wrap up the workshop with a summary of key takeaways and encourage attendees to take action, such as signing up for further courses or resources.",
  },
];

const SaleForceWorkshop = () => {
  return (
    <div className="h-full w-full bg-dark-purple">
      <div
        className="m-auto flex w-full max-w-4xl flex-col items-center gap-8  py-10 text-center
      "
      >
        <Image
          src={"/assets/icons/logo.svg"}
          width={150}
          height={150}
          alt="Coding Commando"
        />
        <h1 className="text-5xl font-semibold leading-[63.13px] text-white ">
          Unleash Your Potential:{" "}
          <span className="text-[#4BC8DE]">Salesforce </span> Career Kickstart
          Workshop
        </h1>
        <p className="text-lg font-normal text-white">
          Master the Salesforce Domain with Industry Expert Prateek Prasoon!
        </p>
        <button className="rounded-full border-b-[3px] bg-[#F5478E] px-24 py-1 text-[28px] font-medium  text-white">
          Reserve Seat now for Rs 249/-
        </button>
        <div className="my-8 flex gap-10">
          <Image
            src="/assets/workshops/prateek-prasoon.svg"
            alt="Prateek Prasoon"
            width={150}
            height={250}
          />
          <div className=" text-start text-white">
            <p className="text-sm text-[#F595FF]">Instructed by</p>
            <h3 className="text-xl font-semibold">Prateek Prasoon</h3>
            <p className="text-sm">Founder of CloudPrism Solutions </p>
            <div className="mt-2 flex gap-x-6">
              <p>26 Sept 2023</p>
              <p>11:00 AM - 12:00 PM</p>
            </div>
            <div
              className="mt-3
flex items-center justify-center rounded-full border-2 border-dashed border-[#5CFFCE] p-2"
            >
              <p className="text-[#5CFFCE]">Limited Seat Available</p>
            </div>
          </div>
        </div>
        <div className="h-full w-full ">
          <div className="mx-32 flex h-80 max-w-4xl items-center justify-center rounded-3xl bg-white text-center">
            Video or Photo
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-center  gap-6 rounded-[74px] bg-white py-6">
        <h1 className="text-4xl font-medium">Who is this program for?</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {ProgramFor &&
            ProgramFor.map((program) => (
              <div
                key={program._id}
                className="flex items-center gap-4 rounded-3xl bg-[#7B10C8]/10 px-3 py-2.5"
              >
                <Image
                  src={"/assets/workshops/tick.svg"}
                  width={25}
                  height={25}
                  alt="Tick"
                />
                <p className="text-base">{program?.title}</p>
              </div>
            ))}
        </div>
        <button className="my-4 rounded-3xl bg-[#F5478E] px-24 py-2.5 text-2xl font-medium  text-white">
          Kickstart your Salesforce Carrer at just Rs 249/-{" "}
        </button>
      </div>
      <div className="mx-auto flex max-w-4xl flex-col gap-8 py-6 text-center">
        <h1 className="mt-4 text-3xl font-medium text-white ">Benifits</h1>
        <div className="flex">
          {Benefits &&
            Benefits.map((benefit) => (
              <div
                key={benefit._id}
                className="flex flex-col items-center gap-6 text-start"
              >
                <Image
                  src={benefit.imgUrl}
                  alt={benefit.title}
                  width={70}
                  height={70}
                />
                <p className="text-white">{benefit.title}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-center gap-6 rounded-[74px] bg-white py-6">
        <h1 className="text-4xl font-medium">Agenda</h1>
        <div className="mt-4 h-[510px] w-[80%]">
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col gap-4"
          >
            {Agendas ? (
              Agendas.map((agenda) => (
                <AccordionItem
                  key={agenda._id}
                  value={`item-${agenda._id}`}
                  className="rounded-[25px] border-none bg-[#7B10C8]/10 px-6 "
                >
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex gap-4">
                      <Image
                        src={"/assets/workshops/tick.svg"}
                        width={25}
                        height={25}
                        alt="Tick"
                      />
                      {agenda.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-10 text-sm font-normal">
                    {agenda.description}
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <p>No agenda items available.</p>
            )}
          </Accordion>
        </div>
      </div>

      <div
        className="mx-auto mt-20 flex max-w-4xl flex-col items-center 
      "
      >
        <div className="m-4 w-full text-center">
          <h2 className=" text-4xl font-medium text-white">
            Meet Your <span className="text-[#F5478E]">Instructor </span>
          </h2>
        </div>
        <div className="mt-6 flex max-w-3xl justify-between ">
          <Image
            src="/assets/workshops/prateek-prasoon.svg"
            alt="Prateek Prasoon"
            width={200}
            height={300}
          />
          <div className="flex  flex-col gap-4 p-6 text-white">
            <h2 className="text-3xl font-semibold">Prateek Prasoon</h2>
            <div className="flex max-w-sm flex-col gap-2 pl-12 text-sm font-normal">
              <p>
                Founder of CloudPrism Solutions With over 7 years of hands-on
                Salesforce expertise, Prateek has guided numerous individuals to
                successful careers in the tech industry.
              </p>
              <p>
                Founder of CloudPrism Solutions With over 7 years of hands-on
                Salesforce expertise, Prateek has guided numerous individuals to
                successful careers in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-4xl flex-col gap-8 py-12   text-center">
        <h2 className="text-4xl text-white">Frequently Asked Questions</h2>

        <div className="text-start text-white">
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col gap-4"
          >
            {Faqs ? (
              Faqs.map((faq) => (
                <AccordionItem
                  key={faq._id}
                  value={`item-${faq._id}`}
                  className="rounded-[25px] border border-[#4F4F4F] px-4 "
                >
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex gap-4">
                      <Image
                        src={"/assets/workshops/tick.svg"}
                        width={25}
                        height={25}
                        alt="Tick"
                      />
                      {faq.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-14  text-sm font-normal">
                    {faq.description}
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <p>No agenda items available.</p>
            )}
          </Accordion>
        </div>
        <button className="mt-4 rounded-3xl bg-[#F5478E] px-24 py-2.5 text-2xl font-medium  text-white">
          Reserve My Seat Now!{" "}
        </button>
      </div>

      <footer className="mx-auto mt-10 flex max-w-4xl justify-between">
        <div className="flex max-w-sm flex-col gap-8">
          <Image
            src={"/assets/icons/logo.svg"}
            width={180}
            height={180}
            alt="Coding Commando"
          />
          <h3 className="text-2xl font-medium text-white">Contact Us</h3>
          <p className="text-[#BDBDBD]">
            Contact Us Sandesh sadan near mamta apartment, south shivpuri Patna
            800023
          </p>
        </div>{" "}
        <div className="max-w-sm">
          <p className="text-[#BDBDBD]">+917870081711</p>
          <p className="text-[#BDBDBD]">join@codingcommando.in</p>
        </div>
      </footer>
    </div>
  );
};

export default SaleForceWorkshop;
