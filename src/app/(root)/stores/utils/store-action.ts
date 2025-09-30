"use server";

interface CreateStoreProps {
    name: string;
    category: string;
    description?: string;
    userId: string;
}

export const createStore = async ({ name, category, description, userId }: CreateStoreProps) => { };