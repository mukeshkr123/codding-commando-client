import React from "react";
import { CourseList } from "@/components/courses/course-list";

export default function CoursePage() {
  return (
    <div className="h-full w-full bg-light-white">
      <section
        className="relative h-[690px] w-full max-w-full overflow-hidden bg-[#10001C] bg-no-repeat text-white"
        style={{
          backgroundImage: 'url("/unlocking.png")',
          backgroundPosition: "bottom",
          objectFit: "cover",
        }}
      >
        <div
          className="absolute right-0 top-[200px] h-[80%] w-1/2 bg-contain bg-no-repeat md:top-0 md:h-[67%] md:w-[40%] lg:bg-repeat"
          style={{ backgroundImage: 'url("/assets/images/grid.png")' }}
        ></div>
        <div className="h-full w-full">
          <div className="flex h-[50%] w-full flex-col items-center justify-center space-y-4 px-12 text-center md:space-y-6 xl:space-y-6">
            <h2 className="mt-6 max-w-3xl text-center text-[30px] font-bold leading-[45px] sm:text-5xl sm:leading-[70px] md:mb-6 md:mt-32 md:text-7xl  md:leading-[80px]">
              Unlocking Minds Inspiring Futures
            </h2>
            <p className="pb-2 text-base md:text-lg lg:w-[60%] xl:w-[50%] xl:text-xl">
              Your route to job-ready skills! Our Salesforce training classes
              reduce code complexity to manageable competence, preparing you for
              high-demand employment. Join us now to connect your goals to
              possibilities!
            </p>
          </div>
        </div>
      </section>{" "}
      <div
        className="relative flex w-full flex-col items-center justify-center bg-cover bg-no-repeat "
        style={{
          backgroundImage: 'url("assets/vector/mentor-bg-svg.svg")',
        }}
      >
        <div className="my-8 flex w-full items-center justify-center md:my-0  md:mb-10">
          <h2 className="text-center text-[24px]  font-bold leading-[45px] sm:text-5xl sm:leading-[70px] md:mb-6 md:mt-32 md:text-7xl  md:leading-[80px]">
            Explore Jobs Ready Skills
          </h2>
        </div>
        <div className="mb-16">
          <CourseList />
        </div>
      </div>
    </div>
  );
}
