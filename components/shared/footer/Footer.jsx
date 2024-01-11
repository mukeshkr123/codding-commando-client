"use client";

import React, { useEffect, useState } from "react";

import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { ErrorToast } from "@/components/error-toast";
import apiClient from "lib/api-client";

const FollowLinks = [
  {
    icon: <FaTelegram aria-label="Telegram" className="text-lg sm:text-xl" />,
    href: "https://www.instagram.com/coding.commando/",
  },
  {
    icon: <FaInstagram aria-label="Instagram" className="text-lg sm:text-xl" />,
    href: "https://www.instagram.com/coding.commando/",
  },
  {
    icon: <FaFacebook aria-label="Facebook" className="text-lg sm:text-xl" />,
    href: "",
  },
  {
    icon: <FaWhatsapp aria-label="WhatsApp" className="text-lg sm:text-xl" />,
    href: "",
  },
];

const UseFullLinks = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
  {
    title: "Demo",
    href: "/demo",
  },
];

const Footer = () => {
  const [links, setLinks] = useState(null);
  const fetchLinks = async () => {
    try {
      const { data } = await apiClient.get("/links-courses");

      setLinks(data?.links);
    } catch (error) {
      ErrorToast(error);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div className="flex w-full flex-col gap-6 bg-dark-purple p-8 lg:flex-row">
      <Link href="/" className="lg:mr-4">
        <Image
          src="/assets/icons/logo.svg"
          alt="Logo"
          width={200}
          height={200}
        />
      </Link>
      <div className="flex w-full justify-between">
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <FooterItem title="UseFull Links" items={UseFullLinks} />
          <div>
            <h1 className="pb-2  text-lg font-semibold text-[#EBEBEB] ">
              Follow Links
            </h1>
            <div className="flex gap-2">
              {FollowLinks &&
                FollowLinks.map((link) => (
                  <Link href="/" key={link.href} className="text-white">
                    {link.icon}
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          {/* <FooterItem title="Trending Courses" items={Courses} /> */}

          <div className="flex flex-col gap-1 lg:w-1/2">
            <h1 className="pb-2 text-lg font-semibold text-[#EBEBEB]">
              Trending Courses
            </h1>
            {links &&
              links?.map((item) => (
                <Link
                  href={`/courses/${item?._id}`}
                  key={item?._id}
                  className=" text-sm text-gray-600 sm:text-base"
                >
                  {item?.title}
                </Link>
              ))}
          </div>

          <div className="flex flex-col gap-1 lg:w-1/2">
            <h1 className="pb-2 text-lg font-semibold text-[#EBEBEB]">
              Contact us
            </h1>
            <p className="text-sm  text-gray-600 sm:text-base">
              J485+59J, Shivpuri Rd, South{" "}
            </p>
            <p className="text-sm  text-gray-600 sm:text-base">
              Shivpuri, Shivpuri, Rajbansi{" "}
            </p>
            <p className="text-sm  text-gray-600 sm:text-base">
              Nagar, Patna, Bihar 800029
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterItem = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-1 lg:w-1/2">
      <h1 className="pb-2  text-lg font-semibold text-[#EBEBEB] ">{title}</h1>
      {items &&
        items.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="text-sm  text-gray-600 sm:text-base"
          >
            {link.title}
          </Link>
        ))}
    </div>
  );
};

export default Footer;
