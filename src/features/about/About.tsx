"use client";

import Image from "next/image";
import {
  PROFILE_INFO,
  QUALIFICATIONS,
  ACTIVITIES,
  HOBBIES,
  CAREERS,
} from "./About.constants";
import { useAbout } from "./useAbout";

export default function About() {
  const {
    resolvedTheme,
    mounted,
    mainTitle,
    subTitle,
    professionalSkills,
    productSkills,
    hobbySkills,
  } = useAbout();

  return (
    <>
      <h2 className="mb-8 text-center text-4xl tracking-wider md:text-5xl">
        <span className="font-serif font-bold tracking-wide">{mainTitle}</span>
        <span className="ml-4 font-sans text-2xl tracking-wide text-gray-500 dark:text-gray-200">
          {subTitle}
        </span>
      </h2>
      <div className="flex flex-col gap-y-8">
        <section className="flex flex-col gap-y-4 border-b-2 border-dotted border-black pb-8">
          <h3 className="tracking-tighte text-2xl font-bold sm:text-3xl">
            {PROFILE_INFO.name}
          </h3>
          <section>
            <p className="leading-relaxed tracking-wide">
              {PROFILE_INFO.description}
            </p>
          </section>
          <section>
            <h4 className="tracking-tighte mb-1 text-lg font-bold underline sm:text-xl">
              受験資格
            </h4>
            <ul className="flex flex-col gap-y-1">
              {QUALIFICATIONS.map((qualification, index) => (
                <li key={index} className="inline-flex items-center gap-x-1">
                  <Image
                    src={qualification.icon}
                    alt={qualification.alt}
                    width={32}
                    height={32}
                    unoptimized
                    className="dark:invert"
                  />
                  <p>{qualification.name}</p>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h4 className="tracking-tighte mb-1 text-lg font-bold underline sm:text-xl">
              活動
            </h4>
            <ul className="flex flex-col gap-y-1">
              {ACTIVITIES.map((activity, index) => (
                <li key={index}>
                  <a
                    href={activity.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="c-link inline-flex items-center gap-x-1"
                  >
                    <Image
                      src={activity.icon}
                      alt={activity.alt}
                      width={32}
                      height={32}
                      unoptimized
                    />
                    <p>{activity.name}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h4 className="tracking-tighte mb-1 text-lg font-bold underline sm:text-xl">
              趣味
            </h4>
            <ul className="flex flex-col">
              {HOBBIES.map((hobby, index) => (
                <li key={index} className="inline-flex items-center gap-x-1">
                  <Image
                    src={
                      hobby.name === "友人と遊ぶ" &&
                      mounted &&
                      resolvedTheme === "dark"
                        ? "/icon/icon_friend-dark.svg"
                        : hobby.icon
                    }
                    alt={hobby.alt}
                    width={32}
                    height={32}
                    className="dark:invert"
                  />
                  <p>{hobby.name}</p>
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="flex flex-col gap-y-4 border-b-2 border-dotted border-black pb-8">
          <h3 className="tracking-tighte text-2xl font-bold sm:text-3xl">
            スキル
          </h3>
          <section>
            <h4 className="mb-2 text-lg font-bold tracking-tight underline sm:text-xl">
              言語の経験
            </h4>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <li className="border-2 border-[#afa853] p-2">
                <h5 className="mb-2 text-center text-lg font-bold">
                  実務経験あり
                </h5>
                <ul className="flex flex-col gap-y-1">
                  {professionalSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-x-2">
                      <Image
                        src={skill.icon}
                        alt={skill.alt}
                        width={24}
                        height={24}
                        unoptimized
                      />
                      <p className="break-words">{skill.name}</p>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="border-2 border-[#afa853] p-2">
                <h5 className="mb-2 text-center text-lg font-bold">
                  プロダクト制作経験あり
                </h5>
                <ul className="flex flex-col gap-y-1">
                  {productSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-x-2">
                      <Image
                        src={skill.icon}
                        alt={skill.alt}
                        width={24}
                        height={24}
                        unoptimized
                      />
                      <p className="break-words">{skill.name}</p>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="border-2 border-[#afa853] p-2">
                <h5 className="mb-2 text-center text-lg font-bold">趣味</h5>
                <ul className="flex flex-col gap-y-1">
                  {hobbySkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-x-2">
                      <Image
                        src={skill.icon}
                        alt={skill.alt}
                        width={24}
                        height={24}
                        unoptimized
                      />
                      <p className="break-words">{skill.name}</p>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </section>
        </section>

        <section className="flex flex-col gap-y-4">
          <h3 className="tracking-tighte text-2xl font-bold sm:text-3xl">
            経歴
          </h3>
          <ul className="flex flex-col gap-y-2">
            {CAREERS.map((career, index) => (
              <li key={index} className="flex flex-col gap-y-1">
                <h4 className="text-xl">{career.year}</h4>
                <div className="pl-4">
                  <p>{career.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
