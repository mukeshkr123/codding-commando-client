import Image from "next/image";
import { MentorCard } from "./card/mentor-card";
import apiClient from "lib/api-client";

export const MeetMentor = async () => {
  const fetchMentors = async () => {
    try {
      const { data } = await apiClient.get("/teachers");
      return data?.mentors;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      console.log(errorMessage);
    }
  };

  const mentors = await fetchMentors();

  return (
    <section
      className="flex w-full flex-col items-center justify-center bg-light-white bg-cover px-8 py-4 pb-14 pt-16 text-center xl:pb-20 "
      style={{
        backgroundImage: 'url("assets/vector/mentor-bg-svg.svg")',
      }}
    >
      <Image
        src="/assets/font-shadow/meet-mentor-svg.svg"
        alt="Meet Your Mentor"
        height={200}
        width={200}
        className="hidden w-[90%] sm:flex xl:w-[58%]"
      />

      <Image
        src="/assets/font-shadow/meet-mentor-sm.svg"
        alt="Meet Your Mentor"
        height={200}
        width={200}
        className="w-[60%] sm:hidden"
      />

      <div className="flex flex-col text-[#000] md:flex-row   md:space-x-20 xl:mt-28 xl:space-x-36">
        {mentors &&
          mentors.map((mentor) => <MentorCard key={mentor.id} {...mentor} />)}
      </div>
    </section>
  );
};
