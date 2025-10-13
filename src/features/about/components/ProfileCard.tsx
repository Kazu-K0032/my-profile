"use client";

import { PROFILE_INFO } from "../About.constants";

export default function ProfileCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-blue-50 p-8 shadow-xl dark:border-slate-600 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 dark:text-slate-100">
      <div className="mb-6 flex items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white">
          K
        </div>
        <div className="ml-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {PROFILE_INFO.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">Frontend Engineer</p>
        </div>
      </div>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {PROFILE_INFO.description}
      </p>
    </div>
  );
}
