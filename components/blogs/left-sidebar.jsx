import { blogData } from "data/blog-data";
import Link from "next/link";
import React from "react";

export default function BlogLeftSidebar({ author, role }) {
  const recentPosts = blogData;
  return (
    <div className="flex max-w-[25%] flex-col gap-y-12  p-6">
      <div className="flex w-[200px] flex-col gap-2.5">
        <p className="text-[#9D9D9D]">WRITTEN BY</p>
        {author && <p className="font-semibold">{author}</p>}
        {role && <p className="text-[#9D9D9D]">{role}</p>}
      </div>
      <div className="h-full w-full">
        <h2 className="text-lg font-semibold">Recent Blogs</h2>
        <div className="mt-6 flex h-full w-full flex-col gap-4">
          {recentPosts.length > 0 &&
            recentPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post?._id}
                className=" flex h-[150px] w-[250px] items-end rounded-lg p-3"
                style={{ backgroundImage: `url(${post?.bgUrl})` }}
              >
                <p className="text-base">{post.title}</p>
              </Link>
            ))}
        </div>
      </div>
      <div className="h-0.5 w-full rounded-md bg-slate-700" />
    </div>
  );
}
