import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_FAVICON,
  INTER_FONT,
} from "@/constants/globals.constants";

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
    <html lang="ja" suppressHydrationWarning>
      <body className={`${INTER_FONT.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
