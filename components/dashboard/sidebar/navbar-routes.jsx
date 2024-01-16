"use client";

import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../../ui/button";
import { UserAvatar } from "./nav-menu-avatar";
// import { SearchInput } from "../search/search-input";

const NavbarRoutes = () => {
  const pathname = usePathname();
  const { userSession } = useSelector((state) => state?.user);

  const isTeacher = userSession?.role === "admin";

  const isTeacherPage = isTeacher && pathname.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  // const isSearchPage = pathname === "/search";

  const linkButton = (href, children) => (
    <Link href={href}>
      <Button size="sm" variant="default">
        {children}
      </Button>
    </Link>
  );

  return (
    <>
      {/* {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )} */}

      <div className="ml-auto flex gap-x-2 justify-center items-center gap-10">
        {isTeacherPage || isCoursePage
          ? linkButton(
              "/dashboard",
              <>
                <LogOut className="mr-2 h-4 w-4" />
                Exit
              </>
            )
          : isTeacher
            ? linkButton("/teacher/courses", "Teacher Mode")
            : null}

        <UserAvatar
          imageUrl={userSession?.avatar}
          name={userSession?.name || "Profile"}
        />
      </div>
    </>
  );
};

export default NavbarRoutes;
