import { create } from "zustand";

interface LayoutStore {
  sidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  sidebarOpen: true,
  openSidebar: () => set({ sidebarOpen: true }),
  closeSidebar: () => set({ sidebarOpen: false }),
  isMobile: false,
  setIsMobile: (isMobile: boolean) => set({ isMobile }),
}));
