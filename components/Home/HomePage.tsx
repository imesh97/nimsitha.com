import React from "react";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";
import { ContactSection } from "./ContactSection";
import { fontContent } from "@/app/layout";

export function HomePage() {
  return (
    <div
      className={`min-h-screen bg-grey-d ${fontContent.variable} page container mx-auto`}
    >
      <HeroSection />
      {/* <AboutSection /> */}
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
