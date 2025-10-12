import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import { SITE_TITLE, SITE_DESCRIPTION, INTER_FONT } from '@/constants/globals.constants';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
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
