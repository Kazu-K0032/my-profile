import type { ProductionItem } from "./Production.types";

/**
 * プロダクションアイテムの定数
 */
export const PRODUCTION_ITEMS: ProductionItem[] = [
  {
    id: "administration-table",
    title: "管理テーブルアプリ",
    description: "Google Apps Scriptを使用した管理テーブル",
    url: "https://github.com/Kazu-K0032/Administration-Table",
    publishedAt: "2023/10/05",
    thumbnailUrl: "/common/administration-table.png",
    tags: ["Google Apps Script"],
    features: [
      "やることリスト管理: 月次のタスク進捗を追跡",
      "自動通知: 未完了タスクの週次通知（LINE Messaging API）",
      "進捗計算: タスクの平均進捗率を自動計算",
      "リセット機能: 月次タスクの進捗をリセット",
      "編集履歴: スプレッドシートの変更履歴を記録",
    ],
    modal: {
      images: ["/common/administration-table.png"],
      pages: [
        {
          title: "【プロジェクト概要・開発背景】",
          content: [
            "## 概要",
            "Google Apps Scriptを使用した管理テーブル自動化プロジェクトです。",
            "スプレッドシートの「やることリスト」を管理し、LINE Messaging APIによる通知機能を提供します。",
            "## 背景",
            "インターンでGASを使った開発をしていたのと、自身の意識を高めるための毎月ごとのタスク管理表が欲しいと感じ、このようなプロジェクトを作成しました。",
          ],
        },
        {
          title: "【使用技術・ツール】",
          content: [
            "### 言語",
            "Google Apps Script",
            "### ツール",
            "Google Sheets, LINE Messaging API",
            "### 技術選定",
            "GASの学習のため",
          ],
        },
        {
          title: "【プロジェクトを通した学び】",
          content: ["日常を支える簡単なGASであれば自分で作れるようになった。"],
        },
      ],
      demoUrl: "https://github.com/Kazu-K0032/Administration-Table",
      repoUrl: "https://github.com/Kazu-K0032/Administration-Table",
    },
  },
  {
    id: "template-todo-app",
    title: "テンプレートTodoアプリ",
    description:
      "Next.jsを使用した学習・検証を行うためのテンプレートリポジトリ",
    url: "https://github.com/Kazu-K0032/template-todo-app",
    publishedAt: "2025/10/17",
    thumbnailUrl: "/common/template-todo-app.png",
    tags: ["Next.js", "Antd", "TypeScript", "Tailwind CSS", "Prisma"],
    features: [
      "タスク管理機能（追加・編集・削除）",
      "アカウント管理機能(新規作成・アカウント変更)",
    ],
    modal: {
      images: ["/common/template-todo-app.png"],
      pages: [
        {
          title: "【プロジェクト概要・開発背景】",
          content: [
            "## 概要",
            "本プロジェクトは、Next.jsを使用した学習・検証を行うためのテンプレートリポジトリです。",
            "## 背景",
            "仕事で使用している技術の勉強のため、環境をできるだけ合わせて学習や検証を行えるリポジトリが欲しく、このようなリポジトリを作成しました。",
          ],
        },
        {
          title: "【使用技術・ツール】",
          content: [
            "### 言語",
            "Next.js, TypeScript, Tailwind CSS, Prisma",
            "### ツール",
            "Git/GitHub, Vercel",
            "### 技術選定",
            "仕事で使用している技術の勉強のため",
          ],
        },
        {
          title: "【プロジェクトを通した学び】",
          content: [
            "仕事で生まれた課題の学習環境として再利用しやすく、環境構築に時間がかからなくなったので学習時間の確保に大きな影響を与えることができた。",
          ],
        },
      ],
      demoUrl: "https://github.com/Kazu-K0032/template-todo-app",
      repoUrl: "https://github.com/Kazu-K0032/template-todo-app",
    },
  },
  {
    id: "go-chat-app",
    title: "Goを使用した基本的なチャットアプリ",
    description:
      "認証・プロフィール・ユーザー検索・チャット機能を備えた基本的なチャットアプリです",
    url: "https://github.com/Kazu-K0032/Go-Chat-App",
    publishedAt: "2025/04/19",
    thumbnailUrl: "/common/go-chat-app.png",
    tags: ["Go", "Firebase", "HTML", "SCSS", "JavaScript"],
    features: [
      "都道府県別の人口推移グラフ表示",
      "プロフィール（ユーザー名・画像・パスワードなどの変更）",
      "検索機能（登録済みユーザーのフィルタリング）",
      "チャット機能（メッセージの送信・受信）",
    ],
    modal: {
      images: ["/common/go-chat-app.png"],
      pages: [
        {
          title: "【プロジェクト概要・開発背景】",
          content: [
            "## 概要",
            "本プロジェクトは、認証・プロフィール・ユーザー検索・チャット機能を備えた基本的なチャットアプリの開発を目的としています。",
            "## 背景",
            "社内でGo言語の理解を深めるべく、1ヶ月かけてGo言語の学習とチャットアプリを作成するイベントがあったため、個人開発として開発を行いました。",
          ],
        },
        {
          title: "【使用技術・ツール】",
          content: [
            "### 言語",
            "Go, HTML/CSS(SCSS), JavaScript",
            "### ツール",
            "Git/GitHub, Firebase",
            "### 技術選定",
            "Go言語の学習のため",
          ],
        },
        {
          title: "【開発プロセス・自分の役割】",
          content: [
            "Go言語は全くの初心者だったため、Udemyの講座を参考にしながら開発を行いました。",
            "開発の中で大事にしていたのは、基本的なGoの機能を理解することと、誰よりもチャットアプリらしい機能を実装することでした。",
          ],
        },
        {
          title: "【プロジェクトを通した学び】",
          content: [
            "本プロジェクトを通じて、Go言語の基本的な機能を理解することができました。",
            "本アプリでは並行処理が使われておらずGo言語ならではの良さを発揮出来てはいませんでしたが、1ヶ月かけて人に見せられるアプリを完成できたことは大きな財産になると思ってます。",
          ],
        },
        {
          title: "【ドキュメントおよび参考資料】",
          content: [
            "- [【Go基礎入門】Golang基礎入門 + 各種ライブラリ + 簡単なTodoWebアプリケーション開発(Go言語)](https://www.udemy.com/course/golang-webgosql/?kw=%E3%80%90Go%E5%9F%BA%E7%A4%8E%E5%85%A5%E9%96%80%E3%80%91Golang%E5%9F%BA%E7%A4%8E%E5%85%A5%E9%96%80+%2B+%E5%90%84%E7%A8%AE%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA+%2B+%E7%B0%A1%E5%8D%98%E3%81%AATodoWeb%E3%82%A2%E3%83%97&src=sac&couponCode=25BBPMXINACTIVE)",
          ],
        },
      ],
      demoUrl: "https://github.com/Kazu-K0032/Go-Chat-App",
      repoUrl: "https://github.com/Kazu-K0032/Go-Chat-App",
    },
  },
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
          title: "【プロジェクト概要・開発背景】",
          content: [
            "## 概要",
            "本プロジェクトは、都道府県別の総人口推移をグラフで表示するアプリの開発を目的としています。加えて、年少人口・生産年齢人口・老年人口の切り替え表示も可能です。",
            "## 背景",
            "以前、GeekSalonの研修課題として『フロントエンドのフレームワークとRESASのAPIを活用し、都道府県別の総人口推移を可視化するSPAを作成する』という課題に取り組んだ経験がありました。そのテーマがフロントエンドを学習するうえで適切だと感じたため、今回はReactおよびTypeScriptの学習を目的として、個人開発を行いました。",
          ],
        },
        {
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
          title: "【プロジェクトを通した学び】",
          content: [
            "本プロジェクトを通じて、特に『型定義の重要性』に対する意識が大きく変わりました。",
            "以前は、型定義を行うことでコード量が増え、開発コストがかかると考えていました。しかし、実際にアプリを開発する中で、本来意図していない型のデータを扱おうとする場面が何度かあり、そのたびに型エラーが誤りを指摘してくれました。",
            "もしチーム開発でこのようなミスが頻発すると、レビューや修正の手間が増える可能性が高くなります。そうしたリスクを考えると、型定義は単なるコストではなく、長期的な視点で見たときに『投資』と捉えるべきだと学びました。",
          ],
        },
        {
          title: "【ドキュメントおよび参考資料】",
          content: ["- [Chart.js](https://www.chartjs.org/)"],
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
          title: "【プロジェクト概要・開発背景】",
          content: [
            "本プロジェクトでは、あにまんchのスレッドコメントを、YMMの台本形式でスプレッドシートに出力する機能を開発しました。",
            "私は趣味でYouTubeの動画制作を行っており、その一環として制作プロセスの一部を自動化したいと考え、今回の開発に至りました。",
            "",
            "※あにまんchは、アニメや漫画に関する感想や意見を共有できる掲示板サイトです。",
          ],
        },
        {
          title: "【使用技術・ツール】",
          content: [
            "### 言語",
            "",
            "JavaScript",
            "",
            "### ツール",
            "",
            "スプレッドシート, Google Apps Script, Git/GitHub",
            "",
            "### 技術選定",
            "",
            "開発当初はGASを頻繁に使用しており、GASを使用したプロダクトを作りたいと思い、今回のプロジェクトでも採用しました。",
          ],
        },
        {
          title: "【開発プロセス・自分の役割】",
          content: [
            "本プロジェクトは、すべての開発工程を一人で担当しました。",
            "まず、動画制作の流れをリストアップし、その中でGASを活用できる部分を整理しました。その後、GASを用いて自動化を進め、GASで対応できない動画制作の領域については、別途PHPを用いて開発を行いました。",
          ],
        },
        {
          title: "【プロジェクトを通した学び】",
          content: [
            "本プロジェクトを通じて、コードの整理の重要性を実感しました。",
            "開発当初は、深く考えずにコードを書いていたため、機能追加のたびにコードが冗長化し、結果としてスパゲッティコードになってしまいました。そこで、一度コードを整理し、処理を役割ごとに分けて再構築することで、可読性や保守性の向上につなげることができました。",
          ],
        },
        {
          title: "【ドキュメントおよび参考資料】",
          content: [
            "- [Qiita, 「【Google App Script】Parserライブラリでwebスクレイピングする方法」](https://qiita.com/tk226/items/c806fc2fdff9115d4473)",
          ],
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
          title: "【プロジェクト概要・開発背景】",
          content: [
            "[GeekSalon](https://geek-salon.com/)で得た知識を、コースの枠を超えて共有できるアプリを開発しました。",
            "",
            "当初はGeekSalonに参加しており、授業の一環として開発しました。プロダクトを通じ、自身の所属するコースの垣根を越えて知識の共有ができるようにしたいと考え、自身のコースで学習したVue.jsおよびFirebaseを使用して開発しました。",
          ],
        },
        {
          title: "【使用技術・ツール】",
          content: [
            "### 言語",
            "",
            "HTML/CSS(SCSS), JavaScript(Vue.js)",
            "",
            "### ツール",
            "",
            "Firebase, Git/GitHub",
            "",
            "### 技術選定",
            "",
            "GeekSalon受講時に学んだ言語およびツールを活用し、実践的な開発経験を積むことを目的としました。",
          ],
        },
        {
          title: "【開発プロセス・自分の役割】",
          content: [
            "開発は私を含めた3名のチームで進め、GeekSalonのメンター1名にサポートいただきました。",
            "開発期間は1ヶ月で、週2回のDiscordミーティングを通じて、Notionを活用しながら課題や機能要件を整理しました。",
            "",
            "私はチームリーダーとして、メンバーの稼働時間を管理し、タスクの振り分けを担当しました。",
            "",
            "チーム開発終了後には、サイトの改修作業を実施しました。",
            "改修の際には、SCSSの導入やIssue/PRを活用した開発を行い、エラーやバグの修正、UI/UXを考慮した機能の追加を行いました。",
          ],
        },
        {
          title: "【プロジェクトを通した学び】",
          content: [
            "要件定義から開発、デプロイまでの一連の流れを経験することで、開発プロセス全体の理解を深めることができました。",
          ],
        },
        {
          title: "【ドキュメントおよび参考資料】",
          content: ["特になし"],
        },
      ],
      demoUrl: "https://team3-sky.web.app",
      repoUrl: "https://github.com/webex14-team-3/sky-app?tab=readme-ov-file",
    },
  },
];

/**
 * ページ先頭に表示されるプロダクト画像にpriorityを設定する数
 * @see https://nextjs-ja-translation-docs.vercel.app/docs/basic-features/image-optimization#priority
 */
export const TOP_PRIORITY_IMAGE_COUNT = 3;
