"use client";

import Image from "next/image";
import { ACTIVITIES } from "../About.constants";

export default function ActivitiesCard() {
  return (
    <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-sky-50 to-blue-100 p-6 dark:border-sky-600 dark:from-sky-900/30 dark:to-blue-800/30">
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
  );
}
