import Link from "next/link";
import React from "react";

export default function OurBlogCard({ bgUrl, title }) {
  return (
    <Link
      style={{ backgroundImage: `url(${bgUrl})` }}
      className="max-h-[219px] rounded-lg p-10 text-white "
      href={"/"}
    >
      <div className="flex max-w-xs flex-col justify-between">
        <h3 className="text-base">Our Blog</h3>
        <h1 className="mt-12 text-xl font-bold">{title}</h1>
      </div>
    </Link>
  );
}
