import RootLayout from "@/app/blog/layout"

export default async function Layout({children}: {children: React.ReactNode}) {
  return (
    <RootLayout>{children}</RootLayout>
  );
}