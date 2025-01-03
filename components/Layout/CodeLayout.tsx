import React from "react";
import Sidebar from "@/components/Sidebar";
import ActivityBar from "@/components/ActivityBar";

export default function CodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col bg-[rgb(30,30,30)] text-white">
      {/* VS Code-like top bar */}
      <div className="h-12 bg-[#323233] flex items-center px-4 border-b border-[#424242]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>
        <div className="mx-auto text-sm text-gray-400">
          Portfolio - Imesh Nimsitha
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <ActivityBar />
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 bg-[#1e1e1e] overflow-auto">
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
