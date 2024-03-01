import React from "react";
import Image from "next/image";
import Link from "next/link";

const companies = [
  "0",
  "1",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
];

const SalesForceWorkshop = () => {
  return (
    <main className="bg-[#0D0017]">
      <div className="mx-1.5 flex max-w-sm flex-col overflow-hidden py-4 lg:mx-auto lg:gap-y-4 lg:py-8 xl:max-w-7xl">
        <div className="flex w-full items-center  justify-between">
          <Image
            src="/assets/icons/logo.svg"
            width={160}
            height={160}
            alt="Coding commando"
          />
          <div className="rounded-full bg-[#d9d9d9] bg-opacity-[10%] px-6 py-1.5">
            <Link href="/" passHref>
              <span className="cursor-pointer text-lg font-medium text-white">
                Visit Website
              </span>
            </Link>
          </div>
        </div>

        <h1 className="mt-10 text-center text-3xl font-semibold text-white sm:text-4xl  md:text-5xl lg:text-6xl">
          Dreaming to transform your career in IT?
        </h1>

        <div className="mt-8 rounded-2xl bg-[#d9d9d9] bg-opacity-[10%] py-1.5">
          <h3 className="text-center text-base font-normal text-[#2AFF99]   sm:text-lg md:text-2xl lg:text-3xl">
            Are you a fresher, taking a career break or are you switching your
            career?
          </h3>
        </div>

        <h4 className="mt-2 text-center text-lg text-white opacity-50 sm:text-xl md:text-2xl lg:text-3xl">
          Discover Your Future In IT With Our{" "}
        </h4>
        <h2 className="mt-3 text-center text-2xl font-semibold text-white  sm:text-3xl md:text-4xl lg:text-5xl">
          3-Day Career Mapping Workshop{" "}
        </h2>

        <div className="mt-6 flex flex-col lg:flex-row">
          <div className="flex min-h-[200px] w-full items-center justify-center rounded-lg bg-white">
            Video or Photo
          </div>

          <div className="mt-4 flex w-full items-center justify-center px-4 md:mt-2 lg:mt-0">
            <div className="flex  max-w-md flex-col items-center justify-center gap-4 lg:gap-6">
              <div className="flex items-center justify-center gap-x-5 px-10 py-4">
                <div className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-lg border border-[#F4F4F4]">
                  <p className="text-4xl font-semibold text-white">00</p>
                  <p className="text-sm text-slate-200">Hours</p>
                </div>
                <div className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-lg border border-[#F4F4F4]">
                  <p className="text-4xl font-semibold text-white">29</p>
                  <p className="text-sm text-slate-200">Hours</p>
                </div>{" "}
                <div className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-lg border border-[#F4F4F4] ">
                  <p className="text-4xl font-semibold text-white">50</p>
                  <p className="text-sm text-slate-200 ">Hours</p>
                </div>
              </div>

              <div className="w-full rounded-full bg-gradient-to-b from-purple-600 to-purple-900 py-1.5">
                <p className="text-center text-xl font-semibold text-white">
                  Register Now For 99/-
                </p>
              </div>

              <div className="">
                <h3 className="max-w-[200px] text-start font-Poppins text-xl font-semibold text-[#F5478E] ">
                  3-Day Workshop from 8 March 2024{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex w-full flex-col gap-x-5 font-Poppins text-white lg:flex-row">
          <div className="flex h-full w-full flex-col gap-2.5 ">
            <h2 className="text-center text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
              3-Days{" "}
              <span className="text-[#29F192]"> Career Mapping Workshop</span>
            </h2>

            <div className="mt-4 flex items-center gap-4 rounded-xl bg-[#d9d9d9] bg-opacity-[4%] px-4 py-5 shadow-lg md:gap-6 lg:gap-8 lg:px-8">
              <span className="text-lg font-semibold text-[#29F192] md:text-xl lg:text-2xl ">
                Day-01
              </span>{" "}
              <p className="text-base text-[#CCCCCC] md:text-lg">
                Building a App in Salesforce
              </p>
            </div>

            <div className="mt-4 flex items-center gap-4 rounded-xl bg-[#d9d9d9] bg-opacity-[4%] px-4 py-5 shadow-lg md:gap-6 lg:gap-8 lg:px-8">
              <span className="text-lg font-semibold text-[#29F192] md:text-xl lg:text-2xl ">
                Day-02
              </span>{" "}
              <p className="text-base text-[#CCCCCC] md:text-lg">
                Building a App in Salesforce
              </p>
            </div>
            <div className="mt-4  flex w-full items-center gap-4 rounded-xl bg-[#d9d9d9] bg-opacity-[4%] px-4 py-5 shadow-lg md:gap-6 lg:gap-8 lg:px-8">
              <span className="  text-lg font-semibold text-[#29F192] md:text-xl lg:text-2xl ">
                Day-03
              </span>{" "}
              <p className="text-sm text-[#CCCCCC] md:text-lg">
                How to make a sound career in Salesforce
              </p>
            </div>
          </div>

          <div className="mt-10 flex h-full w-full flex-col gap-x-5 lg:mt-0">
            <h2 className="text-center text-xl font-semibold sm:text-xl md:text-2xl lg:text-3xl">
              Meet Your <span className="text-[#29F192]">Mentor</span>
            </h2>
            <div
              className="relative mt-8 flex flex-col gap-2 rounded-xl bg-[#d9d9d9] bg-opacity-[4%] px-8 py-6 font-Poppins shadow-lg
            "
            >
              <h3 className="text-xl font-semibold  text-[#29F192] md:text-2xl lg:text-3xl">
                Prateek Prasoon
              </h3>
              <div className="z-10 mb-10 mt-2 flex max-w-[230px] flex-col gap-1 text-sm text-[#BDBDBD] sm:text-[15px] md:max-w-sm lg:mb-5  lg:mt-4">
                <p>Founder Of CloudPrism Solutions</p>
                <p>Founder Of Coding Commando</p>
                <p className="mt-2  ">
                  Founder of CloudPrism Solutions With over 7 years of hands-on
                  Salesforce expertise, Prateek has guided numerous individuals
                  to successful careers in the tech industry.
                </p>
              </div>

              <div className="absolute bottom-0 right-0 ">
                <Image
                  src="/assets/workshops/prateek-prasoon.svg"
                  alt="Prateek Prasoon"
                  height={200}
                  width={180}
                />
              </div>
            </div>
          </div>
        </div>

        <h3>Kickstart Your Career With Salesforce</h3>

        <div className="mt-12 flex h-full w-full flex-col gap-y-16 font-Poppins text-white">
          <div className="flex w-full justify-between">
            <div className="flex w-full flex-col items-center justify-center gap-1.5">
              <div className="flex text-2xl font-bold sm:text-3xl  md:text-5xl lg:text-7xl">
                <span className="text-[#29F192]">9.3+</span> <h3>Million</h3>
              </div>
              <p className="text-sm font-normal text-white opacity-50 md:text-lg  lg:text-xl">
                Jobs worldwide
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1.5">
              <div className="flex text-2xl font-bold sm:text-3xl  md:text-5xl lg:text-7xl ">
                <span className="text-[#29F192]">1.3+</span> <h3>Million</h3>
              </div>
              <p className="text-sm font-normal text-white opacity-50 md:text-lg  lg:text-xl">
                Upcoming jobs in India
              </p>
            </div>
          </div>

          <div className="flex w-full justify-between">
            <div className="flex w-full flex-col items-center justify-center gap-1.5">
              <div className="flex text-2xl font-bold sm:text-3xl  md:text-5xl lg:text-7xl">
                <span className="text-[#29F192]">6</span> <h3>LPA</h3>{" "}
                <span className="text-[#29F192]">*</span>
              </div>
              <p className="px-2 text-center text-sm font-normal text-white opacity-50 md:text-lg lg:text-xl">
                Average fresher salesforce Salary
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1.5">
              <div className="flex text-2xl font-bold sm:text-3xl  md:text-5xl lg:text-7xl">
                <span className="text-[#29F192]">6</span> <h3>LPA</h3>{" "}
                <span className="text-[#29F192]">*</span>
              </div>
              <p className="px-2 text-center text-sm font-normal text-white  opacity-50 md:text-lg lg:text-xl">
                Average fresher salesforce Salary
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-36 text-center text-xl font-semibold text-white   sm:text-2xl md:text-3xl lg:text-5xl">
          Top Companies Hiring Salesforce Developers
        </h2>

        <div className="mt-16 flex flex-wrap justify-center gap-5">
          {companies.map((company, index) => (
            <div
              key={index}
              className="h-[150px] w-[150px] rounded-md bg-[#D9D9D9]"
            ></div>
          ))}
        </div>

        <div className="mx-4 mt-16">
          <div className="flex flex-col-reverse justify-between gap-y-6 md:flex-row">
            <Image
              src="/assets/icons/logo.svg"
              width={160}
              height={160}
              alt="Coding commando"
            />

            <button className="mb-14 rounded-full bg-gradient-to-b from-purple-600 to-purple-900 py-2 lg:mb-0">
              <p className="px-8 text-center text-xl font-semibold text-white">
                Register Now For 99/-
              </p>
            </button>
          </div>

          <div className=" mt-6 flex flex-col justify-between gap-4 text-white">
            <div className="flex w-full max-w-xs flex-col gap-4">
              <h3 className="text-2xl font-bold">Contact Us</h3>
              <p>
                Sandesh sadan near mamta apartment, south shivpuri Patna 800023
              </p>
            </div>
            <div>
              <p>+917870081711</p>
              <p>join@codingcommando.in</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SalesForceWorkshop;
