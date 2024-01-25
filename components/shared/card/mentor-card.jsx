"use client";

import Image from "next/image";
import { useState } from "react";

const additionalDetails = [
  { _id: 1, title: "Founder at Cloudprism Solutions" },
  { _id: 2, title: "Founder at Coding Commando" },
  { _id: 3, title: "Salesforce Certified Trainer" },
  { _id: 4, title: "Having industry experience of more than 09 years" },
];

export const MentorCard = ({
  imageUrl,
  name,
  description,
  // additionalDetails,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative mt-12 max-w-[350px] md:mt-6">
      <div
        className="relative flex flex-col items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image src={imageUrl} alt={name} width={180} height={280} />
        <div className="relative z-10 cursor-pointer p-4">
          <h1 className="py-4 text-2xl font-semibold md:text-4xl">{name}</h1>
          <p className="text-lg lg:text-xl">{description}</p>
        </div>
        {isHovered && additionalDetails && (
          <div className="absolute left-[-100px] top-52 z-20 hidden h-[26%] w-[88%] items-center justify-center overflow-hidden rounded-3xl border border-black bg-transparent p-5 backdrop-blur-md md:block lg:flex">
            <ul className="flex w-full list-disc flex-col items-start justify-center p-2 text-start">
              {additionalDetails &&
                additionalDetails.map((item) => (
                  <li key={item.id}>
                    <p className="text-base font-normal">{item.title}</p>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
