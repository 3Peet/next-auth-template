import NextAuth from "next-auth"
import { Provider } from "next-auth/providers"
import Google from "next-auth/providers/google"

export const providers: Provider[] = [Google]

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  pages: {
    signIn: '/signin'
  },
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },
})