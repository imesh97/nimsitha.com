import { Footer, Layout, Navbar } from "nextra-theme-blog";
import { Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-blog/style.css";
import Link from "next/link";
import "@/app/globals.css";
import "./styles.css";

export const metadata = {
  title: "imesh nimsitha's blog",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Navbar pageMap={await getPageMap()}>
        <Search placeholder="Search posts..." />
      </Navbar>

      <div id="blog-content">{children}</div>

      <Footer>
        {new Date().getFullYear()} Imesh Nimsitha.
        <Link href="/rss.xml" style={{ float: "right" }}>
          RSS
        </Link>
      </Footer>
    </Layout>
  );
}
