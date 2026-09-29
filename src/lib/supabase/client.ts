import { createBrowserClient } from "@supabase/ssr";

import { getSupabaseEnv } from "@/lib/env";

/**
 * Creates a Supabase client for use in the browser (Client Components).
 *
 * Credentials are validated lazily on first call — see `getSupabaseEnv`.
 */
export function createClient() {
  const env = getSupabaseEnv();

  return createBrowserClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  );
}
