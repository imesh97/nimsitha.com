import React from "react";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { NETWORKING_LINKS } from "@/constants";
import NetworkingButton from "./NetworkingButton";
import { HeroCircle } from "./HeroCircle";

const NETWORKING_BUTTONS = [
  {
    icon: <Github strokeWidth={1.75} className="w-8 h-8" />,
    ...NETWORKING_LINKS[0],
  },
  {
    icon: <Linkedin strokeWidth={1.75} className="w-8 h-8" />,
    ...NETWORKING_LINKS[1],
  },
  {
    icon: <Mail strokeWidth={1.75} className="w-8 h-8" />,
    ...NETWORKING_LINKS[2],
  },
  {
    icon: <FileText strokeWidth={1.75} className="w-8 h-8" />,
    ...NETWORKING_LINKS[3],
  },
];

export function HeroSection() {
  return (
    <div className="relative flex items-center">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-1 sm:py-12 lg:py-12 xl:py-16 2xl:py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="space-y-3 md:space-y-5">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent tracking-wide">
                imesh nimsitha
              </h1>
              <h2 className="text-2xl text-gray-300 tracking-wide font-medium">
                digital creator & <br className="inline sm:hidden" />
                software developer
              </h2>
              <p className="text-gray-400 text-xl font-light leading-relaxed md:leading-[1.75] max-w-md">
                I like building modern web applications and creating cool stuff
                on my computer. And yes, this <i>does</i> look like a code
                editor you might&apos;ve used before... Anyway, feel free to
                check out my files on the left and my links below!
              </p>
              <div className="pt-1 flex space-x-4">
                {NETWORKING_BUTTONS.map((button, index) => (
                  <NetworkingButton key={index} {...button} />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden xl:flex lg:col-span-2 relative">
            <HeroCircle />
            {/* <div className="aspect-square rounded-[1000px] overflow-hidden bg-[#2D2D2D] border border-[#404040] shadow-xl">
              <img
                src="https://placehold.co/400x400.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div> */}

            {/* <div className="absolute -bottom-2 right-12 p-4 bg-[#2D2D2D] rounded-lg border border-[#404040]">
              <Code2 className="w-8 h-8 text-blue-400" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
