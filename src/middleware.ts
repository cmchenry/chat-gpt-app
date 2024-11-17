import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const config = {
  matcher: ["/chats/:chatid*"],
};

export default auth((req) => {
  if (!req.auth) {
    const loginUrl = new URL("/api/auth/signin", req.url);
    loginUrl.searchParams.set('callbackUrl', req.url);
    
    return NextResponse.redirect(loginUrl);
  }
});