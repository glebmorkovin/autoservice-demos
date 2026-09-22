import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://glebmorkovin.github.io/autoservice-demos/na-vzletnoy";

export const metadata: Metadata = {
  title: {
    default: "Шиномонтаж «На Взлётной» во Всеволожске",
    template: "%s | На Взлётной",
  },
  description:
    "Шиномонтаж, ремонт шин, правка и покраска дисков, ошиповка и хранение шин во Всеволожске. Взлётная ул., 24. Ежедневно 09:00–21:00.",
  keywords: [
    "шиномонтаж Всеволожск",
    "ремонт шин Всеволожск",
    "правка дисков Всеволожск",
    "хранение шин Всеволожск",
  ],
  authors: [{ name: "На Взлётной" }],
  creator: "На Взлётной",
  openGraph: {
    title: "Шиномонтаж «На Взлётной» во Всеволожске",
    description:
      "Работы с шинами и дисками на Взлётной улице. Ежедневно с 09:00 до 21:00.",
    siteName: "На Взлётной",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Шиномонтаж «На Взлётной» во Всеволожске",
    description: "Шиномонтаж, ремонт шин и работы с дисками.",
  },
  icons: {
    icon: "/autoservice-demos/na-vzletnoy/icon.svg",
    shortcut: "/autoservice-demos/na-vzletnoy/icon.svg",
  },
  ...(siteUrl
    ? {
        metadataBase: new URL(new URL(siteUrl).origin),
        alternates: { canonical: `${siteUrl}/` },
      }
    : {}),
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
