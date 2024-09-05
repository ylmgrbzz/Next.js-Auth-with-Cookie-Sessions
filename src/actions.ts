"use server";

import { SessionData, sessionOptions } from '@/lib';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

export const getSession = async () => {
    const session = getIronSession<SessionData>(cookies(), sessionOptions);
    return session;
}

export const login = async () => { }

export const logout = async () => { }