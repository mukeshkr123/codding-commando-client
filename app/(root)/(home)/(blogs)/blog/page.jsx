import { LatestBlogItem } from "@/components/blogs/latest-blog-item";
import { OurBlogItem } from "@/components/blogs/our-blog-item";
import { blogData } from "data/blog-data";

const BlogsPage = () => {
  const latestPosts = blogData?.slice(0, 2);
  return (
    <div className="h-full w-full">
      <div className="bg-[url('/assets/blogs/blog-main.svg')] px-6 py-14 text-white lg:p-[130px]">
        <div className="flex max-w-2xl flex-col gap-y-2.5">
          <h3 className="text-base font-semibold md:text-lg">Blogs</h3>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Coding Commando Blogs
          </h2>
          <p className="mt-2 text-base font-medium md:text-lg">
            Discover exciting stories from our bloggers: From cloud, AI, and
            data to the metaverse, this is the place where new ideas come alive.
          </p>
        </div>
      </div>
      <div className="bg-dark-purple">
        {/* Latest Blog */}
        <div className="flex flex-col justify-between gap-6 p-6 sm:p-12 md:p-14 lg:flex-row lg:p-20">
          {latestPosts.map((item) => (
            <LatestBlogItem
              slug={item?.slug}
              bgUrl={item?.bgUrl}
              title={item?.title}
              key={item._id}
              intro={item?.intro}
            />
          ))}
        </div>
        {/* Our Blog */}
        <div className="grid grid-cols-1 gap-6 px-6 pb-20 sm:px-10 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-20">
          {blogData.map((item) => (
            <OurBlogItem
              bgUrl={item?.bgUrl}
              slug={item?.slug}
              title={item?.title}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
