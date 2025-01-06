"use client";

import { useLayoutStore } from "@/store/layoutStore";
import { Files, Folder, Music, Search } from "lucide-react";
import { useEffect } from "react";

export default function ActivityBar() {
  const { sidebarOpen, openSidebar, closeSidebar, isMobile, setIsMobile } =
    useLayoutStore();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) closeSidebar();
  }, [isMobile]);

  return (
    <div className="w-12 bg-grey-l flex flex-col items-center py-4 space-y-6">
      <Files
        className="w-6 h-6 text-gray-100 cursor-pointer transition-colors hover:text-blue-500"
        onClick={sidebarOpen ? closeSidebar : openSidebar}
      />
      <Search className="w-6 h-6 text-gray-500 cursor-not-allowed" />
      <Folder className="w-6 h-6 text-gray-500 cursor-not-allowed" />
      <Music className="w-6 h-6 text-gray-500 cursor-not-allowed" />
    </div>
  );
}
