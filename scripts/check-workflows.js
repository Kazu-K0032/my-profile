#!/usr/bin/env node

/**
 * GitHub Actions ワークフローファイルの構文チェックツール
 *
 * 実行コマンド: pnpm run check:workflows
 *
 * 機能:
 * - YAML構文の検証
 * - ワークフロー構造の確認
 * - pnpmコマンドの検証
 * - 基本的な設定項目の存在確認
 */

import fs from "fs";
import yaml from "js-yaml";

console.log("🔍 GitHub Actions ワークフローチェック開始...\n");

// ワークフローファイルのパス
const workflowFiles = [
  ".github/workflows/ci.yml",
  ".github/workflows/code-quality.yml",
  ".github/workflows/dependency-review.yml",
];

let hasErrors = false;

workflowFiles.forEach((filePath) => {
  console.log(`📄 チェック中: ${filePath}`);

  try {
    // ファイルの存在確認
    if (!fs.existsSync(filePath)) {
      console.log(`❌ ファイルが見つかりません: ${filePath}`);
      hasErrors = true;
      return;
    }

    // YAML構文チェック
    const content = fs.readFileSync(filePath, "utf8");
    const parsed = yaml.load(content);

    if (!parsed) {
      console.log(`❌ YAML構文エラー: ${filePath}`);
      hasErrors = true;
      return;
    }

    // 基本的なワークフロー構造チェック
    if (!parsed.name) {
      console.log(`❌ ワークフロー名が設定されていません: ${filePath}`);
      hasErrors = true;
    }

    if (!parsed.on) {
      console.log(`❌ トリガー設定がありません: ${filePath}`);
      hasErrors = true;
    }

    if (!parsed.jobs || Object.keys(parsed.jobs).length === 0) {
      console.log(`❌ ジョブが定義されていません: ${filePath}`);
      hasErrors = true;
    }

    // pnpmコマンドの確認
    const contentStr = content.toLowerCase();
    if (contentStr.includes("npm ") && !contentStr.includes("pnpm")) {
      console.log(`⚠️  npmコマンドが残っています: ${filePath}`);
    }

    console.log(`✅ 構文チェック完了: ${filePath}`);
  } catch (error) {
    console.log(`❌ エラー: ${filePath}`);
    console.log(`   詳細: ${error.message}`);
    hasErrors = true;
  }

  console.log("");
});

// 結果サマリー
console.log("📊 チェック結果サマリー");
console.log("=".repeat(50));

if (hasErrors) {
  console.log("❌ エラーが見つかりました。上記の詳細を確認してください。");
  process.exit(1);
} else {
  console.log("✅ 全てのワークフローファイルが正常です！");
  console.log("🚀 GitHub Actionsで実行可能な状態です。");
}
