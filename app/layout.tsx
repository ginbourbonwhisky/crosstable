import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crosstable",
  description: "KnownsのCSVを用いたクロス集計アプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}


