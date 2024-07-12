import {
  NextAuthMiddlewareOptions,
  NextRequestWithAuth,
  withAuth,
} from "next-auth/middleware";
import { NextResponse } from "next/server";

const middleware = (request: NextRequestWithAuth) => {
  const isPrivateRoutes = request.nextUrl.pathname.startsWith("/admin");

  if (!request?.nextauth?.token?.user) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }
  let user = request.nextauth.token.user;
  const isAdmin = user?.roles.includes("ADMIN");
  if (isPrivateRoutes && !isAdmin) {
    return NextResponse.rewrite(new URL("/profile", request.url));
  }
  return NextResponse.next();
};

const callbackOptions: NextAuthMiddlewareOptions = {};

export default withAuth(middleware);
export const config = {
  matcher: ["/profile", "/cart", "/admin", "/dashboard"],
};
