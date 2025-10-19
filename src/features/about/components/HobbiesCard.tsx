"use client";

import Image from "next/image";
import { getIconSize } from "@/styles/design.styles";
import { HOBBIES } from "../About.constants";
import { aboutStyles } from "../About.styles";
import { useAbout } from "../useAbout";

export default function HobbiesCard() {
  const { resolvedTheme, mounted } = useAbout();

  return (
    <div className={aboutStyles.subCard}>
      <h4 className={aboutStyles.subCardTitle}>
        <span className="section-dot mr-2"></span>
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
              className={`${getIconSize("xl")} dark:invert`}
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {hobby.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
