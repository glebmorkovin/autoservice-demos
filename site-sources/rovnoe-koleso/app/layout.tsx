import type { Metadata, Viewport } from "next";
import { getSiteUrl } from "@/data/site";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ровное Колесо — шиномонтаж во Всеволожске",
    template: "%s | Ровное Колесо",
  },
  description:
    "Шиномонтаж, ремонт шин и грыж, вулканизация, правка дисков, хранение и утилизация шин во Всеволожске. Пушкинская ул., 128А. Работаем ежедневно.",
  alternates: { canonical: "https://glebmorkovin.github.io/autoservice-demos/rovnoe-koleso/" },
  keywords: ["шиномонтаж Всеволожск", "ремонт шин Всеволожск", "правка дисков Всеволожск", "хранение шин Всеволожск"],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://glebmorkovin.github.io/autoservice-demos/rovnoe-koleso/",
    siteName: "Ровное Колесо",
    title: "Ровное Колесо — шиномонтаж во Всеволожске",
    description: "Шиномонтаж и работы с шинами и дисками на Пушкинской улице, 128А.",
    images: [{ url: `${siteUrl}/og-image.jpg`, width: 1672, height: 941, alt: "шиномонтажа Ровное Колесо" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ровное Колесо — шиномонтаж во Всеволожске",
    description: "Шиномонтаж и ремонт шин. Пушкинская ул., 128А.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  icons: { icon: `${siteUrl}/favicon.svg`, shortcut: `${siteUrl}/favicon.svg` },
  category: "automotive",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071724",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
