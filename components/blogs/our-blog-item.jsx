"use client";
import React, { useState } from "react";
import Link from "next/link";

export const OurBlogItem = ({ slug, bgUrl, title, intro }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href={`/blog/${slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex h-[219px] flex-col gap-2.5 rounded-lg bg-no-repeat p-4 text-white transition-all duration-300 hover:backdrop-blur-xl sm:p-6 md:p-8 lg:w-full"
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      {isHovered && (
        <div
          className="absolute inset-0 rounded-lg transition-opacity duration-300"
          style={{
            backdropFilter: "blur(15px)",
            zIndex: -1,
            opacity: 0.85, // Adjust the opacity as needed
            transition: "opacity 0.3s ease", // Smooth opacity transition
          }}
        />
      )}
      <div className="max-w-md pb-4 md:pb-6">
        <h3 className="sm:text-base">Our Blog</h3>
        <h2
          className={`text-lg font-bold ${
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
