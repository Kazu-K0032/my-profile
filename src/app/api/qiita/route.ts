import { NextResponse } from "next/server";
import { validateEnvironment, getRequiredEnvVariable } from "@/utils/env.utils";

export async function GET() {
  try {
    // 環境変数の検証
    validateEnvironment();

    const qiitaToken = getRequiredEnvVariable("QIITA_TOKEN");
    const baseApiUrl = getRequiredEnvVariable("BASE_API_URL");

    const res = await fetch(baseApiUrl, {
      headers: {
        Authorization: `Bearer ${qiitaToken}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      return NextResponse.json(
        { error: "Qiita APIからの応答が不正です" },
        { status: 500 }
      );
    }

    const qiitaList = data.map((item: Record<string, unknown>) => {
      return { ...item, site: "Qiita" };
    });

    return NextResponse.json(qiitaList);
  } catch (error: unknown) {
    console.error("Qiita API Error:", error);
    const message =
      error instanceof Error ? error.message : "予期せぬエラーが発生しました";
    return NextResponse.json(
      { error: `Qiita API Error: ${message}` },
      { status: 500 }
    );
  }
}
