import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  demoUrlText?: string;
  githubUrl: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
  demoUrlText,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="grid-col-1 group bg-grey rounded-lg overflow-hidden border border-grey-l hover:border-blue-400 transition-all h-full flex flex-col">
        <div className="aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={640}
            height={360}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6 flex flex-col grow">
          <div className="grow">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              {title}
            </h3>
            <p className="text-gray-400 mb-4 font-normal">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <Badge
                  className="text-xs font-base transition-colors bg-grey-l text-gray-300 hover:bg-blue-600 hover:text-gray-200 cursor-default"
                  key={index}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex space-x-2 mt-auto">
            <Button
              asChild
              className="text-sm bg-grey-d text-gray-300 hover:text-blue-400 p-3"
            >
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                <span className="inline">{demoUrlText ? demoUrlText : "demo"}</span>
              </Link>
            </Button>

            {githubUrl.length > 0 && (
              <Button
                asChild
                variant={"link"}
                className="text-sm text-gray-300 hover:text-blue-400 p-3"
              >
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  <span>source</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
