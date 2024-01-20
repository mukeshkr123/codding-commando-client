"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavMenu } from "./nav-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import apiClient from "lib/api-client";
import { logoutAction } from "GlobalRedux/slices/userSlice";

const UserAvatar = ({ navLinks }) => {
  const { userAuth } = useSelector((state) => state?.user);
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const validateSession = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userAuth?.accessToken}`,
          },
        };
        await apiClient.get("/validate-session", config);
      } catch (error) {
        dispatch(logoutAction());
        console.log("error", error);
      }
    };

    if (userAuth && userAuth?.accessToken) {
      validateSession();
    }
  }, [dispatch, userAuth]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {userAuth ? (
        <div className="hidden md:flex">
          <NavMenu user={userAuth} />
        </div>
      ) : (
        <Link href="/login">
          <Button
            className="hidden border border-black bg-[#F5478E] px-4 transition duration-300 hover:bg-[#d43977] md:flex"
            style={{ boxShadow: "3px 2px 0 0 white" }}
          >
            <span className="text-lg font-semibold">Login</span>
          </Button>
        </Link>
      )}
      <div className="md:hidden">
        <MobileNav navLinks={navLinks} userAuth={userAuth} />
      </div>
    </>
  );
};

export default UserAvatar;
