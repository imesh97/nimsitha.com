import { Files, Folder } from "lucide-react";

export default function ActivityBar() {
  return (
    <div className="w-12 bg-[#333333] flex flex-col items-center py-4 space-y-4">
      <Folder className="w-6 h-6 text-white cursor-pointer hover:text-blue-500" />
      <Files className="w-6 h-6 text-gray-500 cursor-not-allowed" />
    </div>
  );
}
