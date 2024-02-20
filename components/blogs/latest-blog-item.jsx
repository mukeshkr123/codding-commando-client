import Link from "next/link";
import React from "react";

export const LatestBlogItem = ({ slug, bgUrl, title, intro }) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="flex h-full max-h-[349px] flex-col gap-2.5 rounded-lg bg-no-repeat p-4 text-white transition-all duration-300 hover:backdrop-blur-xl sm:p-6 md:p-12 lg:w-full"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="max-w-md pb-4 md:pb-10">
        <h3 className="sm:text-base">Latest Blog</h3>
        <h2 className="mt-8 text-lg font-bold sm:text-xl md:text-2xl">
          {title}
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg">{intro}</p>
      </div>
    </Link>
  );
};
