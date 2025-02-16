import React from "react";
import SkillsCloud from "./SkillsCloud";
import SkillsTab from "./SkillsTab";
import { SKILLS } from "@/constants";

export function SkillsSection() {
  return (
    <div className="mt-12 lg:mb-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative flex gap-6">
          <div className="w-full xl:w-[66%] justify-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-200 tracking-wide">
              what&apos;s my skillset?
            </h2>
            <SkillsTab skills={SKILLS}></SkillsTab>
          </div>
          <div className="hidden xl:block w-[31%] mx-auto justify-center">
            <SkillsCloud />
          </div>
        </div>
      </div>
    </div>
  );
}
