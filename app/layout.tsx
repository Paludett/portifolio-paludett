import type { Metadata } from "next";
import {
  Instrument_Serif,
  Space_Mono,
  Familjen_Grotesk,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

const familjen = Familjen_Grotesk({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-familjen",
});

export const metadata: Metadata = {
  title: "Lorenzo Paludett — Mobile & Full Stack Developer",
  description:
    "Portfólio de Lorenzo Paludett — desenvolvedor mobile e full stack do Rio Grande do Sul. React Native, Next.js, Python.",
  metadataBase: new URL("https://lorenzopaludett.dev"),
  openGraph: {
    title: "Lorenzo Paludett — Mobile & Full Stack Developer",
    description:
      "Mobile apps and full stack products — from the data pipeline to the app stores.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${instrument.variable} ${spaceMono.variable} ${familjen.variable}`}
      >
        <div className="bg-columns" aria-hidden="true" />
        <LanguageProvider>
          {children}
          <Reveal />
        </LanguageProvider>
      </body>
    </html>
  );
}
