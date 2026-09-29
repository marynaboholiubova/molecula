import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Run on every path except Next.js internals, static assets, and files
  // with an extension (icons, images, etc.).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
