import React from "react";
import { ContactDock } from "./ContactDock";

export function ContactSection() {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-center font-bold mb-4 text-gray-200 tracking-wide">
          wanna talk?
        </h2>

        <ContactDock />
      </div>
    </div>
  );
}
