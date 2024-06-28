"use server";

import { parseStringify } from "@/lib/utils";
import { ID } from "node-appwrite";
import { createSessionClient, createAdminClient } from '../server/appwrite';
import { cookies } from "next/headers";

export const signIn = async (data: signInProps) => {
    try {
        const { account } = await createAdminClient();
        const response = await account.createEmailPasswordSession(data.email, data.password)
        return parseStringify(response);
    } catch (err) {
        console.error(err);
        return false;
    }
}

export const signUp = async (data: SignUpParams) => {
    try {

        const { account } = await createAdminClient();
        const name = data.firstName + ' ' + data.lastName;

        const newUserAccount = await account.create(ID.unique(), data.email, data.password, name);
        const session = await account.createEmailPasswordSession(data.email, data.password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(newUserAccount);
    } catch (err) {
        console.error(err);
        return false;
    }
}

export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        return await account.get();
    } catch (error) {
        return null;
    }
}

export const logoutAccount = async () => {
    try {
        const { account } = await createSessionClient();
        cookies().delete('appwrite-session');
        await account.deleteSession('current');
        return true;
    } catch (error) {
        return null;
    }
}