import type { ProductionItem } from "./production.types";

/**
 * プロダクションアイテムの定数
 */
export const PRODUCTION_ITEMS: ProductionItem[] = [
  {
    id: "population-trend-graph-app",
    title: "都道府県別の人口推移グラフ表示アプリ",
    description:
      "都道府県別の総人口推移をグラフで表示するアプリ。年少人口・生産年齢人口・老年人口の切り替え表示も可能です。",
    url: "https://population-trend-graph-app.vercel.app/",
    publishedAt: "2024-12-20T00:00:00+09:00",
    thumbnailUrl: "/common/population-trend-graph-app.svg",
    tags: ["React", "TypeScript", "Chart.js", "SCSS"],
    features: [
      "都道府県別の人口推移グラフ表示",
      "人口区分（総人口・年少人口・生産年齢人口・老年人口）の切り替え表示",
      "レスポンシブデザイン対応",
    ],
    modal: {
      images: ["/common/population-trend-graph-app.svg"],
      demoUrl: "https://population-trend-graph-app.vercel.app/",
      repoUrl: "https://github.com/kujiKazuaki/population-trend-graph-app",
    },
  },
  {
    id: "script-output-system",
    title: "【あにまんch】台本出力システム",
    description:
      "あにまんchのスレッドコメントを、YMMの台本形式でスプレッドシートに出力する機能を開発しました。",
    url: "https://docs.google.com/spreadsheets/d/1qQYZ1AvQwvACqRvZFx3LaFvfr0kbPzDPFwyqpP3SBAU/edit?gid=1609864189#gid=1609864189",
    publishedAt: "2024-07-01T00:00:00+09:00",
    thumbnailUrl: "/common/scriptOutputSystem.svg",
    tags: ["Google Apps Script", "JavaScript", "スプレッドシート"],
    features: [
      "スレッドコメントの自動取得",
      "YMM台本形式への変換",
      "スプレッドシートへの自動出力",
    ],
    modal: {
      images: ["/common/scriptOutputSystem.svg"],
      demoUrl:
        "https://docs.google.com/spreadsheets/d/1qQYZ1AvQwvACqRvZFx3LaFvfr0kbPzDPFwyqpP3SBAU/edit?gid=1609864189#gid=1609864189",
      repoUrl: "https://github.com/kujiKazuaki/ScriptOutputSystem",
    },
  },
  {
    id: "gsread",
    title: "GSRead",
    description:
      "GeekSalonで得た知識を、コースの枠を超えて共有できるアプリ。Vue.jsとFirebaseを使用して開発しました。",
    url: "https://team3-sky.web.app",
    publishedAt: "2022-06-30T00:00:00+09:00",
    thumbnailUrl: "/common/gsread.svg",
    tags: ["Vue.js", "Firebase", "SCSS", "JavaScript"],
    features: [
      "コース別の記事投稿・閲覧機能",
      "ユーザー認証機能",
      "レスポンシブデザイン対応",
    ],
    modal: {
      images: ["/common/gsread.svg"],
      demoUrl: "https://team3-sky.web.app",
      repoUrl: "https://github.com/webex14-team-3/sky-app?tab=readme-ov-file",
    },
  },
];
