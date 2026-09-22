import type { Metadata, Viewport } from "next";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HOT TIRES",
    template: "%s | HOT TIRES",
  },
  description:
    "Выездной шиномонтаж, ремонт шин, установка запасного колеса, балансировка и помощь на дороге. Hot Tires, д. Романовка, 9. Круглосуточно.",
  applicationName: "Hot Tires",
  keywords: [
    "выездной шиномонтаж",
    "шиномонтаж Романовка",
    "ремонт шин Гатчинский район",
    "помощь на дороге",
    "Hot Tires",
  ],
  alternates: {
    canonical: "https://glebmorkovin.github.io/autoservice-demos/hot-tires/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://glebmorkovin.github.io/autoservice-demos/hot-tires/",
    siteName: "Hot Tires",
    title: "Hot Tires — выездной шиномонтаж",
    description:
      "Помощь с колесом, ремонт шин и балансировка. д. Романовка, Гатчинский район. Круглосуточно.",
    images: [
      {
        url: `${siteUrl}/images/hot-tires-roadside.webp`,
        width: 1672,
        height: 941,
        alt: "выездной помощи с колесом ночью",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hot Tires — выездной шиномонтаж",
    description:
      "Помощь с колесом в д. Романовка и Гатчинском районе. Круглосуточно.",
    images: [`${siteUrl}/images/hot-tires-roadside.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    
  },
  icons: {
    icon: `${siteUrl}/favicon.svg`,
    shortcut: `${siteUrl}/favicon.svg`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0c",
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
