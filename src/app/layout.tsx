import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import {
  SITE_FAVICON,
  INTER_FONT,
  SITE_TITLE,
  SITE_DESCRIPTION,
} from "@/constants/globals.constants";

/**
 * メタデータ
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#the-metadata-object
 */
export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: SITE_FAVICON,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: テーマライブラリ(next-themes)がサーバーとフロントで異なるクラスを生成することによって発生するハイドレーション不一致エラーを回避するために追加
    <html lang="ja" suppressHydrationWarning>
      <body className={`${INTER_FONT.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
