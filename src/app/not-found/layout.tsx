import { Metadata } from "next";
import { SITE_TITLE } from "@/constants/globals.constants";

export const metadata: Metadata = {
  title: `404 - Page Not Found | ${SITE_TITLE}`,
  description:
    "お探しのページが見つかりませんでした。URLを確認するか、ホームページから再度お探しください。",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: `404 - Page Not Found | ${SITE_TITLE}`,
    description:
      "お探しのページが見つかりませんでした。URLを確認するか、ホームページから再度お探しください。",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `404 - Page Not Found | ${SITE_TITLE}`,
    description:
      "お探しのページが見つかりませんでした。URLを確認するか、ホームページから再度お探しください。",
  },
};

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
