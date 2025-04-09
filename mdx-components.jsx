import { useMDXComponents as getBlogMDXComponents } from "nextra-theme-blog";

const blogComponents = getBlogMDXComponents({
  h2: ({ children }) => <h2 style={{ color: "#3b82f6" }}>{children}</h2>,
  DateFormatter: ({ date }) =>
    `Last updated at ${date.toLocaleDateString("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}`,
});

export function useMDXComponents(components) {
  return {
    ...blogComponents,
    ...components,
  };
}
