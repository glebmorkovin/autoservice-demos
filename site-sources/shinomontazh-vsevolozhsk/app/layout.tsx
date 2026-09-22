import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://glebmorkovin.github.io/autoservice-demos/shinomontazh-vsevolozhsk/"),
  alternates: { canonical: "https://glebmorkovin.github.io/autoservice-demos/shinomontazh-vsevolozhsk/" },
  title: "Шиномонтаж на Всеволожском проспекте — Всеволожск",
  description:
    "Шиномонтаж на Всеволожском проспекте: ремонт шин и грыж, правка дисков, вулканизация, хранение и утилизация шин. Телефон и график работы.",
  keywords: [
    "шиномонтаж Всеволожск",
    "ремонт шин Всеволожск",
    "правка дисков Всеволожск",
    "хранение шин Всеволожск",
    "Всеволожский проспект шиномонтаж",
  ],
  openGraph: {
    url: "https://glebmorkovin.github.io/autoservice-demos/shinomontazh-vsevolozhsk/",
    images: ["https://glebmorkovin.github.io/autoservice-demos/shinomontazh-vsevolozhsk/images/workshop-hero.jpg"],
    type: "website",
    locale: "ru_RU",
    siteName: "Шиномонтаж на Всеволожском проспекте",
    title: "Шиномонтаж во Всеволожске",
    description:
      "Шиномонтаж, ремонт шин, правка дисков и сезонное хранение на Всеволожском проспекте.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Шиномонтаж во Всеволожске",
    description:
      "Шиномонтаж, ремонт шин, правка дисков и хранение на Всеволожском проспекте.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/autoservice-demos/shinomontazh-vsevolozhsk/favicon.svg",
    shortcut: "/autoservice-demos/shinomontazh-vsevolozhsk/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0e0c",
  colorScheme: "dark light",
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
