import React from "react";
import { ContactDock } from "./ContactDock";

export function ContactSection() {
  return (
    <div className="pt-12 sm:pt-20 pb-12">
      <div className="max-[24rem]:max-w-[16rem] max-[25rem]:max-w-[18rem] max-[27rem]:max-w-[23rem] sm:max-w-6xl sm:mx-auto px-0 sm:px-6">
        <h2 className="text-3xl text-center font-bold mb-4 text-gray-200 tracking-wide">
          wanna connect?
        </h2>

        <ContactDock />
      </div>
    </div>
  );
}
