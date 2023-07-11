import { projects } from "@/app/utils";
import React from "react";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlineQuestion } from "react-icons/ai";
import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiNextdotjs, SiReactquery, SiHasura } from "react-icons/si";
import { BiLogoGraphql, BiLogoTailwindCss } from "react-icons/bi";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Projects = () => {
  const getTagIcon = (tag: string) => {
    switch (tag) {
      case "typescript":
        return <TbBrandTypescript size="1.2rem" />;
      case "reactjs":
        return <IoLogoReact />;
      case "nextjs":
        return <SiNextdotjs />;
      case "graphql":
        return <BiLogoGraphql />;
      case "node":
        return <IoLogoNodejs />;
      case "tailwind":
        return <BiLogoTailwindCss />;
      case "react-query":
        return <SiReactquery />;
      case "hasura":
        return <SiHasura />;
      default:
        return <AiOutlineQuestion />;
    }
  };
  const ProjectItem = ({
    className,
    name,
    tags,
    url,
    img,
  }: {
    className?: string;
    name: string;
    tags: string[];
    url: string;
    img?: StaticImport | string;
  }) => {
    console.log(img);
    return (
      <div
        className={`${className} w-full py-2 md:py-6 border-b-white border-b group relative`}
      >
        <a
          className="text-xl md:text-2xl uppercase font-extralight hover:cursor-pointer hover:text-lime hover:font-medium"
          href={url}
          target="_blanka"
        >
          {name}
        </a>
        <div className="flex items-center gap-2 text-lime">
          {tags.map((tag, index) => {
            return <div key={index}>{getTagIcon(tag)}</div>;
          })}
        </div>
        <p className="text-sm mt-2">FRONTEND, BACKEND</p>
        {img && (
          <div className="absolute top-0 right-0 hidden group-hover:block mt-5">
            <Image src={img} alt={name} width={50} height={50} />
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="bg-black text-white min-h-screen flex md:justify-center md:items-center w-full">
      <div className="md:ml-[100px] py-8 md:py-16 lg:py-24 w-full">
        <div className="container mx-auto px-4">
          <p className="mb-5 lg:mb-12 uppercase text-lime">Projects</p>
          <div className="grid md:grid-cols-2 w-full md:gap-x-5">
            {projects.map(({ name, tags, url, img }) => {
              return (
                <>
                  <ProjectItem
                    className="border-t border-t-white"
                    name={name}
                    tags={tags}
                    url={url}
                    img={img}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
