import type { Metadata, Viewport } from "next";
import "./globals.css";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Шиномонтаж во Всеволожске — Плоткина, 11 | Запись по телефону",
  description:
    "Шиномонтаж, балансировка и правка литых дисков во Всеволожске. Ул. Плоткина, 11, ориентир — напротив дома 5. Телефоны и маршрут.",
  keywords: [
    "шиномонтаж Всеволожск",
    "балансировка колёс Всеволожск",
    "правка литых дисков Всеволожск",
    "шиномонтаж Плоткина 11",
  ],
  alternates: { canonical: "https://glebmorkovin.github.io/autoservice-demos/plotkina11/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://glebmorkovin.github.io/autoservice-demos/plotkina11/",
    siteName: "Шиномонтаж во Всеволожске",
    title: "Шиномонтаж во Всеволожске — Плоткина, 11",
    description:
      "Шиномонтаж, балансировка и правка литых дисков. Адрес, телефоны и маршрут.",
    images: [
      {
        url: "https://glebmorkovin.github.io/autoservice-demos/plotkina11/images/workshop-hero.jpg",
        width: 1672,
        height: 941,
        alt: "шиномонтажа",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Шиномонтаж во Всеволожске — Плоткина, 11",
    description:
      "Шиномонтаж, балансировка и правка литых дисков во Всеволожске.",
    images: ["https://glebmorkovin.github.io/autoservice-demos/plotkina11/images/workshop-hero.jpg"],
  },
  icons: { icon: "/autoservice-demos/plotkina11/favicon.svg", shortcut: "/autoservice-demos/plotkina11/favicon.svg" },
  category: "auto repair",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#123a32",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

