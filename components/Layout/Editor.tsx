"use client";

import { useLayoutStore } from "@/store/layoutStore";
import React from "react";

interface EditorProps {
  children: React.ReactNode;
}

export function Editor({ children }: EditorProps) {
  const { sidebarOpen, isMobile } = useLayoutStore();

  const openState = () => {
    if (isMobile) {
      return sidebarOpen ? "hidden" : "flex-1 flex flex-col";
    }

    return "flex-1 flex flex-col";
  };

  return (
    <div className={openState()}>
      <div className="flex-1 bg-grey-d overflow-auto pb-[22px]">
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
