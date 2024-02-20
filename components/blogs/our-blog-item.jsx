import Link from "next/link";
import React from "react";

export default function OurBlogItem({ slug, bgUrl, title }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="max-h-[219px] max-w-sm rounded-lg bg-no-repeat p-6 text-white md:p-10 lg:max-w-md"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="flex max-w-xs flex-col justify-between">
        <h3 className="text-base">Our Blog</h3>
        <h1 className="mt-14 text-lg font-bold">{title}</h1>
      </div>
    </Link>
  );
}
