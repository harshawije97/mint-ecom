"use server";

import { createClient } from "@/utils/supabase/server-props";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const client = await createClient();

        const body = await request.json();

        const { data, error } = await client.storage.from('mint-cms').upload(`images/${body.name}`,
            body.file,
            {
                contentType: body.type,
                cacheControl: '3600',
                upsert: false
            }
        );

        if (error) {
            console.log('[IMAGE FILE POST ERROR]', error);
            return new NextResponse("Internal error", { status: 500 });
        }

        return new NextResponse(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.log('[IMAGE POST ERROR]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}