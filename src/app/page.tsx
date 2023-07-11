"use client";
import Image from "next/image";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import About from "./components/About";

const Page = () => {
  const router = useRouter();
  const qual = ["Ese", "A Frontend <br/> Engineer"];
  const handleScroll = () => {
    console.log("scrolled");
    router.push("/about");
  };
  return (
    <>
      <Header />
      <About />
    </>
  );
};

export default Page;
