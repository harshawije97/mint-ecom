"use server";
import { createClient } from "@/utils/supabase/server-props";

interface LoginActionProps {
    email: string;
    password: string;
}

export const loginAction = async ({ email, password }: LoginActionProps) => {
    try {
        const client = await createClient();
        const { error } = await client.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            return error.message
        }

        return null
    } catch (error) {
        return error
    }
}