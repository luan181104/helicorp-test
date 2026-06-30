import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://helicorp-test-luan.vercel.app/"),
  title: {
    default: "Soundwave — Premium Wireless Earbuds",
    template: "%s | Soundwave",
  },
  description:
    "Experience studio-quality sound with 40-hour battery life, Bluetooth 5.4, and IP54 water resistance. Engineered for those who demand more.",
  keywords: [
    "wireless earbuds",
    "bluetooth headphones",
    "premium audio",
    "noise cancelling earbuds",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Soundwave — Premium Wireless Earbuds",
    description:
      "Studio-quality sound, 40-hour battery, Bluetooth 5.4. Engineered for those who demand more.",
    url: "https://helicorp-test-luan.vercel.app/",
    siteName: "Soundwave",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soundwave Earbuds",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soundwave — Premium Wireless Earbuds",
    description: "Studio-quality sound, 40-hour battery, Bluetooth 5.4.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ScrollProgress />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}