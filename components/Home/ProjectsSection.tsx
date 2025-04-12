import React from "react";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <div className="py-12 bg-[#1E1E1E]">
      <div className="max-[24rem]:max-w-[16rem] max-[25rem]:max-w-[18rem] max-[27rem]:max-w-[23rem] sm:max-w-6xl sm:mx-auto px-0 sm:px-6">
        <div className="relative flex flex-row mb-10 gap-4">
          <h2 className="text-3xl font-semibold text-gray-200 tracking-wide">
            i like working <br className="inline sm:hidden"/>on projects.
          </h2>
          <Link
            href="/projects"
            className={cn(
              "transition-colors text-gray-400 hover:text-blue-400 self-end py-0 my-0 font-light text-base tracking-wide"
            )}
          >
            view all
            <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
