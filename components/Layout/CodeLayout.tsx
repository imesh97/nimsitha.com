import React from "react";
import Sidebar from "@/components/Layout/Sidebar";
import ActivityBar from "@/components/Layout/ActivityBar";
import StatusBar from "@/components/Layout/StatusBar";
import { Editor } from "@/components/Layout/Editor";
import { fontCode } from "@/app/layout";

export default function CodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`h-screen flex flex-col bg-grey-d text-white ${fontCode.variable}`}
    >
      <div className="h-10 bg-[#323233] flex items-center px-4 border-b border-[#424242]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>
        <div className="mx-auto text-sm text-gray-300">
          Portfolio - Imesh Nimsitha
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <ActivityBar />
        <Sidebar />
        <Editor>{children}</Editor>
        <StatusBar />
      </div>
    </div>
  );
}
