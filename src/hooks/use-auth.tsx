import { createClient } from "@/utils/supabase/client-props";
import { useRouter } from "next/navigation";
import React from "react";

export function useAuth() {
  const router = useRouter();

  React.useEffect(() => {
    const client = createClient();

    // Check if user is logged in
    const checkUser = async () => {
      const {
        data: { user },
      } = await client.auth.getUser();

      if (!user) {
        router.push("/sign-in");
      }
    };

    checkUser();

    // Listen to the auth state change
    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session) {
        router.push("/sign-in");
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);
}