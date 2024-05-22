import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  // Check if the request is for the login page
  const isLoginPage = request.nextUrl.pathname === "/auth/login";

  // If the user has an access token and is not trying to access the login page,
  // allow access to all pages except the login page
  if (accessToken && !isLoginPage) {
    return NextResponse.next();
  }

  // If the user has an access token and is not trying to access the login page,
  // allow access to all pages except the login page
  if (accessToken && isLoginPage) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl.origin));
  }

  // If the user does not have an access token and is trying to access the login page,
  // allow access to the login page
  if (!accessToken && isLoginPage) {
    return NextResponse.next();
  }

  // For any other scenario, redirect the user to the login page
  return NextResponse.redirect(new URL("/auth/login", request.nextUrl.origin));
}

// Configuration for the middleware
export const config = {
  // Matcher to specify routes where the middleware should be applied
  // Excludes routes related to API, static files, favicon, and image files (PNG and JPG)
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|svg)$).*)",
  ],
};
