import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocaleProvider } from "@/contexts/LocaleContext";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robert Fradette - Portfolio Politique",
  description: "Portfolio politique officiel et site de campagne de Robert Fradette",
  keywords: ["politique", "campagne", "élection", "Robert Fradette", "gouvernement"],
  authors: [{ name: "Robert Fradette" }],
  openGraph: {
    title: "Robert Fradette - Portfolio Politique",
    description: "Portfolio politique officiel et site de campagne de Robert Fradette",
    type: "website",
  },
};

export default async function FrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Import French messages
  const messages = (await import('../../../messages/fr.json')).default;

  return (
    <html lang="fr">
      <body className={inter.className}>
        <LocaleProvider locale="fr" messages={messages}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}