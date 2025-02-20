"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { SOCIALS } from "@/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import Image from "next/image";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function ContactDock() {
  return (
    <div className="relative">
      <TooltipProvider>
        <Dock
          direction="middle"
          className="border-grey-l bg-grey-l/50"
          iconSize={48}
          iconMagnification={64}
        >
          {SOCIALS.map((social, index) => (
            <DockIcon key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width="64"
                      height="64"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
