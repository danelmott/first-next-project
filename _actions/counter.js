"use server"
import { revalidatePath } from "next/cache";
import { refresh } from "next/cache";
import { redirect } from "next/navigation";

export async function Counter(currentCount){
    const newCount = currentCount + 1;
    revalidatePath("/count");
    return newCount,redirect("/")
}