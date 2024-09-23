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
  // adapter: PrismaAdapter(prisma),
  // pages: {
  //   signIn: "/api/auth/signIn"
  // }
};
