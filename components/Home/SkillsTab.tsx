import { Skill } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function SkillsTab({ skills }: { skills: Skill[] }) {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <Tabs defaultValue={categories[0]} className="pb-8">
      <TabsList className="mb-4 w-full">
        {categories.map((category) => (
          <TabsTrigger
            key={`trigger-${category}`}
            value={category}
            className="text-base w-full bg-grey underline underline-offset-4"
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => (
        <TabsContent key={`tab-${category}`} value={category} className="">
          <div className="flex gap-4 flex-wrap px-4">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <div
                  key={index}
                  className="text-xl font-semibold p-3 text-gray-100 inline-flex items-center gap-2"
                >
                  {(skill.icon || skill.img) && (
                    <img
                      src={
                        skill.icon
                          ? `https://cdn.simpleicons.org/${skill.icon}/${skill.icon}`
                          : skill.img
                      }
                      alt={skill.name}
                      width="32"
                      height="32"
                      className="filter grayscale-0 hover:grayscale cursor-pointer transition-all duration-300"
                    />
                  )}
                  {skill.name}
                </div>
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
