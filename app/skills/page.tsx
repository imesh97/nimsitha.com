import React from 'react';
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

const CodeLine = ({ indent = 0, children }: { indent?: number; children: React.ReactNode }) => (
  <div style={{ paddingLeft: `${indent * 16}px` }}>
    {children}
  </div>
);

const Keyword = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "var(--color-red-400)" }}>{children}</span>
);

const Variable = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "var(--color-yellow-400)" }}>{children}</span>
);

const String = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "var(--color-green-400)" }}>{`"${children}"`}</span>
);

const Property = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "var(--color-blue-400)" }}>{children}</span>
);

const Punctuation = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "var(--color-gray-400)" }}>{children}</span>
);

export default function Skills() {
  const skills = formatSkillsData(SKILLS);
  
  return (
    <div className="whitespace-pre-wrap font-code text-gray-300">
      <CodeLine>{`// still working on this`}</CodeLine>
      <br />
      <CodeLine>
        <Keyword>var</Keyword> <Variable>MY_SKILLS</Variable> <Punctuation>=</Punctuation> <Punctuation>[</Punctuation>
      </CodeLine>
      {skills.map((categoryGroup, i) => (
        <React.Fragment key={categoryGroup.category}>
          <CodeLine indent={1}>
            <Punctuation>{`{`}</Punctuation>
          </CodeLine>
          <CodeLine indent={2}>
            <Property>category</Property><Punctuation>:</Punctuation> <String>{categoryGroup.category}</String><Punctuation>,</Punctuation>
          </CodeLine>
          <CodeLine indent={2}>
            <Property>skills</Property><Punctuation>:</Punctuation> <Punctuation>[</Punctuation>
          </CodeLine>
          {categoryGroup.skills.map((skill, j) => (
            <CodeLine key={skill} indent={3}>
              <String>{skill}</String>{j < categoryGroup.skills.length - 1 ? <Punctuation>,</Punctuation> : null}
            </CodeLine>
          ))}
          <CodeLine indent={2}>
            <Punctuation>]</Punctuation>
          </CodeLine>
          <CodeLine indent={1}>
            <Punctuation>{'}'}</Punctuation>{i < skills.length - 1 ? <Punctuation>,</Punctuation> : null}
          </CodeLine>
        </React.Fragment>
      ))}
      <CodeLine>
        <Punctuation>]</Punctuation>
      </CodeLine>
    </div>
  );
}