"use client";

import React, { useState } from "react";
import { RiLinkedinLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";

const Nav = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <nav className="absolute bg-transparent bottom-0 md:top-0 md:left-0 w-full md:w-auto text-2xl">
      <div
        className={`${
          show && "h-screen"
        } flex h-full md:pb-6 lg:pb-10 bg-lime px-2 md:px-3`}
      >
        <ul className={`${show ? "flex flex-col px-4" : "hidden"} w-full`}>
          <li
            className="pt-3 items-end md:ml-12 flex text-lg underline hover:cursor-pointer"
            onClick={handleClick}
          >
            close
          </li>
          <li className="pt-12">
            <ul className="gap-y-3 flex flex-col">
              <li>About</li>
              <li>Projects</li>
              <li className="flex gap-2">
                <RiLinkedinLine />
                <VscGithubAlt />
              </li>
            </ul>
          </li>
        </ul>
        <p
          className={`${
            show ? "hidden" : "block"
          } md:-rotate-90 hover:cursor-pointer text-center md:self-end md:text-start w-full`}
          onClick={handleClick}
        >
          Menu
        </p>
      </div>
    </nav>
  );
};

export default Nav;
