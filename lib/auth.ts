import NextAuth, { type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "";
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH ?? "";
const ADMIN_PASSWORD_PLAIN = process.env.ADMIN_PASSWORD ?? "";
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET ?? "dev-secret-change";

export const authOptions: NextAuthOptions = {
  secret: NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        if (credentials.email !== ADMIN_EMAIL) return null;
        // 1) 平文パスワードが設定されていればそちらを優先（暫定運用用）
        if (ADMIN_PASSWORD_PLAIN) {
          if (credentials.password !== ADMIN_PASSWORD_PLAIN) return null;
          return { id: "admin", name: "Admin", email: ADMIN_EMAIL } as any;
        }
        // 2) それ以外は bcrypt ハッシュで検証
        if (!ADMIN_PASSWORD_HASH) return null;
        const ok = await bcrypt.compare(credentials.password, ADMIN_PASSWORD_HASH);
        if (!ok) return null;
        return { id: "admin", name: "Admin", email: ADMIN_EMAIL } as any;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
};

export const { handlers: authHandlers, auth: getServerAuth, signIn, signOut } = NextAuth(authOptions);


