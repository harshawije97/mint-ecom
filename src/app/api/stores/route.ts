"use server";

import { createClient } from "@/utils/supabase/server-props";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    try {
        const client = await createClient();
        const { data: { user } } = await client.auth.getUser();

        if (!user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await request.json();

        const { data, error } = await client.rpc('createnewstore', {
            p_name: body.name,
            p_description: body.description,
            p_category: body.category,
        });

        if (error) {
            console.log('[STORE QUERY POST ERROR]', error);
            return new NextResponse("Internal error", { status: 500 });
        }

        return new NextResponse(JSON.stringify(data), { status: 200 });

    } catch (error) {
        console.log('[STORE POST ERROR]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}