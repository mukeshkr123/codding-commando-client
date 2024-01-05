"use client";

import { fetchUserSession } from "GlobalRedux/slices/userSlice";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProtectDashboardLayout = ({ children }) => {
  const { userAuth, userSession } = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userAuth?.accessToken) {
      redirect("/");
    }

    const checkUserSession = async () => {
      if (userAuth?.accessToken && !userSession) {
        try {
          dispatch(fetchUserSession(userAuth?.accessToken));
        } catch (error) {
          console.log(error);
        }
      }
    };

    checkUserSession();
  }, [userAuth, userSession, dispatch]);

  return <div>{children}</div>;
};

export default ProtectDashboardLayout;
