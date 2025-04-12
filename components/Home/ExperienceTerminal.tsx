import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal";

export function ExperienceTerminal() {
  return (
    <Terminal className="bg-grey-d border-[#404040] border-2 min-h-full text-gray-200">
      <TypingAnimation className="text-xs">&gt; ./work_summary</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-xs text-green-500">
        <span>✔ Initializing career summary</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-xs text-blue-400">
        <span>[INFO] Loading development journey...</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-xs text-yellow-500">
        <span>$ Analyzing entry point: Rangara</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-xs text-gray-200">
        <span>→ Built high-traffic commercial platform and admin interface</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-xs text-gray-200">
        <span>→ Optimized server infrastructure</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="text-xs text-yellow-500">
        <span>$ Analyzing progression: SymptomStream</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5500} className="text-xs text-gray-200">
        <span>→ Led AI-powered hospital triage system development</span>
      </AnimatedSpan>

      <AnimatedSpan delay={6000} className="text-xs text-gray-200">
        <span>→ Drove project from concept to prototype</span>
      </AnimatedSpan>

      <AnimatedSpan delay={7000} className="text-xs text-yellow-500">
        <span>$ Analyzing current position: Affinity</span>
      </AnimatedSpan>

      <AnimatedSpan delay={7500} className="text-xs text-gray-200">
        <span>→ Developing AI-driven automotive CRM platform</span>
      </AnimatedSpan>

      <AnimatedSpan delay={8000} className="text-xs text-gray-200">
        <span>→ Implementing lead scoring and customer journey features</span>
      </AnimatedSpan>

      <AnimatedSpan delay={9000} className="text-xs text-blue-400">
        <span>[INFO] Generating career status...</span>
      </AnimatedSpan>

      <AnimatedSpan delay={9500} className="text-xs text-green-500">
        <span>STATUS: Building the future</span>
      </AnimatedSpan>

      <AnimatedSpan delay={10000} className="text-xs">
        <span>&gt; _</span>
      </AnimatedSpan>
    </Terminal>
  );
}
