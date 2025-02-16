import React from "react";
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

export function ExperienceSection() {
  return (
    <div className="py-12 bg-[#1E1E1E]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-gray-200 tracking-wide">
          my work experience:
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="space-y-0 w-full lg:w-[66%] 3xl:w-[70%]">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-4 border-l-2 border-[#404040] last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full border-4 border-[#1E1E1E]" />

                <div className="bg-[#2D2D2D] rounded-lg p-6 pb-2 border border-[#404040] hover:border-blue-400 transition-colors">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-0">
                    <div className="flex items-start gap-6">
                      <Link
                        href={exp.site}
                        target="_blank"
                        className="hidden sm:block"
                      >
                        <img
                          src={exp.logo}
                          alt={`${exp.company} - Logo`}
                          className="w-16 h-16 object-contain opacity-100 cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      </Link>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-200 mb-2">
                          {exp.position}
                        </h3>
                        <h4 className="text-base font-semibold tracking-wide text-blue-400">
                          <Link href={exp.site} target="_blank">
                            {exp.company}
                          </Link>
                        </h4>
                      </div>
                    </div>

                    <div className="text-sm text-gray-400 text-right w-full md:w-auto flex flex-row md:flex-col mt-4 md:mt-0">
                      <div className="flex items-center justify-end mr-4 md:mr-0 mb-0 md:mb-4">
                        <Calendar className="w-4 h-4 mr-1 sm:mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center justify-end">
                        <MapPin className="w-4 h-4 mr-1 sm:mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <Accordion
                    type="single"
                    collapsible
                    className="w-full mb-0 pb-0"
                  >
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger className="text-gray-300 text-sm font-medium">
                        <div className="inline-flex">
                          <CornerDownRight className="mr-2 h-5 w-5" />
                          click here to view my achievements
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-gray-300 flex items-start"
                            >
                              <span className="text-blue-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
