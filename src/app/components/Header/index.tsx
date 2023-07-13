import Image from "next/image";
import React from "react";
import { RiArrowDownFill } from "react-icons/ri";

const Header = () => {
  return (
    <section
      id="home"
      className="bg-black min-h-screen text-lightblue flex w-full items-center relative"
    >
      <div className="md:ml-[100px] xl:ml-[150px] py-16 lg:py-24 ">
        <div className="container mx-auto px-4">
          <div className="typewriter">
            <h1 className="text-3xl md:text-6xl xl:text-9xl uppercase font-bold">
              Hello, <span className="w-max flex-wrap">I am Ese Alli</span>
            </h1>
            <p className="mt-4 md:mt-8 max-w-xl tracking-widest font-medium">
              Frontend Engineer
            </p>
          </div>
          <div className="absolute right-0 top-0 animate-pulse group">
            <a
              href="https://open.spotify.com/playlist/6vnqp8QdSMu9aIbBSImLwR?si=84b84a0ae56e4aa0"
              target="_blank"
            >
              <Image
                src="/playlist.svg"
                alt="playlist"
                width={150}
                height={150}
              />
            </a>

            <p className="text-lightblue text-xs hidden group-hover:block">
              Check out my playlist
            </p>
          </div>

          <div className="absolute bottom-14 left-0 right-0 w-12 mx-auto animate-bounce">
            <RiArrowDownFill size="4rem" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
