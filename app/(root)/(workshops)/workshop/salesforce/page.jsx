"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const newCompanies = [
  {
    _id: 1,
    imageUrl: "/assets/workshops/companies/company-1.svg",
  },
  {
    _id: 2,
    imageUrl: "/assets/workshops/companies/company-2.svg",
  },
  {
    _id: 3,
    imageUrl: "/assets/workshops/companies/company-3.svg",
  },
  {
    _id: 4,
    imageUrl: "/assets/workshops/companies/company-4.svg",
  },
  {
    _id: 5,
    imageUrl: "/assets/workshops/companies/company-5.svg",
  },
  {
    _id: 6,
    imageUrl: "/assets/workshops/companies/company-6.svg",
  },
  {
    _id: 7,
    imageUrl: "/assets/workshops/companies/company-7.svg",
  },
  {
    _id: 8,
    imageUrl: "/assets/workshops/companies/company-8.svg",
  },
  {
    _id: 9,
    imageUrl: "/assets/workshops/companies/company-9.svg",
  },
  {
    _id: 10,
    imageUrl: "/assets/workshops/companies/company-10.svg",
  },
  {
    _id: 11,
    imageUrl: "/assets/workshops/companies/company-11.svg",
  },
  {
    _id: 12,
    imageUrl: "/assets/workshops/companies/company-12.svg",
  },
];

const SalesForceWorkshop = () => {
  return (
    <main className="bg-[#0D0017]">
      <div
        className="mx-auto max-w-sm  py-4 md:max-w-2xl lg:max-w-4xl  lg:py-6 xl:max-w-7xl
      "
      >
        <SaleforceHeader />

        <h1 className="mt-10 text-center text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Dreaming to transform your career in IT?
        </h1>

        <div className="mt-8 rounded-2xl bg-[#d9d9d9] bg-opacity-[10%] py-1.5">
          <h3 className="text-center text-base font-normal text-[#2AFF99] sm:text-lg md:text-2xl lg:text-3xl">
            Are you a fresher, taking a career break or are you switching your
            career?
          </h3>
        </div>

        <h4 className="mt-4 text-center text-lg text-white opacity-50 sm:text-xl md:text-2xl lg:text-3xl">
          Discover Your Future In IT With Our{" "}
        </h4>
        <h2 className="mt-3 text-center text-2xl font-semibold text-white sm:text-3xl  md:text-4xl lg:mt-6 lg:text-5xl">
          3-Day Career Mapping Workshop{" "}
        </h2>

        <VideoSection />

        <CarrierMapping />

        <JobsWorldWide />

        <h2 className="mt-16 text-center text-xl font-semibold text-white sm:text-2xl   md:text-3xl lg:mt-36 lg:text-5xl">
          Top Companies Hiring Salesforce Developers
        </h2>

        <TopCompanies />

        <FooterWorkshop />
      </div>
    </main>
  );
};

export default SalesForceWorkshop;

const SaleforceHeader = () => {
  return (
    <div className="flex w-full items-center justify-between">
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
  );
};

const VideoSection = () => {
  const [minutes, setMinutes] = useState(29);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes === 0 && seconds === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);
  return (
    <div className="mt-6 flex flex-col lg:mt-12 lg:flex-row ">
      {/* <div className="flex  w-full items-end justify-end rounded-lg lg:w-[55%] "> */}
      <div className="flex px-2 lg:w-1/2 lg:pl-10">
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EIYrhbBk7do?si=TD8XPS02SkL1cVoZ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>{" "} */}
        <video controls>
          <source
            src="https://coddingbucket.s3.ap-south-1.amazonaws.com/workshop-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>{" "}
      </div>
      {/* <div className="flex min-h-[200px]  w-full items-center justify-center rounded-lg bg-white">
        Video Or Photo
      </div> */}
      <div className="mt-4 flex w-full items-center justify-center px-4 md:mt-2 lg:mt-0 lg:w-[45%]">
        <div className=" flex max-w-md flex-col items-center justify-center gap-4 font-Poppins lg:gap-6">
          <div className="flex items-center justify-center gap-x-5 px-10 py-4">
            <div className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-lg border border-[#F4F4F4]">
              <p className="text-3xl font-semibold text-white">00</p>
              <p className="text-sm text-slate-200">Hours</p>
            </div>
            <div className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-lg border border-[#F4F4F4]">
              <p className="text-3xl font-semibold text-white">
                {minutes < 10 ? `0${minutes}` : minutes}
              </p>
              <p className="text-sm text-slate-200">Mins</p>
            </div>{" "}
            <div className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-lg border border-[#F4F4F4] ">
              <p className="text-3xl font-semibold text-white">
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
              <p className="text-sm text-slate-200">Seconds</p>
            </div>
          </div>{" "}
          <Link href="/workshop/form" className="w-full">
            <div className="w-full rounded-full bg-gradient-to-b from-purple-600 to-purple-900 py-1.5">
              <p className="text-center text-xl font-semibold text-white">
                Register Now For 89/-
              </p>
            </div>
          </Link>
          <div className="">
            <h3 className="max-w-[250px] text-start font-Poppins text-xl font-semibold text-[#F5478E] ">
              3-Day Workshop from 23rd March 2024{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarrierMapping = () => {
  return (
    <div className="mt-10 flex w-full flex-col gap-x-5 font-Poppins text-white lg:mt-12 lg:flex-row">
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
            Org creation and Data Modelling{" "}
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
              Salesforce expertise, Prateek has guided numerous individuals to
              successful careers in the tech industry.
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
  );
};

const JobsWorldWide = () => {
  return (
    <div className="mt-14 flex h-full w-full flex-col gap-y-16 font-Poppins text-white lg:mt-20">
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
            <span className="text-[#29F192]">30</span> <h3>%</h3>{" "}
            <span className="text-[#29F192]">*</span>
          </div>
          <p className="px-2 text-center text-sm font-normal text-white  opacity-50 md:text-lg lg:text-xl">
            Higher salaries than professionals in other it domains
          </p>
        </div>
      </div>
    </div>
  );
};

const TopCompanies = () => {
  return (
    <div className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-6 ">
      {newCompanies.map((company, index) => (
        <div key={company._id} className="">
          <Image
            src={company?.imageUrl}
            width={160}
            height={160}
            alt="Company icon"
          />
        </div>
      ))}
    </div>
  );
};

const FooterWorkshop = () => {
  return (
    <div className="mx-4 mt-16">
      <div className="flex flex-col-reverse justify-between gap-y-6 md:flex-row">
        <Image
          src="/assets/icons/logo.svg"
          width={160}
          height={160}
          alt="Coding commando"
        />

        <Link
          href="/workshop/form"
          className=" flex w-full justify-center md:justify-end"
        >
          <button className="mb-14 rounded-full bg-gradient-to-b from-purple-600 to-purple-900 py-2 lg:mb-0">
            <p className="px-8 text-center text-xl font-semibold text-white">
              Register Now For 89/-
            </p>
          </button>
        </Link>
      </div>

      <div className=" mt-6 flex flex-col justify-between gap-4 text-white">
        <div className="flex w-full max-w-xs flex-col gap-4">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <p>Sandesh sadan near mamta apartment, south shivpuri Patna 800023</p>
        </div>
        <div>
          <p>+917870081711</p>
          <p>join@codingcommando.in</p>
        </div>
      </div>
    </div>
  );
};
