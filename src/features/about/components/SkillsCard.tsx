"use client";

import Image from "next/image";
import { useAbout } from "../useAbout";

export default function SkillsCard() {
  const { professionalSkills, productSkills, hobbySkills } = useAbout();

  return (
    <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-xl dark:border-amber-600 dark:bg-gradient-to-br dark:from-amber-900/30 dark:to-orange-800/30 dark:text-amber-100">
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
  );
}
