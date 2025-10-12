import '@/styles/globals.css';
import { Metadata } from 'next';
import { SITE_TITLE, SITE_DESCRIPTION, INTER_FONT } from '@/constants/globals.constants';
import '@/styles/globals.css';

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
    <html lang="ja">
      <body className={`${INTER_FONT.variable} antialiased`}>{children}</body>
    </html>
  );
}
