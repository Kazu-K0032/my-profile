#!/usr/bin/env node

/**
 * GitHub Actions ワークフローコマンドの手動テストツール
 *
 * 実行コマンド: pnpm run test:workflows
 *
 * 機能:
 * - ESLint の動作確認
 * - TypeScript 型チェックの動作確認
 * - Prettier フォーマットチェックの動作確認
 * - アプリケーションビルドの動作確認
 * - セキュリティ監査の動作確認
 *
 * 注意: このツールは実際にコマンドを実行するため、
 * ローカル環境でテストを実行します。
 */

import { execSync } from "child_process";

console.log("🧪 ワークフローコマンドの手動テスト開始...\n");

const commands = [
  {
    name: "ESLint",
    command: "pnpm run lint",
    description: "コード品質チェック",
  },
  {
    name: "TypeScript",
    command: "pnpm run type-check",
    description: "型チェック",
  },
  {
    name: "Prettier",
    command: 'pnpm exec prettier --check "**/*.{js,jsx,ts,tsx,json,md}"',
    description: "コードフォーマットチェック",
  },
  {
    name: "Build",
    command: "pnpm run build",
    description: "アプリケーションビルド",
  },
  {
    name: "Security Audit",
    command: "pnpm audit",
    description: "セキュリティ監査",
  },
];

let passedTests = 0;
let totalTests = commands.length;

commands.forEach(({ name, command, description }) => {
  console.log(`🔧 テスト中: ${name} (${description})`);
  console.log(`   コマンド: ${command}`);

  try {
    execSync(command, {
      encoding: "utf8",
      stdio: "pipe",
    });

    console.log(`✅ ${name}: 成功`);
    passedTests++;
  } catch (error) {
    console.log(`❌ ${name}: 失敗`);
    console.log(`   エラー: ${error.message.split("\n")[0]}`);

    // 一部のコマンドは失敗しても問題ない場合がある
    if (name === "Security Audit" && error.status === 1) {
      console.log(
        "   ⚠️  セキュリティ監査で脆弱性が見つかりました（予想される動作）"
      );
    }
  }

  console.log("");
});

// 結果サマリー
console.log("📊 テスト結果サマリー");
console.log("=".repeat(50));
console.log(`✅ 成功: ${passedTests}/${totalTests}`);
console.log(`❌ 失敗: ${totalTests - passedTests}/${totalTests}`);

if (passedTests === totalTests) {
  console.log("🎉 全てのテストが成功しました！");
  console.log("🚀 GitHub Actionsワークフローが正常に動作するはずです。");
} else {
  console.log("⚠️  一部のテストが失敗しました。");
  console.log("🔧 上記のエラーを確認して修正してください。");
}
