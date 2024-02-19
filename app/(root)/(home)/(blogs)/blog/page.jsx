"use client";

import { blogData } from "data/blog-data";
import Link from "next/link";

const latestBlog = [
  {
    _id: 1,
    title: "How talent leaders can help capitalize on generative AI",
    description:
      "Sustainability is top of mind for today’s travelers. And yet, travel companies face several “say-do” gaps. Here are six ways to close them.",
    bgUrl: "/assets/blogs/latest-blog-bg.svg",
    slug: "how-talent-leaders-capitalize-generative-ai",
  },
  {
    _id: 1,
    title: "How talent leaders can help capitalize on generative AI",
    description:
      "Sustainability is top of mind for today’s travelers. And yet, travel companies face several “say-do” gaps. Here are six ways to close them.",
    bgUrl: "/assets/blogs/latest-blog-bg.svg",
  },
];

const BlogsPage = () => {
  return (
    <div className="h-full w-full ">
      <div className="bg-[url('/assets/blogs/blog-main.svg')] p-[130px] text-white ">
        <div className="flex max-w-2xl flex-col gap-y-2.5">
          <h3 className="text-lg font-semibold">Blogs</h3>
          <h2 className="text-5xl font-bold">Coding Commando Blogs</h2>
          <p className="mt-2 text-lg font-medium">
            Discover exciting stories from our bloggers: From cloud, AI and data
            to the metaverse, this is the place where new ideas come alive.
          </p>
        </div>
      </div>
      <div className="bg-dark-purple">
        {/* Latest Blog  */}
        <div className="flex justify-between gap-x-6 p-20">
          {latestBlog.map((item) => (
            <Link
              href={`/blog/${item.slug}`}
              key={item._id}
              className="flex h-full max-h-[349px] w-full flex-col gap-2.5 rounded-lg p-12 text-white transition-all duration-300 hover:backdrop-blur-xl"
              style={{
                backgroundImage: `url(${item.bgUrl})`,
              }}
            >
              <div className="max-w-md pb-10">
                <h3 className="text-base">Latest Blog</h3>

                <h2 className="mt-8 text-2xl font-bold ">{item.title}</h2>
                <p className="mt-4 text-lg ">{item.description}</p>
                <p className="opacity-0 transition-all duration-300 hover:opacity-100">
                  Read More
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Our Blog  */}
        <div className="grid grid-cols-3 gap-6 px-20 pb-20">
          {blogData.map((item) => (
            <Link
              key={item._id}
              style={{ backgroundImage: `url(${item.bgUrl})` }}
              className="max-h-[219px] rounded-lg p-10 text-white "
              href={`/blog/${item.slug}`}
            >
              <div className="flex max-w-xs flex-col justify-between">
                <h3 className="text-base">Our Blog</h3>
                <h1 className="mt-12 text-xl font-bold">{item.title}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
