"use client";

import Image from "next/image";
import { aboutStyles } from "../About.styles";
import { useAbout } from "../useAbout";

export default function SkillsCard() {
  const { professionalSkills, productSkills, hobbySkills } = useAbout();

  return (
    <div className={aboutStyles.skillsCard}>
      <h3 className="heading-3 mb-6 flex items-center">
        <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-sm font-bold text-white">
          ⚡
        </span>
        スキル
      </h3>

      {/* 実務経験 */}
      <div className="mb-6">
        <h4 className="mb-3 flex items-center text-sm font-semibold text-teal-600 dark:text-teal-400">
          <span className="section-dot mr-2"></span>
          実務経験
        </h4>
        <div className="flex flex-wrap gap-2">
          {professionalSkills.map((skill, index) => (
            <div key={index} className={aboutStyles.skillBadge}>
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
        <h4 className="mb-3 flex items-center text-sm font-semibold text-teal-600 dark:text-teal-400">
          <span className="section-dot mr-2"></span>
          プロダクト制作
        </h4>
        <div className="flex flex-wrap gap-2">
          {productSkills.map((skill, index) => (
            <div key={index} className={aboutStyles.skillBadge}>
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
        <h4 className="mb-3 flex items-center text-sm font-semibold text-teal-600 dark:text-teal-400">
          <span className="section-dot mr-2"></span>
          趣味
        </h4>
        <div className="flex flex-wrap gap-2">
          {hobbySkills.map((skill, index) => (
            <div key={index} className={aboutStyles.skillBadge}>
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
