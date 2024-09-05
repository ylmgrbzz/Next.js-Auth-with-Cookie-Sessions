"use server";

import { SessionData, sessionOptions, defaultSession } from '@/lib';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const getSession = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }
    return session;
}

export const login = async (
    prevState: { error: undefined | string },
    formData: FormData
) => {
    const session = await getSession();

    const formUsername = formData.get("username") as string;
    const formPassword = formData.get("password") as string;

    if (formUsername !== "admin" || formPassword !== "admin") {
        return { error: "Wrong Credentials!" };
    }

    session.userId = "1";
    session.username = formUsername;
    session.isPro = true;
    session.isLoggedIn = true;


    await session.save();
    redirect("/");
};

export const logout = async () => {
    const session = await getSession();
    session.destroy();
    redirect("/");
}

export const changePremium = async () => {
    const session = await getSession();
    const isPro = !session.isPro;
    session.isPro = isPro;
    await session.save();
}

export const changeUsername = async (formData: FormData) => {
    const session = await getSession();
    const username = formData.get("username") as string;
    session.username = username;
    await session.save();
}