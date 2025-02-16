"use client";

import React, { useState } from "react";
import { Calendar, CornerDownRight, MapPin } from "lucide-react";
import { EXPERIENCES } from "@/constants";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { ExperienceTerminal } from "./ExperienceTerminal";

function AchievementAccordion({ achievements }: { achievements: string[] }) {
  const [isAchievementsOpen, setIsAchievementsOpen] = useState<boolean>(false);

  return (
    <Accordion type="single" collapsible className="w-full mb-0 pb-0">
      <AccordionItem value="item-1" className="border-none font-content">
        <AccordionTrigger
          className="text-gray-300 text-lg font-normal mb-0 pb-3 underline-offset-4"
          onClick={() =>
            setIsAchievementsOpen((isAchievementsOpen) => !isAchievementsOpen)
          }
        >
          <div className="inline-flex transition-all">
            <CornerDownRight className="mr-2 h-6 w-6 text-blue-400" />
            view my responsibilities / achievements
            {isAchievementsOpen ? ":" : ""}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 pl-1">
            {achievements.map((achievement, i) => (
              <li
                key={i}
                className="text-gray-400 flex items-start text-base font-base py-0 my-0"
              >
                <span className="text-blue-400 mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function ExperienceSection() {
  return (
    <div className="py-12 bg-[#1E1E1E]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-gray-200 tracking-wide">
          my work experience:
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="space-y-0 w-full xl:max-w-[66%]">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={index}
                className="relative sm:pl-8 pb-4 sm:border-l-2 border-[#404040] last:pb-0"
              >
                <div className="hidden sm:block absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full border-4 border-[#1E1E1E]" />

                <div className="bg-grey rounded-lg p-6 pb-2 border border-grey-l hover:border-blue-400 transition-colors">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-0">
                    <div className="flex items-start gap-5">
                      <Link
                        href={exp.site}
                        target="_blank"
                        className="hidden sm:block"
                      >
                        <img
                          src={exp.logo}
                          alt={`${exp.company} - Logo`}
                          className="w-16 h-16 object-contain opacity-100 cursor-pointer filter grayscale-0 hover:grayscale transition-all duration-300"
                        />
                      </Link>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-200 mb-1">
                          {exp.position}
                        </h3>
                        <h4 className="text-base font-semibold tracking-wide text-blue-400 underline underline-offset-8">
                          <Link href={exp.site} target="_blank">
                            {exp.company}
                          </Link>
                        </h4>
                      </div>
                    </div>

                    <div className="text-base font-base font-content text-gray-400 text-right w-full md:w-auto flex flex-row md:flex-col mt-4 md:mt-0">
                      <div className="flex items-center justify-end mr-4 md:mr-0 mb-0 md:mb-3">
                        <Calendar
                          className="w-4 h-4 mr-1 sm:mr-2"
                          strokeWidth={1.75}
                        />
                        {exp.period}
                      </div>
                      <div className="flex items-center justify-end">
                        <MapPin
                          className="w-4 h-4 mr-1 sm:mr-2"
                          strokeWidth={1.75}
                        />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <AchievementAccordion achievements={exp.achievements} />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden xl:block w-full xl:w-[31%] 3xl:w-[33%]">
            <ExperienceTerminal />
          </div>
        </div>
      </div>
    </div>
  );
}
