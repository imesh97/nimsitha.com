import React from "react";
import { ChevronDown, FileText } from "lucide-react";
import { sections } from "@/constants";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#252526] border-r border-[#424242] overflow-y-auto">
      <div className="p-3">
        <div className="text-sm text-gray-400 uppercase tracking-wide mb-2">
          Explorer
        </div>

        {sections.map((section) => (
          <div key={section.name}>
            <div className="flex items-center py-1 px-2 text-gray-300 hover:bg-[#37373d] cursor-pointer">
              <ChevronDown className="w-4 h-4 mr-1" />
              <span className="text-sm">{section.name}</span>
            </div>

            <div className="ml-4">
              {section.items.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="flex items-center py-1 px-2 text-gray-300 hover:bg-[#37373d] cursor-pointer"
                >
                  <FileText className="w-4 h-4 mr-2 text-[#519aba]" />
                  <span className="text-sm">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
