import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-lime text-black min-h-screen flex md:justify-center md:items-center w-full">
      <div className="md:ml-[100px] lg:ml-[150px] py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-y-3 md:gap-x-7 lg:gap-x-4">
            <div>
              <Image
                src="/Powerful-pana.svg"
                alt="powerful"
                width={400}
                height={400}
              />
            </div>
            <div>
              <div className="">
                <p className="font-bold">ABOUT</p>
                <p className="mt-4 md:mt-8 max-w-xl tracking-widest md:text-sm text-base lg:text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore ratione qui dolorem nam quia repellat quasi, dolore
                  illo provident necessitatibus nostrum, et, nobis laboriosam
                  optio est iste dolor officia! Eum. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quas praesentium quisquam
                  dolorum ab iusto laborum? Voluptatem optio ipsa voluptates
                  quos iste eveniet, similique ex unde dolor molestiae soluta
                  nobis quidem!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
