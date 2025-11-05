import Link from "next/link";
import { Button } from "../components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-dvh flex items-center justify-center p-6">
      <div className="max-w-xl w-full space-y-4 text-center">
        <h1 className="text-3xl font-bold">Crosstable</h1>
        <p className="text-muted-foreground">
          Knowns からエクスポートした CSV を用いて、プロジェクト単位でクロス集計。
        </p>
        <div className="pt-2">
          <Button asChild>
            <Link href="/admin">はじめる</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}


