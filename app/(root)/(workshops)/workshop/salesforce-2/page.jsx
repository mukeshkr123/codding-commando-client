import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InfiniteMovingCards } from "@/components/ui/infinity-moving-cards";
import { OfferEnds } from "@/components/workshops/offer-end";
// eslint-disable-next-line camelcase
import { Hanken_Grotesk } from "next/font/google";
import Image from "next/image";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
});

const programs = [
  {
    id: 1,
    title: "BCA / MCA Graduates",
  },

  {
    id: 2,
    title: "BCA / MCA Graduates",
  },
  {
    id: 3,
    title: "BCA / MCA Graduates",
  },
  {
    id: 4,
    title: "BCA / MCA Graduates",
  },
  {
    id: 5,
    title: "BCA / MCA Graduates",
  },
  {
    id: 6,
    title: "BCA / MCA Graduates",
  },
  {
    id: 7,
    title: "BCA / MCA Graduates",
  },
  {
    id: 8,
    title: "BCA / MCA Graduates",
  },
];

const benefits = [
  {
    id: 1,
    title: "Learn the foundations of Salesforce from scratch",
    description:
      "Session on Common UX Design Questions as a beginner, 9-11 PM Questions as a beginner, 9-11 PM Session on Common UX Design",
  },
  {
    id: 2,
    title: "Learn the foundations of Salesforce from scratch",
    description:
      "Session on Common UX Design Questions as a beginner, 9-11 PM Questions as a beginner, 9-11 PM Session on Common UX Design",
  },
  {
    id: 3,
    title: "Learn the foundations of Salesforce from scratch",
    description:
      "Session on Common UX Design Questions as a beginner, 9-11 PM Questions as a beginner, 9-11 PM Session on Common UX Design",
  },
  {
    id: 4,
    title: "Learn the foundations of Salesforce from scratch",
    description:
      "Session on Common UX Design Questions as a beginner, 9-11 PM Questions as a beginner, 9-11 PM Session on Common UX Design",
  },
];

const students = [
  {
    id: 1,
    name: "Akash Umang",
    company: "@cloudprism",
    description: [
      "CRM software, systems, or applications is the new trend. Salesforce is that one platform where everything comes together to get one result.",
      "CloudPrism's Salesforce Integration offers a one-stop shop for all the things you need in a Business process.",
    ],
    profile: "/assets/workshops/profile-1.svg",
  },
  {
    id: 2,
    name: "Akash Umang",
    company: "@cloudprism",
    description: [
      "CRM software, systems, or applications is the new trend. Salesforce is that one platform where everything comes together to get one result.",
      "CloudPrism's Salesforce Integration offers a one-stop shop for all the things you need in a Business process.",
    ],
    profile: "/assets/workshops/profile-1.svg",
  },
  {
    id: 3,
    name: "Akash Umang",
    company: "@cloudprism",
    description: [
      "CRM software, systems, or applications is the new trend. Salesforce is that one platform where everything comes together to get one result.",
      "CloudPrism's Salesforce Integration offers a one-stop shop for all the things you need in a Business process.",
    ],
    profile: "/assets/workshops/profile-1.svg",
  },
  {
    id: 4,
    name: "Akash Umang",
    company: "@cloudprism",
    description: [
      "CRM software, systems, or applications is the new trend. Salesforce is that one platform where everything comes together to get one result.",
      "CloudPrism's Salesforce Integration offers a one-stop shop for all the things you need in a Business process.",
    ],
    profile: "/assets/workshops/profile-1.svg",
  },
  {
    id: 5,
    name: "Akash Umang",
    company: "@cloudprism",
    description: [
      "CRM software, systems, or applications is the new trend. Salesforce is that one platform where everything comes together to get one result.",
      "CloudPrism's Salesforce Integration offers a one-stop shop for all the things you need in a Business process.",
    ],
    profile: "/assets/workshops/profile-1.svg",
  },
  {
    id: 6,
    name: "Akash Umang",
    company: "@cloudprism",
    description: [
      "CRM software, systems, or applications is the new trend. Salesforce is that one platform where everything comes together to get one result.",
      "CloudPrism's Salesforce Integration offers a one-stop shop for all the things you need in a Business process.",
    ],
    profile: "/assets/workshops/profile-1.svg",
  },
];

