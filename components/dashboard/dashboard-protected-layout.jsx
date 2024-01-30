"use client";

import { fetchUserSession, logoutAction } from "GlobalRedux/slices/userSlice";
import apiClient from "lib/api-client";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProtectDashboardLayout = ({ children }) => {
  const { userAuth, userSession } = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  const pathname = usePathname();

  // validate session
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
      }
    };

    if (userAuth && userAuth?.accessToken) {
      validateSession();
    }
  }, [dispatch, userAuth, pathname]);

  useEffect(() => {
    if (!userAuth?.accessToken) {
      redirect("/");
    }

    const checkUserSession = async () => {
      if (userAuth?.accessToken && !userSession) {
        dispatch(fetchUserSession(userAuth?.accessToken));
      }
    };

    checkUserSession();
  }, [userAuth, userSession, dispatch]);

  return <div>{children}</div>;
};

export default ProtectDashboardLayout;
