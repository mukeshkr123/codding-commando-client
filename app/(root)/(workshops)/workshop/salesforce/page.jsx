import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Agendas,
  Benefits,
  Faqs,
  ProgramFor,
} from "data/workshops/salesforce-data";
import Image from "next/image";
import React from "react";

const SaleForceWorkshop = () => {
  return (
    <div className="h-full w-full bg-dark-purple">
      <div
        className="m-auto flex w-full max-w-4xl flex-col items-center gap-4 py-10 text-center  sm:gap-6 lg:gap-8
      "
      >
        <Image
          src={"/assets/icons/logo.svg"}
          width={200}
          height={200}
          alt="Coding Commando"
        />
        <h1 className="text-2xl font-bold leading-normal text-white sm:text-3xl md:text-4xl lg:text-[47px] lg:leading-[63.13px] ">
          Unleash Your Potential:{" "}
          <span className="text-[#4BC8DE]">Salesforce </span> Career Kickstart
          Workshop
        </h1>
        <p className="text-sm  font-normal text-white md:text-lg">
          Master the Salesforce Domain with Industry Expert Prateek Prasoon!
        </p>
        <button className="rounded-full border-b-[3px] bg-[#F5478E] px-6 py-1.5 font-semibold text-white transition  duration-300 ease-in-out hover:scale-105 hover:border-[#F5478E] hover:bg-[#F5478E]/90 lg:px-24 lg:text-[28px]">
          Reserve Seat now for Rs 249/-
        </button>

        <div className="my-8 flex w-full flex-col items-center justify-center gap-10 md:flex-row">
          <Image
            src="/assets/workshops/prateek-prasoon.svg"
            alt="Prateek Prasoon"
            width={150}
            height={250}
          />
          <div className=" flex flex-col gap-1 text-white  md:text-start">
            <p className="text-base font-normal text-[#F595FF]">
              Instructed by
            </p>
            <h3 className="text-xl font-semibold">Prateek Prasoon</h3>
            <p className="text-base font-normal">
              Founder of CloudPrism Solutions{" "}
            </p>
            <div className="mt-2 flex gap-x-6">
              <p>26 Sept 2023</p>
              <p>11:00 AM - 12:00 PM</p>
            </div>
            <div
              className="mt-3
flex items-center justify-center rounded-full border-2 border-dashed border-[#5CFFCE] p-2"
            >
              <p className="font-normal text-[#5CFFCE]">
                Limited Seat Available
              </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full ">
          <div className="mx-2.5 flex h-60 max-w-4xl items-center justify-center rounded-3xl bg-white text-center lg:mx-32 lg:h-80">
            Video or Photo
          </div>
        </div>
      </div>

      <div className="mx-2.5 mt-8 flex max-w-6xl flex-col items-center justify-center gap-6 rounded-3xl bg-white py-6 lg:mx-auto">
        <h1 className="mt-2 text-2xl font-bold md:text-3xl md:font-medium lg:text-4xl">
          Who is this program for?
        </h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {ProgramFor &&
            ProgramFor.map((program) => (
              <div
                key={program._id}
                className="flex items-center gap-4 rounded-3xl bg-[#7B10C8]/10 px-3 py-2.5 font-semibold"
              >
                <Image
                  src={"/assets/workshops/dark-tick.svg"}
                  width={25}
                  height={25}
                  alt="Tick"
                />
                <p className="text-base font-semibold">{program?.title}</p>
              </div>
            ))}
        </div>
        <button className="rounded-3xl bg-[#F5478E] px-3 py-2.5 text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-[#F5478E]/90 hover:opacity-90 sm:px-14 sm:py-3 sm:text-base md:my-4 lg:px-24 lg:text-2xl">
          Kickstart your Salesforce Career at just Rs 249/-
        </button>
      </div>

      <div className="mx-4 flex max-w-4xl flex-col gap-8 py-6 text-center lg:mx-auto">
        <h1 className="mt-6 text-4xl font-bold text-white ">Benefits</h1>
        <div className="mt-4 grid grid-cols-1 gap-y-10 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 ">
          {Benefits.map((benefit) => (
            <div
              key={benefit._id}
              className="flex flex-col  items-center gap-6 text-start"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full  md:h-32 md:w-32">
                <Image
                  src={benefit.imgUrl}
                  alt={benefit.title}
                  width={70}
                  height={70}
                />
              </div>
              <p className="w-64 text-center text-white  md:w-44">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 mt-8 flex max-w-6xl flex-col items-center justify-center gap-6 rounded-3xl bg-white py-6 lg:mx-auto">
        <h1 className="text-3xl font-bold md:text-4xl">Agenda</h1>
        <div className="mt-4 w-[90%] md:h-[470px] md:w-[80%]">
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
                  className="rounded-[25px] border-none bg-[#7B10C8]/10 px-2.5 md:px-6 "
                >
                  <AccordionTrigger className="text-start text-base  font-semibold md:text-lg">
                    <div className="flex gap-2 sm:gap-4">
                      <Image
                        src={"/assets/workshops/dark-tick.svg"}
                        width={25}
                        height={25}
                        alt="Tick"
                      />
                      {agenda.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="items-start px-8 text-sm font-normal md:px-10 lg:text-[15px]">
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
        className="mx-2 mt-10 flex max-w-4xl flex-col items-center md:mt-20 lg:mx-auto 
      "
      >
        <div className="m-4 w-full text-center">
          <h2 className=" text-3xl font-bold text-white md:text-5xl">
            Meet Your <span className="text-[#F5478E] ">Instructor </span>
          </h2>
        </div>
        <div className="mt-6 flex max-w-3xl flex-col items-center justify-between gap-x-24 md:flex-row ">
          <Image
            src="/assets/workshops/prateek-prasoon.svg"
            alt="Prateek Prasoon"
            width={220}
            height={320}
          />
          <div className="flex flex-col items-center gap-4 p-6 text-center text-white md:items-start md:text-start">
            <h2 className=" text-2xl font-semibold md:text-3xl">
              Prateek Prasoon
            </h2>
            <div className="flex max-w-sm flex-col gap-2 text-[13px] font-normal sm:text-base">
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

      <div className="mx-2 flex max-w-4xl flex-col gap-8 py-12 text-center sm:mx-6 md:mx-12   lg:mx-auto">
        <h2 className=" text-3xl font-bold  text-white md:text-4xl">
          Frequently Asked Questions
        </h2>

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
                  className=" rounded-[25px] border border-[#4F4F4F] px-4 "
                >
                  <AccordionTrigger className="text-base font-medium md:text-lg">
                    <div className="flex gap-2 text-start sm:gap-4">
                      <Image
                        src={"/assets/workshops/dark-tick.svg"}
                        width={25}
                        height={25}
                        alt="Tick"
                      />
                      {faq.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 text-sm font-normal md:px-14 md:text-base">
                    {faq.description}
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <p>No agenda items available.</p>
            )}
          </Accordion>
        </div>
        <button className="mx-4 mt-4 rounded-3xl bg-[#F5478E] py-2.5 text-xl font-semibold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-[#F5478E]/90 hover:opacity-90 md:mx-0 md:px-24 md:text-2xl">
          Reserve My Seat Now!{" "}
        </button>
      </div>

      <footer className="mx-2 mt-10 flex max-w-4xl flex-col  items-start justify-center  pb-12  pl-10 text-start md:flex-row md:justify-between md:pl-0 lg:mx-auto">
        <div className="flex max-w-sm flex-col  items-start gap-4 md:gap-8 ">
          <Image
            src={"/assets/icons/logo.svg"}
            width={180}
            height={180}
            alt="Coding Commando"
          />
          <h3 className="mt-4  text-xl font-medium text-white md:mt-0 md:text-2xl">
            Contact Us
          </h3>
          <p className="max-w-xs text-[#BDBDBD]">
            Contact Us Sandesh sadan near mamta apartment, south shivpuri Patna
            800023
          </p>
        </div>{" "}
        <div className="mt-4 max-w-sm">
          <p className="text-[#BDBDBD]">+917870081711</p>
          <p className="text-[#BDBDBD]">join@codingcommando.in</p>
        </div>
      </footer>
    </div>
  );
};

export default SaleForceWorkshop;
