"use client";

import { useLayoutStore } from "@/store/layoutStore";
import React from "react";
//import { TabList } from "@/components/Layout/EditorTabs/TabList";
//import { useEditorStore } from "@/store/editorStore";

interface EditorProps {
  children: React.ReactNode;
}

export function Editor({ children }: EditorProps) {
  //const { openTabs, activeTab, closeTab, setActiveTab } = useEditorStore();
  const { sidebarOpen, isMobile } = useLayoutStore();

  const openState = () => {
    if (isMobile) {
      return sidebarOpen ? "hidden" : "flex-1 flex flex-col";
    }

    return "flex-1 flex flex-col";
  };

  return (
    <div className={openState()}>
      {/* <TabList
        tabs={openTabs}
        activeTab={activeTab}
        onTabClick={setActiveTab}
        onTabClose={closeTab}
      /> */}
      <div className="flex-1 bg-grey-d overflow-auto pb-[22px]">
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
