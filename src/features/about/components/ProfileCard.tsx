"use client";

import { PROFILE_INFO } from "../About.constants";
import { aboutStyles } from "../About.styles";

export default function ProfileCard() {
  return (
    <div className={aboutStyles.profileCard}>
      <div className="mb-6 flex items-center">
        <div className={aboutStyles.profileIcon}>K</div>
        <div className="ml-4">
          <h3 className="heading-3">{PROFILE_INFO.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">Frontend Engineer</p>
        </div>
      </div>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {PROFILE_INFO.description}
      </p>
    </div>
  );
}
