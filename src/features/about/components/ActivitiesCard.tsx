"use client";

import Image from "next/image";
import { ACTIVITIES } from "../About.constants";
import { aboutStyles } from "../About.styles";

export default function ActivitiesCard() {
  return (
    <div className={aboutStyles.subCard}>
      <h4 className={aboutStyles.subCardTitle}>
        <span className="section-dot mr-2"></span>
        活動
      </h4>
      <ul className="space-y-3">
        {ACTIVITIES.map((activity, index) => (
          <li key={index}>
            <a
              href={activity.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-teal-100 dark:hover:bg-teal-800/30"
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
