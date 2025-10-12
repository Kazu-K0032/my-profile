import { Inter } from 'next/font/google';

export const SITE_TITLE = 'Template App';
export const SITE_DESCRIPTION = 'Webアプリテンプレート';

export const INTER_FONT = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

// ダークモード/ライトモード
export const THEME_MODES = {
  DARK: 'dark',
  LIGHT: 'light',
};
