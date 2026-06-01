// lib/api.ts
import { getToken } from "./auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type RequestOptions = {
    method?: string;
    body?: unknown;
    auth?: boolean;
};

export async function apiRequest<T>(
    path: string,
    { method = "GET", body, auth = true }: RequestOptions = {}
): Promise<T | null> {
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };

    if (auth) {
        const token = getToken();
        if (token) headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await fetch(`${BASE_URL}${path}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || `Request failed: ${res.status}`);
    }

    const text = await res.text();
    return text ? JSON.parse(text) : null;
}