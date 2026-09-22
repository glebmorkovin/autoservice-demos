import type { Metadata, Viewport } from "next";
import { getSiteUrl } from "@/data/site-url";
import "./globals.css";

const publicUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(new URL(publicUrl).origin),
  alternates: { canonical: `${publicUrl}/` },
  title: "ШиноМонталь — шиномонтаж и автосервис в Кудрово",
  description:
    "Шиномонтаж, замена шин, ремонт порезов, обслуживание автоклимата и продажа б/у автошин в Кудрово. Ежедневно 10:00–21:00.",
  applicationName: "ШиноМонталь",
  category: "Автосервис",
  keywords: [
    "шиномонтаж Кудрово",
    "замена шин Кудрово",
    "ремонт шин Кудрово",
    "автосервис Кудрово",
    "ШиноМонталь",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ШиноМонталь",
    title: "ШиноМонталь — шиномонтаж и автосервис в Кудрово",
    description:
      "Шиномонтаж, ремонт порезов, автоклимат и б/у автошины. Ежедневно с 10:00 до 21:00.",
    images: [
      {
        url: `${publicUrl}/images/shinomontal-hero.jpg`,
        width: 1672,
        height: 941,
        alt: "Фото шиномонтажной зоны с автомобилем",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ШиноМонталь — шиномонтаж в Кудрово",
    description:
      "Шиномонтаж, ремонт порезов, автоклимат и б/у автошины.",
    images: [`${publicUrl}/images/shinomontal-hero.jpg`],
  },
  icons: {
    icon: "/autoservice-demos/shinomontal/favicon.svg",
    shortcut: "/autoservice-demos/shinomontal/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2efe7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
