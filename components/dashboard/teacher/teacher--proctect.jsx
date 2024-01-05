"use client";

import { redirect } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const TeacherProtectedLayout = ({ children }) => {
  const { userSession } = useSelector((state) => state?.user);

  if (userSession && userSession.role !== "admins") {
    redirect("/dashboard");
  }

  return <div>{children}</div>;
};

export default TeacherProtectedLayout;
