import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robert Fradette - Political Portfolio",
  description: "Official political portfolio and campaign website of Robert Fradette",
  keywords: ["politics", "campaign", "election", "Robert Fradette", "government"],
  authors: [{ name: "Robert Fradette" }],
  openGraph: {
    title: "Robert Fradette - Political Portfolio",
    description: "Official political portfolio and campaign website of Robert Fradette",
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
