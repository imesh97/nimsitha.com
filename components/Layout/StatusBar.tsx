import React from "react";
import { GitBranch, Wifi, Bell } from "lucide-react";

export default function StatusBar() {
  const year = new Date().getFullYear();

  return (
    <div className="flex h-[22px] bg-[#007ACC] text-gray-100 text-xs fixed bottom-0 left-0 right-0 z-50 items-center justify-between px-2 border-t border-[#007ACC]/50">
      <div className="flex items-center space-x-4 h-full">
        <div className="flex items-center space-x-1 hover:bg-[#1F8AD2] px-2 pt-0.5 pb-1 cursor-pointer transition-colors">
          <GitBranch className="w-3.5 h-3.5" />
          <span>main</span>
        </div>
        <span className="hover:bg-[#1F8AD2] px-2 pt-0.5 pb-1 cursor-pointer transition-colors">
          {year} Imesh Nimsitha
        </span>
      </div>

      <div className="flex items-center h-full">
        <div className="hover:bg-[#1F8AD2] px-2 pt-0.5 pb-1 cursor-pointer transition-colors">
          <Wifi className="w-3.5 h-3.5" />
        </div>
        <div className="hover:bg-[#1F8AD2] px-2 pt-0.5 pb-1 cursor-pointer transition-colors">
          <Bell className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
