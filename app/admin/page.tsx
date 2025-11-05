import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerAuth } from "../../lib/auth";
import { Button } from "../../components/ui/button";

export default async function AdminHomePage() {
  const session = await getServerAuth();
  if (!session?.user?.email) {
    redirect("/admin/login");
  }
  return (
    <main className="min-h-dvh p-6">
      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="text-2xl font-bold">管理者ホーム（プレースホルダー）</h1>
        <p className="text-muted-foreground">{session.user?.email} でログイン中</p>
        <div className="flex gap-3">
          <Button variant="secondary" asChild>
            <Link href="/">トップへ戻る</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}


