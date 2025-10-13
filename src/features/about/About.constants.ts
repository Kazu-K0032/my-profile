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
  birthYear: 2001,
  birthPlace: "福島県出身",
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
  // 実務経験あり
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
  // プロダクト制作経験あり
  {
    name: "JavaScript(TypeScript, Vue.js, React)",
    icon: "https://skillicons.dev/icons?i=javascript",
    alt: "JavaScript(TypeScript, Vue.js, React)",
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
    year: "2024-",
    description:
      "現在、SES企業でフロントエンドエンジニアとして働いています。主にWordPressやVBAを使ったプロジェクトに関わっています。3月に大学を卒業しました。",
  },
  {
    year: "2023",
    description:
      "SES企業のインターン生として、GASを活用した営業サポートに携わっていました。",
  },
  {
    year: "2022",
    description:
      "GeekSalonの「WebExpertコース」を経て、フロントエンドの基礎知識からアプリの開発までを学びました。そのままメンターとして参画し、プログラミング教育事業の運営メンバーとして働いていました。",
  },
  {
    year: "-2021",
    description:
      "趣味でYoutubeやnanaなどのプラットフォームに動画や歌を投稿していました。大学では栄養学を学んでいました。",
  },
];
