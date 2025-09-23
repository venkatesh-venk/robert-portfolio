import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robert Feradett - Political Portfolio",
  description: "Official political portfolio and campaign website of Robert Feradett",
  keywords: ["politics", "campaign", "election", "Robert Feradett", "government"],
  authors: [{ name: "Robert Feradett" }],
  openGraph: {
    title: "Robert Feradett - Political Portfolio",
    description: "Official political portfolio and campaign website of Robert Feradett",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
