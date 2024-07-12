import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      address: string;
      accessToken: string;
      username: string;
      email: string;
      roles: string[];
    };
  }
  interface JWT {
    user: {
      address: string;
      accessToken: string;
      username: string;
      email: string;
      roles: string[];
    };
  }
}
