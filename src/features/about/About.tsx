"use client";

import {
  ProfileCard,
  QualificationsCard,
  ActivitiesCard,
  HobbiesCard,
  SkillsCard,
  CareerCard,
} from "./components";
import { useAbout } from "./useAbout";

export default function About() {
  const { mainTitle, subTitle } = useAbout();

  return (
    <div className="mx-auto max-w-6xl">
      {/* ヘッダーセクション */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-5xl font-bold text-gray-800 md:text-6xl dark:text-gray-100">
          {mainTitle}
        </h2>
        <p className="text-xl font-medium text-gray-700 dark:text-gray-200">
          {subTitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* プロフィールカード */}
        <div className="lg:col-span-2">
          <ProfileCard />
          {/* 受験資格・活動・趣味セクション */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <QualificationsCard />
            <ActivitiesCard />
            <HobbiesCard />
          </div>
        </div>

        {/* スキルセクション */}
        <div className="lg:col-span-1">
          <SkillsCard />
        </div>
      </div>

      {/* 経歴セクション */}
      <div className="mt-12">
        <CareerCard />
      </div>
    </div>
  );
}
