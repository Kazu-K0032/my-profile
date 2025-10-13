import {
  ProfileInfo,
  Qualification,
  Activity,
  Hobby,
  Skill,
  Career,
} from "./About.types";

export const PROFILE_INFO: ProfileInfo = {
  name: "Kazu",
  description:
    "想像したものを形にするのが好きで、学生時代はYouTubeにいろいろなジャンルの動画を投稿していました。就職活動のとき、動画編集を仕事にするか悩んでいたのですが、そのとき「プログラマー」という職業を知りました。デジタルなツールを使ってゼロから何かを作る工程が動画編集と似ていると感じ、休学期間を経て、プログラマーとして働くことを決めました。仕事では、1つ1つの業務をスピーディーかつ丁寧にこなせるように心がけながら、エンジニアとして必要なスキルを日々学び続けています。",
};

export const QUALIFICATIONS: Qualification[] = [
  {
    name: "PHP8 技術者認定初級試験",
    icon: "https://skillicons.dev/icons?i=php",
    alt: "skill_php",
  },
  {
    name: "Python3 エンジニア認定基礎試験",
    icon: "https://skillicons.dev/icons?i=python",
    alt: "skill_python",
  },
];

export const ACTIVITIES: Activity[] = [
  {
    name: "GitHub",
    icon: "https://skillicons.dev/icons?i=github",
    alt: "GitHub",
    url: "https://github.com/Kazu-K0032",
  },
  {
    name: "Qiita",
    icon: "/icon/icon_qiita.svg",
    alt: "Qiita",
    url: "https://qiita.com/Kazu-K0032",
  },
];

export const HOBBIES: Hobby[] = [
  {
    name: "プログラミング",
    icon: "/icon/icon_studying.svg",
    alt: "studying",
  },
  {
    name: "歌うこと",
    icon: "/icon/icon_microphone.svg",
    alt: "microphone",
  },
  {
    name: "音楽鑑賞",
    icon: "/icon/icon_listening.svg",
    alt: "listening",
  },
  {
    name: "アニメ観賞",
    icon: "/icon/icon_watching.svg",
    alt: "watching",
  },
  {
    name: "友人と遊ぶ",
    icon: "/icon/icon_friend.svg",
    alt: "play",
  },
];

