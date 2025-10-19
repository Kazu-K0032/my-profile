import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import {
  SITE_TITLE,
  SITE_FAVICON,
  INTER_FONT,
  SEO_METADATA,
  STRUCTURED_DATA,
} from "@/constants/globals.constants";
import type { NavigationTabKey } from "@/types/globals.types";

interface RootLayoutProps {
  children: React.ReactNode;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

/**
 * 動的メタデータ生成
 * URLパラメータに基づいて各タブごとの適切なメタデータを生成
 */
export async function generateMetadata({
  searchParams,
}: RootLayoutProps): Promise<Metadata> {
  const params = searchParams ? await searchParams : {};
  const tab = (params?.tab as NavigationTabKey) || "About";

  const seoData =
    SEO_METADATA[tab as keyof typeof SEO_METADATA] || SEO_METADATA.About;

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    icons: {
      icon: SITE_FAVICON,
    },
    openGraph: {
      title: seoData.ogTitle,
      description: seoData.ogDescription,
      url: `https://kuji-portfolio.com${seoData.canonical}`,
      siteName: SITE_TITLE,
      images: [
        {
          url: seoData.ogImage,
          width: 1200,
          height: 630,
          alt: seoData.ogTitle,
        },
      ],
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.ogTitle,
      description: seoData.ogDescription,
      images: [seoData.ogImage],
    },
    alternates: {
      canonical: `https://kuji-portfolio.com${seoData.canonical}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* 構造化データの追加 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA.WebSite),
          }}
        />
      </head>
      <body className={`${INTER_FONT.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
