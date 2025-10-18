/**
 * 型チェックを含めた共通デザイン
 */

/**
 * デザイントークン ================================================
 */
export const DESIGN_TOKENS = {
  // アイコンサイズ
  icon: {
    sm: "h-3 w-3", // いいねアイコンなど
    md: "h-4 w-4", // 外部リンクアイコン
    lg: "h-5 w-5", // 制作物アイコン
    xl: "h-6 w-6", // Qiitaアイコン
  },

  // ボタンサイズ
  button: {
    sm: "px-3 py-1", // バッジ
    md: "px-4 py-2", // 通常ボタン
  },

  // スペーシング
  spacing: {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  },
} as const;

/**
 * 型定義 ================================================
 */
export type IconSize = keyof typeof DESIGN_TOKENS.icon;
export type ButtonSize = keyof typeof DESIGN_TOKENS.button;
export type SpacingSize = keyof typeof DESIGN_TOKENS.spacing;

/**
 * デザイントークンの型安全な取得関数 ================================================
 */

/**
 * アイコンサイズの型安全な取得関数
 * @param size アイコンサイズ
 */
export const getIconSize = (size: IconSize): string => {
  return DESIGN_TOKENS.icon[size];
};

/**
 * ボタンサイズの型安全な取得関数
 * @param size ボタンサイズ
 */
export const getButtonSize = (size: ButtonSize): string => {
  return DESIGN_TOKENS.button[size];
};

/**
 * スペーシングサイズの型安全な取得関数
 * @param size スペーシングサイズ
 */
export const getSpacingSize = (size: SpacingSize): string => {
  return DESIGN_TOKENS.spacing[size];
};
