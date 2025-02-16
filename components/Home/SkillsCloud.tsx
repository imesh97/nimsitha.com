import { IconCloud } from "@/components/magicui/icon-cloud";
import { SLUGS } from "@/constants";

export default function SkillsCloud() {
  const images = SLUGS.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
