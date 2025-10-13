import Image from "next/image";
import { QIITA_ICON_PATH } from "@/constants/qiita";
import type { QiitaArticle } from "@/types/qiita.types";
import { formatDate } from "@/utils/date";

export default function Article({
  created_at,
  url,
  title,
  site,
}: QiitaArticle & { site: string }) {
  return (
    <div className="grid grid-cols-[136px_1fr] gap-5">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col text-xl"
      >
        <div className="flex items-center justify-center rounded border border-gray-500 text-lg">
          <p className="c-date">{formatDate(created_at)}</p>
        </div>
        <div className="relative h-full w-full rounded">
          <Image
            src={QIITA_ICON_PATH}
            alt="Qiita"
            width={32}
            height={32}
            className="h-32 w-32 rounded-3xl object-cover p-4"
          />
        </div>
      </a>
      <div className="flex flex-col">
        <p className="text-xl">
          記事: <span>{site}</span>
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="c-date flex h-full items-center text-base"
        >
          <span className="line-clamp-2 w-full min-w-0">{title}</span>
        </a>
      </div>
    </div>
  );
}