const companies = [
  {
    id: 1,
    imgUrl: "/assets/workshops/company-1.png",
  },
  {
    id: 2,
    imgUrl: "/assets/workshops/company-2.png",
  },
  {
    id: 3,
    imgUrl: "/assets/workshops/company-3.png",
  },
  {
    id: 4,
    imgUrl: "/assets/workshops/company-4.png",
  },
  {
    id: 5,
    imgUrl: "/assets/workshops/company-5.png",
  },
  {
    id: 6,
    imgUrl: "/assets/workshops/company-6.png",
  },
  {
    id: 7,
    imgUrl: "/assets/workshops/company-7.png",
  },
  {
    id: 8,
    imgUrl: "/assets/workshops/company-8.png",
  },
  {
    id: 9,
    imgUrl: "/assets/workshops/company-9.png",
  },
  {
    id: 10,
    imgUrl: "/assets/workshops/company-10.png",
  },
  {
    id: 11,
    imgUrl: "/assets/workshops/company-11.png",
  },
  {
    id: 12,
    imgUrl: "/assets/workshops/company-12.png",
  },
];

const Workshop = () => {
  return (
    <div
      className={`relative w-full bg-[#050208] text-white ${hanken.className}`}
    >
      <div className="pointer-events-none absolute right-0 top-0 z-0 ">
        <Image
          src="/assets/workshops/landing-1-bg.svg"
          alt="gradient"
          width={350}
          height={400}
        />
      </div>

      <div className="pointer-events-none absolute left-0 top-0 z-0 -translate-y-10 rotate-0">
        <Image
          src="/assets/workshops/landing-2-bg.svg"
          alt="gradient"
          width={350}
          height={400}
        />
      </div>

      <div className="relative z-10 mx-auto flex flex-col gap-y-6 overflow-hidden  pt-16 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <h1 className="mx-auto max-w-4xl text-center text-4xl font-semibold md:text-5xl lg:text-6xl">
          Dreaming to transform your career in IT?
        </h1>
        <p className="text-center text-base font-light text-[#A100FF] md:text-2xl">
          Are you a fresher, taking a carrer break or are you switching your
          career?
        </p>

        <div className="mx-auto mt-4 flex w-full max-w-5xl flex-col items-center justify-center gap-y-8  sm:mt-8 md:mt-10 md:gap-y-12 lg:flex-row lg:gap-x-10">
          {/* Video  */}
          <div className="flex h-[250px] w-[350px] items-center justify-center rounded-xl bg-white text-black sm:w-[420px] md:h-[287px] md:w-[511px]">
            Video or Photo
          </div>
          <div className="flex flex-col justify-between gap-y-5  px-4 ">
            <div className="flex gap-4">
              <div className="flex items-center justify-center rounded-[6px] border border-[#A100FF] px-5 py-2">
                <span className="text-lg font-medium">4 April 2023</span>
              </div>
              <div className="flex items-center justify-center rounded-[6px] border border-[#A100FF] px-5 py-2">
                <span className="text-lg font-medium">9:00 AM</span>
              </div>
            </div>
            <p className=" text-base font-normal md:mt-0 md:text-[21px] ">
              Workshop Language: English+Hindi
            </p>
            <h4 className="text-xl font-semibold text-white  md:text-2xl">
              Discover Your Future In <br />
              IT With Our{" "}
            </h4>
            <h3 className="text-3xl font-bold md:text-[42px]">
              3-Day Career Mapping Workshop{" "}
            </h3>
          </div>
        </div>

        <OfferEnds />

        <div className="mx-auto max-w-sm sm:max-w-lg md:max-w-2xl  lg:max-w-4xl  xl:max-w-5xl">
          <Image
            src="/assets/workshops/3-day-workshop.svg"
            alt="Workshop"
            width={1300}
            height={1000}
          />
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-y-5">
          <RegisterButton paragraph={true} />
          <p className="text-xl font-medium sm:text-2xl md:text-4xl">
            Join now the growing in-demand skill
          </p>
        </div>

        <div class="mx-auto flex max-w-5xl flex-col items-center justify-center gap-y-12">
          <div class="mt-8 flex flex-col md:flex-row md:gap-x-8 lg:gap-x-12">
            <div class="flex flex-col md:w-1/2 md:gap-y-8">
              <div class="flex flex-col items-center justify-center gap-2 px-6 py-4 text-center">
                <span class="text-4xl font-bold md:text-6xl">
                  <span class="text-[#EA4468]">9.3+</span> Million
                </span>
                <p class="text-lg font-normal text-[#AEAEAE] md:text-xl">
                  Jobs worldwide
                </p>
              </div>

              <div class="flex flex-col items-center justify-center gap-2 px-6 py-4 text-center">
                <span class="text-4xl font-bold md:text-6xl">
                  <span class="text-[#EA4468]">6</span> LPA
                  <span class="text-[#EA4468]">*</span>
                </span>
                <p class="text-lg font-normal text-[#AEAEAE] md:text-xl">
                  Average fresher Salesforce salary
                </p>
              </div>
            </div>

            <div class="flex flex-col md:w-1/2 md:gap-y-8">
              <div class="flex flex-col items-center justify-center gap-2 px-6 py-4 text-center">
                <span class="text-4xl font-bold md:text-6xl">
                  <span class="text-[#EA4468]">1.3+</span> Million
                </span>
                <p class="text-lg font-normal text-[#AEAEAE] md:text-xl">
                  Upcoming jobs in India
                </p>
              </div>

              <div class="flex flex-col items-center justify-center gap-2 px-6 py-4 text-center">
                <span class="text-4xl font-bold md:text-6xl">
                  <span class="text-[#EA4468]">40</span>%
                  <span class="text-[#EA4468]">*</span>
                </span>
                <p class="text-lg font-normal text-[#AEAEAE] md:text-xl">
                  Average fresher Salesforce salary
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-6  md:my-8">
          <h3 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-[42px]">
            Top Companies Hiring Salesforce Developers
          </h3>
          <InfiniteMovingCards
            items={companies}
            direction="right"
            speed="normal"
            pauseOnHover={false}
          />
        </div>

        <OfferEnds />

        <section className="my-12 rounded-[32px] bg-[#171123] py-8 md:py-14">
          <div>
            <h3 className="text-center text-2xl font-bold sm:text-3xl lg:text-5xl">
              Who is this program for?
            </h3>

            <div className="mx-auto mt-8 flex max-w-[54rem] flex-wrap justify-between gap-y-6 px-4  md:mt-16">
              {programs &&
                programs.map((program) => (
                  <div
                    className="flex w-[400px] items-center gap-5 rounded-[65px] bg-[#221935] px-6 py-3 "
                    key={program.id}
                  >
                    <Image
                      src="/assets/icons/star.svg"
                      alt="star"
                      width={18}
                      height={18}
                    />
                    <p className="text-base font-medium">{program.title}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <div className="mx-auto  flex max-w-[53rem] flex-col items-center justify-center gap-y-16 ">
          <h3 className="text-center text-3xl font-semibold">Benifits</h3>

          <div className="flex flex-wrap justify-center gap-y-7 sm:justify-between ">
            {benefits &&
              benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="flex  h-[250px] w-[350px] flex-col items-center gap-y-3  rounded-[10px] bg-[#171123] bg-no-repeat p-6  md:h-[272px] md:w-[410px]"
                  style={{
                    backgroundImage: "url('/assets/workshops/benefit.png')",
                  }}
                >
                  <Image
                    src="/assets/icons/pencil-icon.svg"
                    alt="pencil icon"
                    width={56}
                    height={48}
                    className="pt-2"
                  />
                  <h4 className="mt-4 text-[19px]">{benefit.title}</h4>
                  <p className="text-sm text-[#C0C0C0]">
                    {benefit.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-y-6">
          <RegisterButton paragraph={true} />
        </div>

        <div className="mx-auto my-16 max-w-sm  xl:max-w-7xl">
          <h3 className="text-center text-4xl font-semibold md:text-[42px]">
            Meet your mentor
          </h3>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="flex-1  px-10">
              <Image
                src="/assets/workshops/prateek-prasoon.png"
                alt="Prateek"
                width={559}
                height={446}
              />
            </div>
            <div className=" flex flex-1 flex-col gap-y-4 px-5  md:gap-y-8 md:pl-12 md:pr-20">
              <span className="mt-8 text-3xl font-bold md:text-[39px]">
                Prateek Prasoon
              </span>
              <div className="flex flex-col gap-y-6 text-lg font-light md:text-xl">
                <p>
                  Founder of CloudPrism Solutions With over 7 years of hands-on
                  Salesforce expertise, Prateek has guided numerous individuals
                  to successful careers in the tech industry.
                </p>
                <p>
                  Founder of CloudPrism Solutions With over 7 years of hands-on
                  Salesforce expertise, Prateek has guided numerous individuals
                  to successful careers in the tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-center text-4xl font-semibold md:text-[42px]">
            Look what our student says
          </h1>
          <div className="mt-10 flex flex-wrap justify-center gap-6  md:mt-16 md:gap-8">
            {students &&
              students.map((student) => (
                <div
                  key={student.id}
                  style={{
                    background:
                      " linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%);",
                  }}
                  className="h-[240px] w-[350px] rounded-[8px] border border-[#2E2E2E] px-8 py-4 shadow-md md:w-[396px]"
                >
                  <div className="flex items-center  gap-4">
                    <Image
                      src={student.profile}
                      width={59}
                      height={59}
                      alt="profile"
                    />
                    <div>
                      <span>{student.name}</span>
                      <p>{student.company}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-2">
                    {student.description.map((desc, idx) => (
                      <p
                        key={idx}
                        className="line-clamp-3
                      text-[13.9px] font-normal text-[#ADADAD]"
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-8 flex w-full flex-col-reverse md:mt-16  md:flex-row">
          <div className=" flex flex-1 flex-col  justify-between gap-y-4  px-6 py-5 md:px-14">
            <h3 className="text-4xl font-semibold leading-[50px] md:text-[42px]">
              Unlock Bonuses worth{" "}
              <span
                style={{
                  background:
                    "linear-gradient(92.48deg, #CFA947 2.08%, #C053BB 31.29%);",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                $10,000
              </span>
            </h3>
            <div className="text-lg font-light md:text-[22px]">
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/workshops/sign.png"
                  width={40}
                  height={40}
                  alt="sign"
                />
                <p>
                  Master design fundamentals with me in the do-it-along
                  sessions.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/workshops/sign.png"
                  width={40}
                  height={40}
                  alt="sign"
                />
                <p>
                  Master design fundamentals with me in the do-it-along
                  sessions.
                </p>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-[40px] md:leading-[50px]">
              Get a Coding Commando{" "}
              <span
                style={{
                  background:
                    "linear-gradient(92.48deg, #CFA947 2.08%, #C053BB 31.29%);",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                Certificate
              </span>{" "}
              upon completion
            </h3>
          </div>
          <div className="flex-1 px-5">
            <Image
              src="/assets/workshops/certificate.png"
              width={614}
              height={427}
              alt="Certificate"
            />
          </div>
        </div>

        <OfferEnds />

        <section className="mx-auto mt-20 max-w-sm xl:max-w-[62rem] ">
          <h3 className="text-center text-3xl font-semibold md:text-[40px]">
            Questions generally asked about the workshop
          </h3>

          <div className="mt-10 px-2 md:mt-20 md:w-[62rem]">
            <Accordion
              type="single"
              collapsible
              className="flex w-full flex-col gap-y-4"
            >
              {faqs &&
                faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger>
                      <h4 className="text-base font-medium text-[#E0E0E0] md:text-[22px]">
                        {faq.title}
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm font-light text-[#A6A6A6] md:text-base">
                        {faq.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </section>
      </div>

      <div className="mt-14 w-full bg-[#D9D9D91C]">
        <div className="mx-auto flex max-w-5xl flex-col justify-between px-5 py-12 md:flex-row">
          <div className="flex max-w-md flex-col gap-y-10">
            <Image
              src="/assets/icons/logo.svg"
              width={180}
              height={150}
              alt="logo"
            />
            <div className="flex flex-col gap-2">
              <span className=" text-[28px] font-bold">Contact Us</span>
              <p className="text-base font-light leading-[29px] text-[#BDBDBD] md:text-[23px]">
                Sandesh sadan near mamta apartment, south shivpuri Patna 800023
              </p>
            </div>
          </div>
          <div>
            <div className="mt-4 text-base text-[#BDBDBD] md:mt-0 md:text-[21px]">
              <p>+917870081711</p>
              <p>join@codingcommando.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;

export function RegisterButton({ paragraph }) {
  return (
    <>
      <button className="max-w-lg rounded-[9px] bg-[#A100FF] px-12 py-2.5 text-base font-medium text-black sm:text-lg md:text-2xl lg:text-[32px]">
        Register now for $299 <span>$ 999</span>
      </button>
      {paragraph && (
        <p className=" text-center text-sm font-normal sm:text-base md:text-[21px]">
          This Webinar is for all freshers who are looking for new opportunities
          in the Salesforce and for those who want to switch their career in the
          Salesforce
        </p>
      )}
    </>
  );
}

const faqs = [
  {
    id: 1,
    title: "Introduction to Salesforce",
    description:
      "Introduction to the comprehensive Salesforce course offered by Coding Comando. Special discount or bonuses for workshop attendees who enroll in the full course.",
  },
  {
    id: 2,
    title: "Career Opportunities in the Salesforce Ecosystem",
    description:
      "Introduction to the comprehensive Salesforce course offered by Coding Comando. Special discount or bonuses for workshop attendees who enroll in the full course.",
  },
  {
    id: 3,
    title: "Building Blocks of Salesforce Knowledge",
    description:
      "Introduction to the comprehensive Salesforce course offered by Coding Comando. Special discount or bonuses for workshop attendees who enroll in the full course.",
  },
  {
    id: 4,
    title: "Q&A Session",
    description:
      "Introduction to the comprehensive Salesforce course offered by Coding Comando. Special discount or bonuses for workshop attendees who enroll in the full course.",
  },
  {
    id: 5,
    title: "Exclusive Offer: Unlock Full Salesforce Course",
    description:
      "Introduction to the comprehensive Salesforce course offered by Coding Comando. Special discount or bonuses for workshop attendees who enroll in the full course.",
  },
  {
    id: 6,
    title: "Exclusive Offer: Unlock Full Salesforce Course",
    description:
      "Introduction to the comprehensive Salesforce course offered by Coding Comando. Special discount or bonuses for workshop attendees who enroll in the full course.",
  },
];
