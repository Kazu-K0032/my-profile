"use client";

import Image from "next/image";
import { QUALIFICATIONS } from "../About.constants";
import { aboutStyles } from "../About.styles";

export default function QualificationsCard() {
  return (
    <div className={aboutStyles.subCard}>
      <h4 className={aboutStyles.subCardTitle}>
        <span className="section-dot mr-2"></span>
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
