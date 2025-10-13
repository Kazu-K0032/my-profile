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
    publishedAt: "2024/12/20",
    thumbnailUrl: "/common/population-trend-graph-app.svg",
    tags: ["React", "TypeScript", "Chart.js", "SCSS"],
    features: [
      "都道府県別の人口推移グラフ表示",
      "人口区分（総人口・年少人口・生産年齢人口・老年人口）の切り替え表示",
      "レスポンシブデザイン対応",
    ],
    modal: {
      images: ["/common/population-trend-graph-app.svg"],
      pages: [
        {
          type: "markdown",
          title: "【プロジェクト概要・開発背景】",
          content: [
            "## 概要",
            "本プロジェクトは、都道府県別の総人口推移をグラフで表示するアプリの開発を目的としています。加えて、年少人口・生産年齢人口・老年人口の切り替え表示も可能です。",
            "## 背景",
            "以前、GeekSalonの研修課題として『フロントエンドのフレームワークとRESASのAPIを活用し、都道府県別の総人口推移を可視化するSPAを作成する』という課題に取り組んだ経験がありました。そのテーマがフロントエンドを学習するうえで適切だと感じたため、今回はReactおよびTypeScriptの学習を目的として、個人開発を行いました。",
          ],
        },
        {
          type: "markdown",
          title: "【使用技術・ツール】",
          content: [
            "### 言語",
            "HTML/CSS(SCSS), JavaScript(React, TypeScript)",
            "### ツール",
            "Git/GitHub, Vercel",
            "### 技術選定",
            "ReactおよびTypeScriptの学習のため",
          ],
        },
        {
          type: "markdown",
          title: "【開発プロセス・自分の役割】",
          content: [
            "本プロジェクトは、個人で開発を進めました。開発にあたり、特に以下の2点を意識しました。",
            "## 1. これまでの知見を活かすこと",
            "フロントエンドエンジニアとしての経験を活かし、GitHubのIssue管理・PRの運用や、HTML/CSSにおいてはレスポンシブデザインの実装およびFLOCSSに基づいたCSS設計を意識して開発を行いました。",
            "## 2. コーディング代行としてChatGPTを使用しないこと",
            "これまでChatGPTを活用しながら開発を進めることが多かったため、単なる知識習得だけでなく、コードの実装そのものを依存してしまう場面がありました。しかし、その結果として技術の理解が浅くなり、他のメンバーへの説明が難しくなることも課題として感じていました。",
            "そこで、本プロジェクトではChatGPTを補助ツールとしてではなく、自分の知識・スキルでコードを実装することを徹底しました。",
          ],
        },
        {
          type: "markdown",
          title: "【プロジェクトを通した学び】",
          content: [
            "本プロジェクトを通じて、特に『型定義の重要性』に対する意識が大きく変わりました。",
            "以前は、型定義を行うことでコード量が増え、開発コストがかかると考えていました。しかし、実際にアプリを開発する中で、本来意図していない型のデータを扱おうとする場面が何度かあり、そのたびに型エラーが誤りを指摘してくれました。",
            "もしチーム開発でこのようなミスが頻発すると、レビューや修正の手間が増える可能性が高くなります。そうしたリスクを考えると、型定義は単なるコストではなく、長期的な視点で見たときに『投資』と捉えるべきだと学びました。",
          ],
        },
        {
          type: "markdown",
          title: "【ドキュメントおよび参考資料】",
          content: "- [Chart.js](https://www.chartjs.org/)",
        },
      ],
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
    publishedAt: "2024/07/01",
    thumbnailUrl: "/common/scriptOutputSystem.svg",
    tags: ["Google Apps Script", "JavaScript", "スプレッドシート"],
    features: [
      "スレッドコメントの自動取得",
      "YMM台本形式への変換",
      "スプレッドシートへの自動出力",
    ],
    otherSite: [
      {
        siteTtl: "GAS Stand",
        siteIconPath: "/icon/icon_gasStand.svg",
        siteUrl: "https://gas-stand.jp/mypage/products/149",
      },
    ],
    modal: {
      images: ["/common/scriptOutputSystem.svg"],
      pages: [
        {
          type: "markdown",
          title: "【プロジェクト概要・開発背景】",
          content:
            "本プロジェクトでは、あにまんchのスレッドコメントを、YMMの台本形式でスプレッドシートに出力する機能を開発しました。\n私は趣味でYouTubeの動画制作を行っており、その一環として制作プロセスの一部を自動化したいと考え、今回の開発に至りました。\n\n※あにまんchは、アニメや漫画に関する感想や意見を共有できる掲示板サイトです。",
        },
        {
          type: "markdown",
          title: "【使用技術・ツール】",
          content:
            "### 言語\n\nJavaScript\n\n### ツール\n\nスプレッドシート, Google Apps Script, Git/GitHub\n\n### 技術選定\n\n開発当初はGASを頻繁に使用しており、GASを使用したプロダクトを作りたいと思い、今回のプロジェクトでも採用しました。",
        },
        {
          type: "markdown",
          title: "【開発プロセス・自分の役割】",
          content:
            "本プロジェクトは、すべての開発工程を一人で担当しました。\nまず、動画制作の流れをリストアップし、その中でGASを活用できる部分を整理しました。その後、GASを用いて自動化を進め、GASで対応できない動画制作の領域については、別途PHPを用いて開発を行いました。",
        },
        {
          type: "markdown",
          title: "【プロジェクトを通した学び】",
          content:
            "本プロジェクトを通じて、コードの整理の重要性を実感しました。\n開発当初は、深く考えずにコードを書いていたため、機能追加のたびにコードが冗長化し、結果としてスパゲッティコードになってしまいました。そこで、一度コードを整理し、処理を役割ごとに分けて再構築することで、可読性や保守性の向上につなげることができました。",
        },
        {
          type: "markdown",
          title: "【ドキュメントおよび参考資料】",
          content:
            "- [Qiita, 「【Google App Script】Parserライブラリでwebスクレイピングする方法」](https://qiita.com/tk226/items/c806fc2fdff9115d4473)",
        },
      ],
      demoUrl:
        "https://docs.google.com/spreadsheets/d/1qQYZ1AvQwvACqRvZFx3LaFvfr0kbPzDPFwyqpP3SBAU/edit?gid=1609864189#gid=1609864189",
      repoUrl: "https://github.com/kujiKazuaki/ScriptOutputSystem",
    },
  },
  {
    id: "gsread",
    title: "GSRead",
    description:
      "GeekSalonで得た知識を、コースの枠を超えて共有できるアプリ。\nVue.jsとFirebaseを使用して開発しました。",
    url: "https://team3-sky.web.app",
    publishedAt: "2022/06/30",
    thumbnailUrl: "/common/gsread.svg",
    tags: ["Vue.js", "Firebase", "SCSS", "JavaScript"],
    features: [
      "コース別の記事投稿・閲覧機能",
      "ユーザー認証機能",
      "レスポンシブデザイン対応",
    ],
    modal: {
      images: ["/common/gsread.svg"],
      pages: [
        {
          type: "markdown",
          title: "【プロジェクト概要・開発背景】",
          content:
            "[GeekSalon](https://geek-salon.com/)で得た知識を、コースの枠を超えて共有できるアプリを開発しました。\n\n当初はGeekSalonに参加しており、授業の一環として開発しました。プロダクトを通じ、自身の所属するコースの垣根を越えて知識の共有ができるようにしたいと考え、自身のコースで学習したVue.jsおよびFirebaseを使用して開発しました。",
        },
        {
          type: "markdown",
          title: "【使用技術・ツール】",
          content:
            "### 言語\n\nHTML/CSS(SCSS), JavaScript(Vue.js)\n\n### ツール\n\nFirebase, Git/GitHub\n\n### 技術選定\n\nGeekSalon受講時に学んだ言語およびツールを活用し、実践的な開発経験を積むことを目的としました。",
        },
        {
          type: "markdown",
          title: "【開発プロセス・自分の役割】",
          content:
            "開発は私を含めた3名のチームで進め、GeekSalonのメンター1名にサポートいただきました。\n開発期間は1ヶ月で、週2回のDiscordミーティングを通じて、Notionを活用しながら課題や機能要件を整理しました。\n\n私はチームリーダーとして、メンバーの稼働時間を管理し、タスクの振り分けを担当しました。\n\nチーム開発終了後には、サイトの改修作業を実施しました。\n改修の際には、SCSSの導入やIssue/PRを活用した開発を行い、エラーやバグの修正、UI/UXを考慮した機能の追加を行いました。",
        },
        {
          type: "markdown",
          title: "【プロジェクトを通した学び】",
          content:
            "要件定義から開発、デプロイまでの一連の流れを経験することで、開発プロセス全体の理解を深めることができました。",
        },
        {
          type: "markdown",
          title: "【ドキュメントおよび参考資料】",
          content: "特になし",
        },
      ],
      demoUrl: "https://team3-sky.web.app",
      repoUrl: "https://github.com/webex14-team-3/sky-app?tab=readme-ov-file",
    },
  },
];
