"use client";
import React, { useState } from "react";
import Link from "next/link";

export const LatestBlogItem = ({ slug, image, title, description }) => {
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
      className="relative flex h-full max-h-[349px] flex-col gap-2.5 rounded-lg bg-cover bg-center bg-no-repeat p-4 text-white transition-all duration-300 hover:backdrop-blur-xl sm:p-6 md:p-12 lg:w-full"
    >
      <div
        className="absolute inset-0 rounded-lg bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          filter: isHovered ? "blur(6px)" : "none",
          transition: "filter 0.5s ease-in-out",
        }}
      />
      <div className="z-10 max-w-md pb-4 md:pb-10">
        <h3 className="sm:text-base">Latest Blog</h3>
        <h2
          className={`mt-8 line-clamp-2 text-lg font-bold sm:text-xl  md:text-2xl${
            isHovered
              ? "md:scale-105 md:transition-all md:duration-500"
              : "transition-all duration-500"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-4 line-clamp-3 text-sm sm:text-base md:text-lg ${
            isHovered
              ? "md:scale-105 md:transition-all md:duration-500"
              : "transition-all duration-500"
          }`}
        >
          {description}
        </p>
        <p
          className={`absolute bottom-0 left-24 mt-4 hidden -translate-x-1/2 text-xl font-semibold underline md:flex ${
            isHovered
              ? "bottom-[40px] opacity-100 transition-all duration-[600ms]"
              : "bottom-0 opacity-0"
          }`}
        >
          Read More
        </p>
      </div>
    </Link>
  );
};
