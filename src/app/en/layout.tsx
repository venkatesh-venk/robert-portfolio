import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocaleProvider } from "@/contexts/LocaleContext";
import "../globals.css";

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

export default async function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Import English messages
  const messages = (await import('../../../messages/en.json')).default;

  return (
    <html lang="en">
      <body className={inter.className}>
        <LocaleProvider locale="en" messages={messages}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}