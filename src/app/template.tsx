"use client";
import { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log("Log page view");
  }, []);
  return <>{children}</>;
};

export default Template;
