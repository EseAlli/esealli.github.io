import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-lightblue text-black min-h-screen flex md:justify-center md:items-center w-full"
    >
      <div className="md:ml-[100px] lg:ml-[150px] py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-y-3 md:gap-x-7 lg:gap-x-4">
            <div>
              <Image
                src="/powerful.svg"
                alt="powerful"
                width={250}
                height={250}
              />
              <div>
                <p className="uppercase font-semibold my-2">Skills</p>
                <ul className="grid grid-cols-2 ml-3 lg:grid-cols-3 list-disc md:ml-6">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Reactjs</li>
                  <li>TypeScript</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="">
                <p className="font-bold">ABOUT</p>
                <p className="mt-3 md:mt-8 max-w-xl tracking-widest md:text-sm text-base lg:text-base">
                  I am a passionate Frontend Engineer with <b>3+ years</b> of
                  experience and proficiency in <b>JavaScript</b> and {"Its"}{" "}
                  libraries. I specialize in designing and developing web
                  applications that deliver outstanding user experiences. In
                  addition to my technical expertise, I love sharing my
                  knowledge and insights on technology. I am also passionate
                  about <b>empowering women</b> and <b>promoting diversity</b>{" "}
                  in the tech industry. As a collaborator and team player, I
                  have experience working with cross-functional teams to deliver
                  successful projects. My <i>super powers</i> are my{" "}
                  <b>ambition</b> and my
                  <b> ability to learn anything</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
