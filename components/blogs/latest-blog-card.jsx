"use client";

import { cn } from "lib/utils";
import Link from "next/link";
import React, { useState } from "react";

export default function LatestBlogCard({ title, description, bgUrl }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={"/"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex h-full max-h-[349px] w-full flex-col gap-2.5 rounded-lg p-12 text-white transition-all duration-300 hover:backdrop-blur-xl"
      style={{
        backgroundImage: `url(${bgUrl})`,
        // filter: isHovered ? "blur(2px)" : "none",
      }}
    >
      <div className="max-w-md pb-10">
        <h3 className="text-base">Latest Blog</h3>
        <div
          className={cn(
            isHovered && "transition-all duration-300 hover:text-lg" // Add the hover class to increase text size slightly
          )}
          style={{
            transform: isHovered ? "scale(1.05)" : "none", // Slightly increase the size of the text on hover
          }}
        >
          <h2 className="mt-8 text-2xl font-bold ">{title}</h2>
          <p className="mt-4 text-lg ">{description}</p>
        </div>
        <p className="opacity-0 transition-all duration-300 hover:opacity-100">
          Read More
        </p>
      </div>
    </Link>
  );
}
