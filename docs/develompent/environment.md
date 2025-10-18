# 環境変数と設定ファイルの管理

[English](../lang/en-environment.md) | 日本語

プロジェクトの環境変数と設定ファイルの管理方法について

## 概要

- 環境変数を使用してAPIキーや設定値を管理している
- 型安全性を確保し、セキュリティを最適化するための仕組みを提供

## 環境変数の一覧

### 必須環境変数

| 変数名         | 説明                    | 例                               |
| -------------- | ----------------------- | -------------------------------- |
| `BASE_API_URL` | APIのベースURL          | `https://qiita.com/api/v2/items` |
| `QIITA_TOKEN`  | Qiita APIの認証トークン | `your_qiita_token_here`          |

## セットアップ手順

### 1. 環境変数ファイルの作成

```bash
# 環境変数ファイルの例をコピー
cp env.example .env.local
```

### 2. 環境変数の設定

`.env.local`ファイルを開き、必要な値を設定する

```bash
# APIのベースURLを設定
BASE_API_URL=https://qiita.com/api/v2/authenticated_user/items
# Qiita APIの認証トークンを設定
QIITA_TOKEN=your_actual_qiita_token_here
```

### 3. Qiita APIトークンの取得

1. [Qiita](https://qiita.com)にログイン
2. [設定 > アプリケーション](https://qiita.com/settings/applications)にアクセス
3. 「個人用アクセストークン」をクリック
4. トークン名を入力し、スコープを選択
5. 生成されたトークンをコピーして`.env.local`に設定

## 型安全性の確保

### 環境変数の型定義

`src/types/env.types.ts`で環境変数の型定義を提供：

```typescript
export interface EnvironmentVariables {
  /** APIのベースURL */
  BASE_API_URL: string;
  /** Qiita APIの認証トークン */
  QIITA_TOKEN: string;
}
```

### 環境変数の検証と取得

- `validateEnvironment`関数の実行後、`getRequiredEnvVariable`関数で環境変数を取得する

`src/utils/env.utils.ts`で環境変数の検証と取得機能を提供：

```typescript
import { validateEnvironment, getRequiredEnvVariable } from "@/utils/env.utils";

// 環境変数の一括検証
validateEnvironment();

// 型安全な環境変数の取得
const qiitaToken = getRequiredEnvVariable("QIITA_TOKEN");
const baseUrl = getRequiredEnvVariable("BASE_API_URL");
```

### 使用例

```typescript
// ❌ 非推奨: 直接process.envを使用
const token = process.env.QIITA_TOKEN; // string | undefined

// ✅ 推奨: 型安全な取得
const token = getRequiredEnvVariable("QIITA_TOKEN"); // string
```

### APIルートでの使用例

```typescript
// src/app/api/qiita/route.ts
import { validateEnvironment, getRequiredEnvVariable } from "@/utils/env.utils";

export async function GET() {
  try {
    // 環境変数の検証
    validateEnvironment();

    // 型安全な環境変数の取得
    const qiitaToken = getRequiredEnvVariable("QIITA_TOKEN");
    const baseApiUrl = getRequiredEnvVariable("BASE_API_URL");

    const res = await fetch(baseApiUrl, {
      headers: {
        Authorization: `Bearer ${qiitaToken}`,
      },
    });

    // ...
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
```

## セキュリティ設定

### 1. 環境変数ファイルの除外

`.gitignore`で以下のファイルが除外されています：

```gitignore
# 環境設定ファイル
.env.*
.env.local
.env.production
.env.development
```
