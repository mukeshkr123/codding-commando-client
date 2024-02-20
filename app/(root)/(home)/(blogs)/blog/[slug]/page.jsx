import BlogLeftSidebar from "@/components/blogs/left-sidebar";
import { blogData } from "data/blog-data";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const BlogdetailsPage = ({ params }) => {
  const postSlug = params?.slug;
  const post = blogData.find((blog) => blog.slug === postSlug);

  if (!post) {
    redirect("/blog");
  }

  return (
    <div className="h-full w-full overflow-hidden bg-dark-purple px-6 pb-12 pt-20 text-white sm:px-10 md:px-12 lg:flex lg:px-8">
      <div className="flex w-full flex-col lg:pl-16 lg:pr-28">
        <div className="flex flex-col space-y-10 pb-4">
          <Link href="/blog" className="text-sm text-slate-100 sm:text-base">
            BLOG
          </Link>
          <h1 className="text-[32px] font-semibold lg:text-6xl">
            {post?.title}
          </h1>
          <div className="flex gap-20 ">
            <p className="text-sm sm:text-base">{post?.read_time}</p>
            <p className="text-sm sm:text-base">{post?.postedDate}</p>
          </div>
        </div>
        <div
          className="mt-2 h-1 w-full md:mb-4"
          style={{
            background:
              "linear-gradient(90deg, #F9C8EE 0%, #F383D9 25%, #E2B781 50%, #9DF0AC 100%)",
          }}
        />
        <div className="flex flex-col gap-4 py-8">
          {post.descriptions.map((desc) => (
            <p className="text-base font-medium text-[#A4A4A4]" key={desc?._id}>
              {desc?.content}
            </p>
          ))}
        </div>
        {post.content_section.map((section) => (
          <div key={section?._id} className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              {section?.title}
            </h2>
            {section.descriptions.map((desc) => (
              <p
                key={desc?._id}
                className="text-base font-medium text-[#A4A4A4]"
              >
                {desc?.content}
              </p>
            ))}
            {section.imgUrl && (
              <div className="relative w-full " style={{ aspectRatio: "15/7" }}>
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
        author={post?.written_by.author}
        role={post?.written_by.role}
      />
    </div>
  );
};

export default BlogdetailsPage;
