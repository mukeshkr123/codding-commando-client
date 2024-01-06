"use client";

import Image from "next/image";
import { MentorCard } from "./card/mentor-card";
import apiClient from "lib/api-client";
import { useEffect, useState } from "react";
import { ErrorToast } from "../error-toast";
import { Loader2 } from "lucide-react";

export const MeetMentor = () => {
  const [mentors, setMentors] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchMentors = async () => {
    try {
      const { data } = await apiClient.get("/teachers");
      setMentors(data?.mentors);
    } catch (error) {
      ErrorToast(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMentors();
  }, []);

  if (loading) {
    return (
      <div className="flex h-40 w-full items-center justify-center bg-light-white">
        <Loader2 className="h-16 w-16 animate-spin text-pink-100" />
      </div>
    );
  }

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
