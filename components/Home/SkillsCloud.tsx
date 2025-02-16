import { IconCloud } from "@/components/magicui/icon-cloud";
import { SKILLS } from "@/constants";

export default function SkillsCloud() {
  const images = SKILLS.filter(
    (skill): skill is { img: string; name: string; category: string } =>
      typeof skill.img === "string"
  ).map((skill) => skill.img);

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden p-4 cursor-pointer">
      <IconCloud images={images} />
    </div>
  );
}
