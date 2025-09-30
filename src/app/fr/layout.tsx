import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocaleProvider } from "@/contexts/LocaleContext";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Citoyens en Action - Parti Politique",
  description: "Site officiel de Citoyens en Action - Un mouvement politique progressiste engagé au service de notre communauté",
  keywords: ["politique", "campagne", "élection", "Citoyens en Action", "gouvernement", "progressiste", "communauté"],
  authors: [{ name: "Citoyens en Action" }],
  openGraph: {
    title: "Citoyens en Action - Parti Politique",
    description: "Site officiel de Citoyens en Action - Un mouvement politique progressiste engagé au service de notre communauté",
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