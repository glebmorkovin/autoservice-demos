import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Синопсис плюс — шиномонтаж в Гатчине | 24/7";
const description =
  "Выездной шиномонтаж, ремонт шин, балансировка и работы с лобовым стеклом в Гатчине. Дачный пер., 3. Круглосуточно.";

function configuredSiteUrl() {
  const candidate = "https://glebmorkovin.github.io/autoservice-demos/sinopsis-plus/";

  if (!candidate) {
    return undefined;
  }

  try {
    return new URL(candidate);
  } catch {
    return undefined;
  }
}

export function generateMetadata(): Metadata {
  const siteUrl = configuredSiteUrl();
  const imageUrl = siteUrl
    ? new URL("images/08_sinopsis_plus_01.jpg", siteUrl).toString()
    : undefined;

  return {
    title,
    description,
    applicationName: "Синопсис плюс",
    category: "Автосервис",
    metadataBase: siteUrl,
    alternates: siteUrl ? { canonical: siteUrl } : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ru_RU",
      siteName: "Синопсис плюс",
      url: siteUrl?.toString(),
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1672,
              height: 941,
              alt: "Синопсис плюс — шиномонтаж в Гатчине",
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    other: {
      
      "geo.region": "RU-LEN",
      "geo.placename": "Гатчина",
    },
    icons: {
      icon: siteUrl ? new URL("favicon.svg", siteUrl).toString() : "/favicon.svg",
      shortcut: siteUrl ? new URL("favicon.svg", siteUrl).toString() : "/favicon.svg",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b0d0c",
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
