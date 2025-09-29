import { createBrowserClient } from '@supabase/ssr'

/**
 * Access this function within a client component
 * @returns 
 */
export function createClient() {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    )

    return supabase
}