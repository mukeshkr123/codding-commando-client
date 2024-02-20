import { LatestBlogItem } from "@/components/blogs/latest-blog-item";
import { OurBlogItem } from "@/components/blogs/our-blog-item";
import { blogData } from "data/blog-data";

const BlogsPage = () => {
  const latestPosts = blogData?.slice(0, 2);
  return (
    <div className="h-full w-full bg-dark-purple pt-10">
      <div className="relative px-6  py-14  text-white lg:p-[130px]">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/assets/video/blog2_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10 flex max-w-2xl flex-col gap-y-2.5">
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
