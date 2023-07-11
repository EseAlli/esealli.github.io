"use client";
import Image from "next/image";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const qual = ["Ese", "A Frontend <br/> Engineer"];
  const handleScroll = () => {
    console.log("scrolled");
    router.push("/about");
  };
  return (
    <div className="bg-black min-h-screen text-lime">
      <div className="md:ml-[150px] py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="">
            <h1 className="text-xl md:text-3xl lg:text-9xl uppercase font-bold">
              Hello, <br /> <span className="w-max">I am Ese</span>
            </h1>
            <p className="mt-4 md:mt-8 max-w-xl tracking-widest">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              ratione qui dolorem nam quia repellat quasi, dolore illo provident
              necessitatibus nostrum, et, nobis laboriosam optio est iste dolor
              officia! Eum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas praesentium quisquam dolorum ab iusto laborum?
              Voluptatem optio ipsa voluptates quos iste eveniet, similique ex
              unde dolor molestiae soluta nobis quidem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