export const SKILLS: Skill[] = [
  // 実務経験あり - フロントエンド
  {
    name: "HTML/CSS(SCSS)",
    icon: "https://skillicons.dev/icons?i=html",
    alt: "HTML/CSS(SCSS)",
    category: "professional",
  },
  {
    name: "JavaScript(jQuery)",
    icon: "https://skillicons.dev/icons?i=javascript",
    alt: "JavaScript(jQuery)",
    category: "professional",
  },
  {
    name: "React",
    icon: "https://skillicons.dev/icons?i=react",
    alt: "React",
    category: "professional",
  },
  {
    name: "Next.js",
    icon: "https://skillicons.dev/icons?i=nextjs",
    alt: "Next.js",
    category: "professional",
  },
  {
    name: "Tailwind CSS",
    icon: "https://skillicons.dev/icons?i=tailwind",
    alt: "Tailwind CSS",
    category: "professional",
  },
  // 実務経験あり - バックエンド
  {
    name: "PHP(WordPress)",
    icon: "https://skillicons.dev/icons?i=wordpress",
    alt: "PHP(WordPress)",
    category: "professional",
  },
  {
    name: "Google Apps Script",
    icon: "https://skillicons.dev/icons?i=javascript",
    alt: "Google Apps Script",
    category: "professional",
  },
  {
    name: "Python",
    icon: "https://skillicons.dev/icons?i=python",
    alt: "Python",
    category: "professional",
  },
  {
    name: "Go",
    icon: "https://skillicons.dev/icons?i=go",
    alt: "Go",
    category: "professional",
  },
  // 実務経験あり - データベース
  {
    name: "MySQL",
    icon: "https://skillicons.dev/icons?i=mysql",
    alt: "MySQL",
    category: "professional",
  },
  {
    name: "PostgreSQL",
    icon: "https://skillicons.dev/icons?i=postgresql",
    alt: "PostgreSQL",
    category: "professional",
  },
  // 実務経験あり - インフラ・クラウド
  {
    name: "Google Cloud Platform",
    icon: "https://skillicons.dev/icons?i=gcp",
    alt: "Google Cloud Platform",
    category: "professional",
  },
  {
    name: "Firebase",
    icon: "https://skillicons.dev/icons?i=firebase",
    alt: "Firebase",
    category: "professional",
  },
  {
    name: "Docker",
    icon: "https://skillicons.dev/icons?i=docker",
    alt: "Docker",
    category: "professional",
  },
  {
    name: "Terraform",
    icon: "https://skillicons.dev/icons?i=terraform",
    alt: "Terraform",
    category: "professional",
  },
  // 実務経験あり - 開発ツール
  {
    name: "Git/GitHub",
    icon: "https://skillicons.dev/icons?i=git",
    alt: "Git/GitHub",
    category: "professional",
  },
  {
    name: "Figma",
    icon: "https://skillicons.dev/icons?i=figma",
    alt: "Figma",
    category: "professional",
  },
  {
    name: "Jira",
    icon: "https://skillicons.dev/icons?i=jira",
    alt: "Jira",
    category: "professional",
  },
  // プロダクト制作経験あり
  {
    name: "JavaScript(TypeScript, Vue.js, React, Next.js)",
    icon: "https://skillicons.dev/icons?i=javascript",
    alt: "JavaScript(TypeScript, Vue.js, React, Next.js)",
    category: "product",
  },
  {
    name: "Python",
    icon: "https://skillicons.dev/icons?i=python",
    alt: "Python",
    category: "product",
  },
  {
    name: "Google Apps Script",
    icon: "https://skillicons.dev/icons?i=javascript",
    alt: "Google Apps Script",
    category: "product",
  },
  {
    name: "Go",
    icon: "https://skillicons.dev/icons?i=go",
    alt: "Go",
    category: "product",
  },
  // 趣味
  {
    name: "Python(Django)",
    icon: "https://skillicons.dev/icons?i=python",
    alt: "Python(Django)",
    category: "hobby",
  },
  {
    name: "VBA",
    icon: "/icon/icon_vba.svg",
    alt: "VBA",
    category: "hobby",
  },
];

export const CAREERS: Career[] = [
  {
    year: "2025年10月-",
    description:
      "SNS運用システム新規開発プロジェクトに参画。Next.js、Tailwind CSS、TypeScript、PostgreSQLを使用した要件定義支援・設計補助・Webアプリ開発を担当。Terraform、Google Cloud Platformを活用したインフラ管理も経験。",
  },
  {
    year: "2025年6月-2024年11月",
    description:
      "採用集客イベントサイト制作プロジェクト。HTML/CSS、JavaScript、PHP、SCSS、MySQL、WordPressを使用したフロントエンド開発を担当。",
  },
  {
    year: "2025年6月-2024年8月",
    description:
      "宝飾品ECサイト改修プロジェクト。HTML/CSS、JavaScript、PHP、SCSS、MySQL、Docker、WordPressを活用したフロントエンド開発とインフラ構築を担当。",
  },
  {
    year: "2025年6月-2024年7月",
    description:
      "総合建設会社Webサイトの保守・運用。HTML/CSS、PHP、SCSSを使用したサイト保守とコンテンツ更新を担当。",
  },
  {
    year: "2024年7月-2024年6月",
    description:
      "GAS自動化システム開発プロジェクト。Google Apps Script、Google Cloud Platformを使用した業務自動化システムの開発を担当。",
  },
  {
    year: "2024年5月-2024年4月",
    description:
      "自社研修に参加。JavaScript、React、Spring Boot、Java、MySQL、Gitを使用したフロントエンド・バックエンド基礎学習と個人・グループ開発演習を実施。",
  },
  {
    year: "2024年4月-2023年3月",
    description:
      "営業サポート業務。Google Apps Scriptを活用した業務効率化システムの開発と運用を担当。",
  },
  {
    year: "2023年3月-2022年8月",
    description:
      "GeekSalonの「WebExpertコース」を経て、フロントエンドの基礎知識からアプリの開発までを学びました。そのままメンターとして参画し、プログラミング教育事業の運営メンバーとして働いていました。",
  },
  {
    year: "2022年8月-2022年4月",
    description:
      "趣味でYoutubeやnanaなどのプラットフォームに動画や歌を投稿していました。大学では栄養学を学んでいました。",
  },
];
