import BlogLeftSidebar from "@/components/blogs/left-sidebar";
import { blogData } from "data/blog-data";
import Image from "next/image";
import React from "react";

const BlogdetailsPage = ({ params }) => {
  const postSlug = params?.slug;

  const post = blogData.find((blogData) => blogData.slug === postSlug);

  return (
    <div className="flex h-full w-full overflow-hidden bg-dark-purple px-8 pt-20 text-white">
      <div className="flex w-full flex-col px-14">
        <div className="flex flex-col space-y-10 pb-4">
          <h3 className="text-base">BLOG</h3>
          <h1 className="text-6xl">{post?.title}</h1>
          <div className="flex gap-20 ">
            <p>{post?.read_time}</p>
            <p>{post?.postedDate}</p>
          </div>
        </div>
        <div
          className="mb-4 mt-2 h-1 w-full"
          style={{
            background:
              "linear-gradient(90deg, #F9C8EE 0%, #F383D9 25%, #E2B781 50%, #9DF0AC 100%)",
          }}
        />
        <div className="flex flex-col gap-4 py-8">
          {post?.descriptions &&
            post.descriptions.map((desc) => (
              <p
                className="text-base font-medium text-[#A4A4A4]"
                key={desc._id}
              >
                {desc.content}
              </p>
            ))}
        </div>
        {post?.content_section &&
          post.content_section.map((section) => (
            <div key={section._id} className="flex  flex-col gap-6">
              <h2 className="text-5xl">{section?.title}</h2>
              {section?.descriptions &&
                section.descriptions.map((desc) => (
                  <p
                    key={desc._id}
                    className="text-base font-medium text-[#A4A4A4]"
                  >
                    {desc.content}
                  </p>
                ))}
              {section.imgUrl && (
                <div
                  className="relative w-full "
                  style={{ aspectRatio: "15/7" }}
                >
                  <Image
                    src={section?.imgUrl}
                    layout="fill"
                    objectFit="cover"
                    alt={section?.title}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
              )}
            </div>
          ))}
      </div>
      <BlogLeftSidebar
        author={post?.written_by?.author}
        role={post?.written_by?.role}
      />
    </div>
  );
};

export default BlogdetailsPage;
