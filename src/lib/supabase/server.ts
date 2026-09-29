import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { getSupabaseEnv } from "@/lib/env";

/**
 * Creates a Supabase client for use on the server (Server Components, Server
 * Functions, Route Handlers). Must be created per-request — never cached at
 * module scope — because it is bound to the current request's cookies.
 *
 * Credentials are validated lazily on first call — see `getSupabaseEnv`.
 */
export async function createClient() {
  const env = getSupabaseEnv();
  const cookieStore = await cookies();

  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // `setAll` was called from a Server Component. This can be
            // ignored when there is middleware/proxy refreshing sessions.
          }
        },
      },
    },
  );
}
