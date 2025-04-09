import Link from "next/link";
import { PostCard } from "nextra-theme-blog";
import { getPosts, getTags } from "@/lib/blog";

export const metadata = {
  title: "imesh nimsitha's blog",
};

export default async function BlogPage() {
  const tags = await getTags();
  const posts = await getPosts();
  const allTags = Object.create(null);

  for (const tag of tags) {
    allTags[tag] ??= 0;
    allTags[tag] += 1;
  }
  return (
    <div data-pagefind-ignore="all">
      <h1 className="text-gray-300">✏️ my blog.</h1>

      <div
        className="not-prose"
        style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}
      >
        {Object.entries(allTags).map(([tag, count]) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="bg-grey-l text-gray-300 hover:bg-blue-600 hover:text-gray-200 cursor-default px-3 rounded-full transition-colors duration-300"
          >
            {tag} ({count})
          </Link>
        ))}
      </div>
      {posts.map((post) => (
        <PostCard key={post.route} post={post} />
      ))}
    </div>
  );
}
