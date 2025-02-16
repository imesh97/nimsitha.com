import React from "react";
import SkillsCloud from "./SkillsCloud";
import SkillsTab from "./SkillsTab";
import { SKILLS } from "@/constants";

export function SkillsSection() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-gray-200 tracking-wide">
          what&apos;s my skillset?
        </h2>

        <div className="flex gap-6">
          <div className="w-[30%]">
            <SkillsCloud />
          </div>
          <div className="w-full justify-center">
            <SkillsTab skills={SKILLS}></SkillsTab>
          </div>
        </div>
      </div>
    </div>
  );
}
