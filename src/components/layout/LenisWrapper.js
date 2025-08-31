"use client";
import useLenisScroll from "@/hooks/useLenisScroll";
import React from "react";

const LenisWrapper = ({ children }) => {
  useLenisScroll();

  return <div>{children}</div>;
};

export default LenisWrapper;
