import type { Metadata } from "next";
import {
  Shippori_Mincho,
  Noto_Serif_JP,
  Noto_Sans_JP,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import FilmGrain from "@/components/FilmGrain";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "黒田左官店 | 墨壁 -BOKUHEKI- 京都・洛北の左官職人集団",
  description:
    "京都 洛北にて三代続く左官店、黒田左官店。黒漆喰と土壁を軸に、社寺・数寄屋・料亭・現代建築の壁を手がける職人集団の仕事をご紹介します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} ${notoSerifJP.variable} ${notoSansJP.variable} ${cormorant.variable}`}
    >
      <body>
        <FilmGrain />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
