/**
 * 環境変数ユーティリティ関数
 * BASE_API_URLとQIITA_TOKENの検証のみを行う
 */

import type {
  EnvironmentVariables,
  EnvValidationResult,
} from "@/types/env.types";
import { isValidUrl } from "@/utils/validate";

/**
 * 環境変数が正しく設定されているかをチェックする関数
 * - 必要な環境変数が設定されているか
 * - 設定された値が適切な形式か
 * @param env 検証する環境変数オブジェクト
 * @returns {Object} 結果オブジェクト
 * @returns {boolean}   returns.isValid - 環境変数がすべて正しく設定されている場合はtrue、そうでない場合はfalse
 * @returns {string[]}  returns.missingVariables - 設定が不足している環境変数のキー名リスト
 * @returns {string[]}  returns.errors - 形式不正などのエラーメッセージリスト
 */
function validateEnvironmentVariables(
  env: Partial<EnvironmentVariables>
): EnvValidationResult {
  const requiredVariables: (keyof EnvironmentVariables)[] = [
    "BASE_API_URL",
    "QIITA_TOKEN",
  ];

  const missingVariables: string[] = [];
  const errors: string[] = [];

  // 不足している環境変数を検証
  for (const variable of requiredVariables) {
    if (!env[variable]) {
      missingVariables.push(variable);
    }
  }

  // BASE_API_URLの形式検証
  if (env.BASE_API_URL && !isValidUrl(env.BASE_API_URL)) {
    errors.push("BASE_API_URL must be a valid URL");
  }

  return {
    isValid: missingVariables.length === 0 && errors.length === 0,
    missingVariables,
    errors,
  };
}

/**
 * 環境変数の型安全な取得関数
 * @param key 環境変数のキー
 * @returns 環境変数の値
 */
function getEnvVariable<K extends keyof EnvironmentVariables>(
  key: K
): EnvironmentVariables[K] | undefined {
  return process.env[key] as EnvironmentVariables[K] | undefined;
}

/**
 * 必須環境変数の型安全な取得関数
 * @param key 環境変数のキー
 * @returns 環境変数の値（undefinedの場合はエラーを投げる）
 */
export function getRequiredEnvVariable<K extends keyof EnvironmentVariables>(
  key: K
): EnvironmentVariables[K] {
  const value = getEnvVariable(key);
  // 環境変数が設定されていない場合
  if (value === undefined) {
    throw new Error(`Required environment variable ${key} is not set`);
  }
  return value;
}

/**
 * 環境変数の設定をチェックし、問題があればエラーを投げる関数
 * @throws {Error} 環境変数の設定に問題がある場合
 */
export function validateEnvironment(): void {
  const env = process.env as Partial<EnvironmentVariables>;
  const validation = validateEnvironmentVariables(env);

  if (!validation.isValid) {
    const errorMessage = [
      "Environment variable settings are incomplete:",
      ...validation.missingVariables.map((v) => `  - ${v} is not set`),
      ...validation.errors.map((e) => `  - ${e}`),
    ].join("\n");

    throw new Error(errorMessage);
  }
}
