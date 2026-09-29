import { z } from "zod";

const supabaseEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.url({
    message: "NEXT_PUBLIC_SUPABASE_URL must be a valid URL.",
  }),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z
    .string()
    .min(1, "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY is required."),
});

export type SupabaseEnv = z.infer<typeof supabaseEnvSchema>;

let cachedSupabaseEnv: SupabaseEnv | undefined;

/**
 * Validates and returns the Supabase public environment variables.
 *
 * Intentionally NOT called at module load time anywhere in the app: it must
 * only run when a Supabase client is actually requested, so `npm run build`
 * keeps working before real Supabase credentials exist. Throws a clear
 * development error if the variables are missing or malformed.
 */
export function getSupabaseEnv(): SupabaseEnv {
  if (cachedSupabaseEnv) {
    return cachedSupabaseEnv;
  }

  const parsed = supabaseEnvSchema.safeParse({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  });

  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
      .join("\n");

    throw new Error(
      "Supabase environment variables are missing or invalid. Set " +
        "NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY " +
        `in .env.local before using a Supabase client.\n${issues}`,
    );
  }

  cachedSupabaseEnv = parsed.data;
  return cachedSupabaseEnv;
}
