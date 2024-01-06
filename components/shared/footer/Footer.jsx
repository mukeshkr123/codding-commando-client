import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Demo",
    href: "/demo",
  },
];

const Courses = [
  {
    title: "Complete SalesForce",
    href: "/courses",
  },
  {
    title: "Mastering Apex",
    href: "/courses",
  },
  {
    title: "Mastering LWC",
    href: "/courses",
  },
  {
    title: "Java",
    href: "/courses",
  },
];

const Footer = () => {
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
          <FooterItem title="Courses" items={Courses} />
          <FooterItem title="Contact us" items={Courses} />
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
