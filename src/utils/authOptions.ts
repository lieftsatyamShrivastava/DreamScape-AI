// import { PrismaAdapter } from "@next-auth/prisma-adapter"

import GoogleProvider from "next-auth/providers/google"
import prisma from "@/utils/prisma"
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID??"",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET??"",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const { email } = user;
      if (!account) { return false; }
      if (account.provider === "google" || account.provider === "github") {
        // Check if an account exists with this email
        const existingUser = await prisma.user.findFirst({
          where: { email: email! },
        });

        if (existingUser) {
          // If the account exists but the provider is not linked, update the provider
          await prisma.user.update({
            where: { email: email! },
            data: {
              name: user.name,
              image: user.image,
              provider: account.provider, 
              providerId: account.providerAccountId
            },
          });
        } else {
          // If no existing user, create a new account with OAuth provider
          await prisma.user.create({
            data: {
              name: user.name,
              email: email!,
              image: user.image,
              provider: account.provider,
              providerId: account.providerAccountId
            },
          });
        }
      }
      return true;
    },
  }
  // adapter: PrismaAdapter(prisma),
  // pages: {
  //   signIn: "/api/auth/signIn"
  // }
};
