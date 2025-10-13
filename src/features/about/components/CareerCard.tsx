"use client";

import { CAREERS } from "../About.constants";

export default function CareerCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow-xl dark:border-indigo-600 dark:bg-gradient-to-br dark:from-indigo-900/30 dark:to-purple-800/30 dark:text-indigo-100">
      <h3 className="mb-8 flex items-center text-3xl font-bold text-gray-900 dark:text-white">
        <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-sm font-bold text-white">
          📈
        </span>
        経歴
      </h3>
      <div className="relative">
        {/* タイムライン */}
        <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        <div className="space-y-8">
          {CAREERS.map((career, index) => (
            <div key={index} className="relative flex items-start">
              <div className="absolute left-2 h-4 w-4 rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-purple-500 dark:border-gray-800"></div>
              <div className="ml-8">
                <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 p-6 dark:border-blue-800 dark:from-blue-900/20 dark:to-purple-900/20">
                  <h4 className="mb-2 text-xl font-bold text-blue-600 dark:text-blue-400">
                    {career.year}
                  </h4>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    {career.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
