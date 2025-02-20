"use client";

import { CircularRevealHeading } from "@/components/ui/circular-reveal-heading";
import { BrainCircuit } from "lucide-react";

const items = [
  {
    text: "INNOVATE",
    image: "/assets/innovate.png",
  },
  {
    text: "DEVELOP",
    image: "/assets/develop.png",
  },
  {
    text: "PRODUCE",
    image: "/assets/produce.png",
  },
  {
    text: "DESIGN",
    image: "/assets/design.png",
  },
];

export function HeroCircle() {
  return (
    <div className="flex items-center justify-center">
      <CircularRevealHeading
        items={items}
        centerText={
          <div className="text-xl font-bold text-[#444444] cursor-default inline-flex items-center justify-center align-middle">
            <BrainCircuit className="mr-1" />
            imesh.
          </div>
        }
        size="md"
      />
    </div>
  );
}
