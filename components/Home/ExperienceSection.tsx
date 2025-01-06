import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { EXPERIENCES } from "@/constants";

export function ExperienceSection() {
  return (
    <div className="py-12 bg-[#1E1E1E]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-gray-200 tracking-wide">
          my work experience:
        </h2>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-[#404040] last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full border-4 border-[#1E1E1E]" />

              <div className="bg-[#2D2D2D] rounded-lg p-6 border border-[#404040] hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  {exp.position}
                </h3>
                <h4 className="text-lg text-blue-400 mb-4">{exp.company}</h4>

                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
