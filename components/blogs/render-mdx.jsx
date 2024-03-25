"use client";

import React, { useEffect, useState } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const components = {
  Image: (props) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      className="my-6 rounded-lg "
      width="718"
      height="404"
      {...props}
      sizes="100vw"
    />
  ),
  p: (props) => (
    <p
      className="mb-4 text-base font-medium text-[#A4A4A4] md:text-lg"
      {...props}
    />
  ),
  h1: (props) => (
    <h1
      className="mb-4 text-3xl font-medium md:mb-6 md:text-4xl lg:text-5xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mb-4 text-xl font-light md:text-2xl lg:text-3xl"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="my-4 ml-10 flex list-disc flex-col gap-4" {...props} />
  ),
  li: (props) => (
    <li className="text-base text-[#A4A4A4] md:text-lg" {...props} />
  ),
  a: (props) => (
    <a {...props} target="_blank" className="text-blue-500 hover:underline" />
  ),
};

export default function RenderMdx({ blog }) {
  const [isMounted, setIsMounted] = useState(false);

  const MDXContent = useMDXComponent(blog.body.code);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <MDXContent components={components} />
    </div>
  );
}
