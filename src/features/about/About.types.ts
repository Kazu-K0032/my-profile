/**
 * プロフィール情報
 */
export interface ProfileInfo {
  name: string;
  birthYear: number;
  birthPlace: string;
  description: string;
}

/**
 * 受験資格
 */
export interface Qualification {
  name: string;
  icon: string;
  alt: string;
}

/**
 * 活動
 */
export interface Activity {
  name: string;
  icon: string;
  alt: string;
  url: string;
}

/**
 * 趣味
 */
export interface Hobby {
  name: string;
  icon: string;
  alt: string;
}

/**
 * スキル
 */
export interface Skill {
  name: string;
  icon: string;
  alt: string;
  category: "professional" | "product" | "hobby";
}

/**
 * 経歴
 */
export interface Career {
  year: string;
  description: string;
}
