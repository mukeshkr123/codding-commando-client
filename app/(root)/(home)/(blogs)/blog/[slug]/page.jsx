import { allBlogs } from ".contentlayer/generated";
import BlogLeftSidebar from "@/components/blogs/left-sidebar";
import RenderMdx from "@/components/blogs/render-mdx";
import { format, parseISO } from "date-fns";
import { redirect } from "next/navigation";

const BlogdetailsPage = ({ params }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    return redirect("/blogs");
  }

  return (
    <div className="h-full w-full overflow-hidden bg-dark-purple px-6 pb-12 pt-20 text-white sm:px-10 md:px-12 lg:flex lg:px-8">
      <article className="flex w-full flex-col lg:pl-16 lg:pr-28">
        <div className="flex flex-col space-y-10 pb-4">
          <span className="text-sm text-slate-100 sm:text-base">BLOG</span>
          <h1 className="text-[32px] font-semibold md:text-6xl">
            {blog.title}
          </h1>
          <div className="flex gap-20">
            <p className="text-sm sm:text-base">{blog.readingTime?.text}</p>
            <p className="text-sm sm:text-base">
              {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
            </p>
          </div>
        </div>
        <div
          className="mb-4 mt-2 h-1 w-full "
          style={{
            background:
              "linear-gradient(90deg, #F9C8EE 0%, #F383D9 25%, #E2B781 50%, #9DF0AC 100%)",
          }}
        />

        {/* RenderMdx  */}
        <RenderMdx blog={blog} />
      </article>
      {/* TODO: add later role */}
      <BlogLeftSidebar
        author={blog.author}
        role={
          "Managing Director – Health & Public Service, Social Services and Workforce & Talent Transformation"
        }
      />
    </div>
  );
};

export default BlogdetailsPage;
