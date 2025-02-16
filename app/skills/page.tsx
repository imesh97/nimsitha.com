import { SKILLS, Skill } from "@/constants";

function formatSkillsData(skills: Skill[]) {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  const newSkills = categories.map((category) => ({
    category,
    skills: skills
      .filter((skill) => skill.category === category)
      .map((skill) => skill.name),
  }));

  return newSkills;
}

function formatSkillsOutput(skills: { category: string; skills: string[] }[]) {
  return (
    "var MY_SKILLS = [\n" +
    skills
      .map(
        (categoryGroup) =>
          "  {\n" +
          `    category: "${categoryGroup.category}",\n` +
          "    skills: [\n" +
          categoryGroup.skills.map((skill) => `      "${skill}"`).join(",\n") +
          "\n" +
          "    ]\n" +
          "  }"
      )
      .join(",\n") +
    "\n]"
  );
}

export default function Skills() {
  const skills = formatSkillsData(SKILLS);
  const output = formatSkillsOutput(skills);

  return (
    <div className="whitespace-pre-wrap font-code">
      <p>{output}</p>
    </div>
  );
}
