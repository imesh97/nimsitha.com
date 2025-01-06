import React from "react";

interface SkillProps {
  name: string;
  level: number;
  category: string;
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group relative hover:bg-[#2D2D2D] p-2 rounded transition-colors">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-xs text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-[#333] rounded overflow-hidden">
        <div
          className="h-full bg-blue-400 rounded transition-all group-hover:bg-blue-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const skills: SkillProps[] = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Python", level: 75, category: "Backend" },
    { name: "AWS", level: 70, category: "DevOps" },
    { name: "Docker", level: 65, category: "DevOps" },
    { name: "GraphQL", level: 75, category: "Backend" },
    { name: "UI/UX Design", level: 70, category: "Design" },
  ];

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-gray-200 tracking-wide">
          what&apos;s my skillset?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6 text-gray-300">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
