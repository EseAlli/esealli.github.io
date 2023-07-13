"use client";

import React, { useEffect, useState } from "react";
import { RiLinkedinLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { FaHashnode } from "react-icons/fa6";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const changeNavbarColor = () => {
    if (window.scrollY >= 80 && window.scrollY <= 1179) {
      setColorChange(true);
    } else if (window.scrollY >= 1180) {
      setColorChange(false);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <>
      <nav className="fixed bg-transparent bottom-0 md:top-0 md:left-0 w-full md:w-auto text-2xl z-50">
        <div
          className={`${show ? "h-screen" : ""} ${
            colorChange ? "bg-black text-lightblue" : "bg-lightblue text-black"
          } flex h-full md:pb-6 lg:pb-10 px-2 md:px-3`}
        >
          <ul className={`${show ? "flex flex-col px-4" : "hidden"} w-full`}>
            <li
              className="pt-3 items-end md:ml-12 flex text-lg hover:underline hover:cursor-pointer"
              onClick={handleClick}
            >
              close
            </li>
            <li className="pt-12">
              <ul className="gap-y-3 flex flex-col">
                <li onClick={handleClick}>
                  <AnchorLink href="#about">About</AnchorLink>
                </li>
                <li onClick={handleClick}>
                  <AnchorLink href="#projects">Projects</AnchorLink>
                </li>
                <li className="flex gap-2 items-center" onClick={handleClick}>
                  <a
                    href="https://www.linkedin.com/in/ese-alli/"
                    className="hover:animate-pulse"
                  >
                    <RiLinkedinLine />
                  </a>
                  <a
                    href="https://github.com/EseAlli/"
                    className="hover:animate-pulse"
                  >
                    <VscGithubAlt />
                  </a>
                  <a
                    href="https://eseoghenealli.hashnode.dev/"
                    className="hover:animate-pulse"
                  >
                    <FaHashnode />
                  </a>
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
    </>
  );
};

export default Nav;
