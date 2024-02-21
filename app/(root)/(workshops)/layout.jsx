import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const layout = ({ children }) => {
  return <div className={`${poppins.className} h-full w-full`}>{children}</div>;
};

export default layout;
