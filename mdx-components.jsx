import { useMDXComponents as getBlogMDXComponents } from "nextra-theme-blog";

const blogComponents = getBlogMDXComponents({
  i: ({ children }) => <i style={{ color: "#3b82f6" }}>{children}</i>,
  p: ({ children }) => (
    <p
      style={{
        fontFamily: "var(--font-content2)",
        fontSize: "20px",
        lineHeight: "1.4",
      }}
    >
      {children}
    </p>
  ),
  h2: ({ children }) => (
    <h2
      style={{
        fontFamily: "var(--font-main)",
        fontSize: "1.75rem",
      }}
    >
      {children}
    </h2>
  ),
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
