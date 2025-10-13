"use client";

import Image from "next/image";
import { HOBBIES } from "../About.constants";
import { useAbout } from "../useAbout";

export default function HobbiesCard() {
  const { resolvedTheme, mounted } = useAbout();

  return (
    <div className="rounded-xl border border-purple-200 bg-gradient-to-br from-violet-50 to-purple-100 p-6 dark:border-violet-600 dark:from-violet-900/30 dark:to-purple-800/30">
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
  );
}
