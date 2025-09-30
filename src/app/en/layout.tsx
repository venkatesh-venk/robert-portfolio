import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocaleProvider } from "@/contexts/LocaleContext";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Citoyens en Action - Political Party",
  description: "Official website of Citoyens en Action - A progressive political movement committed to serving our community",
  keywords: ["politics", "campaign", "election", "Citoyens en Action", "government", "progressive", "community"],
  authors: [{ name: "Citoyens en Action" }],
  openGraph: {
    title: "Citoyens en Action - Political Party",
    description: "Official website of Citoyens en Action - A progressive political movement committed to serving our community",
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