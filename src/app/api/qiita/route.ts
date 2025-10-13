import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!process.env.QIITA_TOKEN || !process.env.BASE_API_URL) {
      return NextResponse.json(
        { error: "環境変数が設定されていません" },
        { status: 500 }
      );
    }

    const res = await fetch(process.env.BASE_API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
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
