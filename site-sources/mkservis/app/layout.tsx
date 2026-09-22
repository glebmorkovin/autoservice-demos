import type { Metadata, Viewport } from "next";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();
const title = "МКСервис — диагностика и ремонт автомобилей в Гатчине";
const description =
  "МКСервис в Гатчине: диагностика автомобиля, ремонт двигателя, тормозной системы и ходовой, замена масла, шиномонтаж. Адрес, цены и запись по телефону.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "автосервис Гатчина",
    "диагностика автомобиля Гатчина",
    "ремонт автомобиля Гатчина",
    "шиномонтаж Гатчина",
    "МКСервис",
  ],
  alternates: { canonical: "https://glebmorkovin.github.io/autoservice-demos/mkservis/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://glebmorkovin.github.io/autoservice-demos/mkservis/",
    siteName: "МКСервис",
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "МКСервис — диагностика и ремонт автомобилей в Гатчине",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og-image.jpg`],
  },
  icons: {
    icon: `${siteUrl}/favicon.svg`,
    shortcut: `${siteUrl}/favicon.svg`,
  },
  other: {
    
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071a33",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
