# Crosstable

Knowns の CSV を用いたクロス集計アプリ。管理者と一般ユーザーで権限を分け、プロジェクト（クライアント）単位でデータを管理します。

## セットアップ

1. Node.js 18+ をインストール
2. 依存関係のインストール

```bash
npm install
```

3. ローカル起動

```bash
npm run dev
```

### 環境変数（認証用）
`.env.local` を作成して以下を設定してください。

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<ランダム長文字列>
ADMIN_EMAIL=<管理者メール>
# どちらか一方を設定してください（優先度: ADMIN_PASSWORD > ADMIN_PASSWORD_HASH）
ADMIN_PASSWORD=<平文パスワード>
ADMIN_PASSWORD_HASH=<bcrypt-hash>
```

bcryptハッシュ生成例：
```bash
node -e "console.log(require('bcryptjs').hashSync('your-password', 10))" # Nodeがある場合
```

## 今後の実装予定
- 認証（管理者：メール+パスワード）
- プロジェクト/データセット/共有リンクのDBスキーマ（Prisma）
- CSV 取り込みと列リネーム
- クロス集計（ピボット）UI
- 共有リンクの有効期限（30/60/90日）


