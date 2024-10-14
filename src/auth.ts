import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const StrapiLogin = async (
  credentials: Partial<Record<"email" | "password", unknown>>
) => {
  const res = await fetch("http://localhost:3004/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data);
  }

  return data;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Credentials({
      id: "strapi-credentials",
      name: "Strapi Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials) {
            return null;
          }

          const data = await StrapiLogin(credentials);
          return data;
        } catch (error) {
          console.error("Authorize error:", error);
          throw new Error(
            JSON.stringify({ errors: error.message, status: false })
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/error",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async signIn(userDetail) {
      console.log("signin");

      if (Object.keys(userDetail).length === 0) {
        return false;
      }
      return true;
    },
    async redirect({ baseUrl }) {
      console.log("redirect");
      return `${baseUrl}/protected`;
    },
    async session({ session, token }) {
      console.log("session session", session);
      console.log("session token", token);
      const newSession = { ...session } as any;
      if (session.user) {
        newSession.user.name = token.user;
        newSession.user.email = token.email;
        newSession.strapiToken = token.strapiToken;
        newSession.user.strapiUserId = token.strapiUserId;
        newSession.user.blocked = token.blocked;
      }

      return { ...session, ...token };
    },
    async jwt({ token, user }) {
      //   console.log("login with", account?.provider);

      //   let newUser = { ...user } as any;
      //   token.strapiToken = newUser.strapiToken;
      //   token.strapiUserId = newUser.id;
      //   token.blocked = newUser.blocked;

      //   console.log("jwt", { token });
      return { ...token, ...user };
    },
  },
});
