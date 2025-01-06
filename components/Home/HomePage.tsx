import React from "react";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";
import { ContactSection } from "./ContactSection";
import { fontContent } from "@/app/layout";

export function HomePage() {
  return (
    <div className={`min-h-screen bg-grey-d ${fontContent.variable} page`}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
