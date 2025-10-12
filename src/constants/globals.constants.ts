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

// コンテンツ設定
export type ContentKey = (typeof CONTENT_CONFIG)[keyof typeof CONTENT_CONFIG]['key'];
export type ContentPath = (typeof CONTENT_CONFIG)[keyof typeof CONTENT_CONFIG]['path'];
export const CONTENT_CONFIG = {
  HOME: {
    key: 'home',
    name: 'ホーム',
    path: '/',
  },
} as const;
