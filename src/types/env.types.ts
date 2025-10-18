/**
 * 環境変数の型定義
 * 型安全性を確保するための環境変数の型定義ファイル
 */

/**
 * 環境変数の型定義
 */
export interface EnvironmentVariables {
  /** APIのベースURL */
  BASE_API_URL: string;
  /** Qiita APIの認証トークン */
  QIITA_TOKEN: string;
}

/**
 * 環境変数の検証結果
 */
export interface EnvValidationResult {
  /** 検証結果 */
  isValid: boolean;
  /** 不足している環境変数 */
  missingVariables: string[];
  /** エラー */
  errors: string[];
}
