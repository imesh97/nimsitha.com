import type { Metadata } from "next";
import { Afacad_Flux, Fira_Code, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CodeLayout from "@/components/Layout/CodeLayout";

export const fontCode = Fira_Code({
  variable: "--font-main",
  subsets: ["latin"],
});

export const fontContent = Plus_Jakarta_Sans({
  variable: "--font-content",
  subsets: ["latin"],
});

export const fontContent2 = Afacad_Flux({
  variable: "--font-content2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "imesh nimsitha",
  description:
    "Imesh Nimsitha's Personal Portfolio for Software Development, Graphic Design, and More",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontCode.variable} antialiased scroll-smooth`}>
        <CodeLayout>{children}</CodeLayout>
      </body>
    </html>
  );
}
