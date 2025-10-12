import type { MainTtlType, SubTtlType } from './Header.types';

/**
 * ナビゲーションリスト
 */
export const navList: MainTtlType[] = ['About', 'Production', 'Notes'];

/**
 * サブタイトルリスト
 */
export const subTtlList: SubTtlType[] = ['私について', '制作物', '記事一覧'];

/**
 * アニメーション設定
 */
export const ANIMATION_CONFIG = {
  DURATION: 0.5, // アニメーションの時間
  EASE: 'easeInOut' as const,
  INITIAL_LOAD_DELAY: 3000, // 初期ロードの遅延時間
} as const;

/**
 * ヘッダー設定
 */
export const HEADER_CONFIG = {
  INITIAL_HEIGHT: '120px', // 初期ロード時の高さ
  COLLAPSED_HEIGHT: '60px', // 折りたたみ時の高さ
} as const;
