import { blogData } from "data/blog-data";
import Link from "next/link";
import React from "react";

export default function BlogLeftSidebar({ author, role }) {
  const recentPosts = blogData?.slice(0, 5);

  return (
    <div className="mb-4 mt-8 flex  flex-col gap-y-10 lg:max-w-[26%] lg:p-6">
      <div className="flex w-[200px] flex-col gap-2.5">
        <p className="text-xs text-[#9D9D9D] sm:text-base">WRITTEN BY</p>
        {author && (
          <p className="text-xs font-semibold sm:text-base">{author}</p>
        )}
        {role && <p className="text-xs text-[#9D9D9D] sm:text-base">{role}</p>}
      </div>
      <div className="h-full w-full items-center justify-center text-center lg:text-start">
        <h2 className="text-lg font-semibold">Recent Blogs</h2>
        <div className="mt-6 flex h-full w-full flex-col items-center gap-4">
          {recentPosts.length > 0 &&
            recentPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post?._id}
                className=" flex h-[150px] w-[250px] items-end rounded-lg p-3"
                style={{ backgroundImage: `url(${post?.bgUrl})` }}
              >
                <p className="text-base">{post?.title}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
