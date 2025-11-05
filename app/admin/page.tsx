import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function AdminHomePage() {
  return (
    <main className="min-h-dvh p-6">
      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="text-2xl font-bold">管理者ホーム（プレースホルダー）</h1>
        <p className="text-muted-foreground">
          ここに管理者ログイン/ダッシュボードを実装します。
        </p>
        <div className="flex gap-3">
          <Button variant="secondary" asChild>
            <Link href="/">トップへ戻る</Link>
          </Button>
          <Button disabled>ログイン（実装予定）</Button>
        </div>
      </div>
    </main>
  );
}


