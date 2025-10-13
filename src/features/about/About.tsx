"use client";

import Image from "next/image";
import {
  PROFILE_INFO,
  QUALIFICATIONS,
  ACTIVITIES,
  HOBBIES,
  CAREERS,
} from "./About.constants";
import { useAbout } from "./useAbout";

export default function About() {
  const {
    resolvedTheme,
    mounted,
    mainTitle,
    subTitle,
    professionalSkills,
    productSkills,
    hobbySkills,
  } = useAbout();

  return (
    <div className="mx-auto max-w-6xl">
      {/* ヘッダーセクション */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-5xl font-bold text-black md:text-6xl dark:text-white">
          {mainTitle}
        </h2>
        <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
          {subTitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* プロフィールカード */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-6 flex items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white">
                K
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {PROFILE_INFO.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Frontend Engineer
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {PROFILE_INFO.description}
            </p>
          </div>
          {/* 受験資格・活動・趣味セクション */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* 受験資格 */}
            <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 dark:border-green-800 dark:from-green-900/20 dark:to-emerald-900/20">
              <h4 className="mb-4 flex items-center text-lg font-bold text-green-800 dark:text-green-300">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                受験資格
              </h4>
              <ul className="space-y-3">
                {QUALIFICATIONS.map((qualification, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Image
                      src={qualification.icon}
                      alt={qualification.alt}
                      width={24}
                      height={24}
                      unoptimized
                      className="dark:invert"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {qualification.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 活動 */}
            <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:border-blue-800 dark:from-blue-900/20 dark:to-indigo-900/20">
              <h4 className="mb-4 flex items-center text-lg font-bold text-blue-800 dark:text-blue-300">
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                活動
              </h4>
              <ul className="space-y-3">
                {ACTIVITIES.map((activity, index) => (
                  <li key={index}>
                    <a
                      href={activity.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-blue-100 dark:hover:bg-blue-800/30"
                    >
                      <Image
                        src={activity.icon}
                        alt={activity.alt}
                        width={24}
                        height={24}
                        unoptimized
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {activity.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 趣味 */}
            <div className="rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6 dark:border-purple-800 dark:from-purple-900/20 dark:to-pink-900/20">
              <h4 className="mb-4 flex items-center text-lg font-bold text-purple-800 dark:text-purple-300">
                <span className="mr-2 h-2 w-2 rounded-full bg-purple-500"></span>
                趣味
              </h4>
              <ul className="space-y-3">
                {HOBBIES.map((hobby, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Image
                      src={
                        hobby.name === "友人と遊ぶ" &&
                        mounted &&
                        resolvedTheme === "dark"
                          ? "/icon/icon_friend-dark.svg"
                          : hobby.icon
                      }
                      alt={hobby.alt}
                      width={24}
                      height={24}
                      className="h-6 w-6 dark:invert"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {hobby.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* スキルセクション */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-6 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-sm font-bold text-white">
                ⚡
              </span>
              スキル
            </h3>

            {/* 実務経験 */}
            <div className="mb-6">
              <h4 className="mb-3 flex items-center text-sm font-semibold text-green-600 dark:text-green-400">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                実務経験
              </h4>
              <div className="flex flex-wrap gap-2">
                {professionalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2 dark:border-green-800 dark:bg-green-900/20"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.alt}
                      width={16}
                      height={16}
                      unoptimized
                    />
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* プロダクト制作経験 */}
            <div className="mb-6">
              <h4 className="mb-3 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                プロダクト制作
              </h4>
              <div className="flex flex-wrap gap-2">
                {productSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 dark:border-blue-800 dark:bg-blue-900/20"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.alt}
                      width={16}
                      height={16}
                      unoptimized
                    />
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 趣味 */}
            <div>
              <h4 className="mb-3 flex items-center text-sm font-semibold text-purple-600 dark:text-purple-400">
                <span className="mr-2 h-2 w-2 rounded-full bg-purple-500"></span>
                趣味
              </h4>
              <div className="flex flex-wrap gap-2">
                {hobbySkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-3 py-2 dark:border-purple-800 dark:bg-purple-900/20"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.alt}
                      width={16}
                      height={16}
                      unoptimized
                    />
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 経歴セクション */}
      <div className="mt-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-8 flex items-center text-3xl font-bold text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-sm font-bold text-white">
              📈
            </span>
            経歴
          </h3>
          <div className="relative">
            {/* タイムライン */}
            <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            <div className="space-y-8">
              {CAREERS.map((career, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-2 h-4 w-4 rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-purple-500 dark:border-gray-800"></div>
                  <div className="ml-8">
                    <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 p-6 dark:border-blue-800 dark:from-blue-900/20 dark:to-purple-900/20">
                      <h4 className="mb-2 text-xl font-bold text-blue-600 dark:text-blue-400">
                        {career.year}
                      </h4>
                      <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                        {career.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
