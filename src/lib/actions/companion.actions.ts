'use server';

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";



export async function createCompanion(formData: CreateCompanion) {


    const { userId: author } = await auth();
    const supabase = createSupabaseClient();


    const { data, error } = await supabase.from("companions").insert({ ...formData, author }).select();

    if (error || error) throw new Error(error.message || "Failed to create a companion")
    return data[0]
}


