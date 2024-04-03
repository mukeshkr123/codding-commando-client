"use client";
import React, { useState } from "react";
import Link from "next/link";

export const OurBlogItem = ({ slug, image, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href={slug}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-[219px] flex-col gap-2.5 rounded-lg bg-cover bg-center bg-no-repeat p-4 text-white transition-all duration-300 hover:backdrop-blur-xl sm:p-6 md:p-8 lg:w-full"
    >
      <div
        className="absolute inset-0 rounded-lg bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          filter: isHovered ? "blur(6px)" : "none",
          transition: "filter 0.5s ease-in-out",
        }}
      />
      <div className="z-10 max-w-md pb-4 md:pb-6">
        <h3 className="sm:text-base">Our Blog</h3>
        <h2
          className={`line-clamp-2 text-lg font-bold ${
            isHovered
              ? "mb-2 mt-11 md:scale-105 md:transition-all md:duration-[600ms]"
              : "mt-20 transition-all duration-500"
          }`}
        >
          {title}
        </h2>
        <p
          className={`absolute bottom-0 left-[70px] hidden -translate-x-1/2 text-base font-semibold underline md:flex ${
            isHovered
              ? "bottom-[25px] opacity-100 transition-all duration-[600ms]"
              : "bottom-0 opacity-0"
          }`}
        >
          Read More
        </p>
      </div>
    </Link>
  );
};
