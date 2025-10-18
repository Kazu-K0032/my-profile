"use client";

import { CAREERS } from "../About.constants";
import { aboutStyles } from "../About.styles";

export default function CareerCard() {
  return (
    <div className={aboutStyles.careerCard}>
      <h3 className="heading-3 mb-8 flex items-center">
        <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-sm font-bold text-white">
          📈
        </span>
        経歴
      </h3>
      <div className="relative">
        {/* タイムライン */}
        <div className={aboutStyles.timelineLine}></div>
        <div className="space-y-8">
          {CAREERS.map((career, index) => (
            <div key={index} className="relative flex items-start">
              <div className={aboutStyles.timelineDot}></div>
              <div className="ml-8">
                <div className={aboutStyles.careerBox}>
                  <h4 className={aboutStyles.careerYear}>{career.year}</h4>
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
