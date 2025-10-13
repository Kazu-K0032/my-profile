"use client";

import Image from "next/image";
import { QUALIFICATIONS } from "../About.constants";

export default function QualificationsCard() {
  return (
    <div className="rounded-xl border border-green-200 bg-gradient-to-br from-emerald-50 to-green-100 p-6 dark:border-emerald-600 dark:from-emerald-900/30 dark:to-green-800/30">
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
  );
}
