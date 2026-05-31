// lib/auth.ts

export const getToken = (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("token");
};

export const setToken = (token: string): void => {
    localStorage.setItem("token", token);
};

export const removeToken = (): void => {
    localStorage.removeItem("token");
};

export const isLoggedIn = (): boolean => {
    const token = getToken();
    if (!token) return false;

    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const isExpired = payload.exp * 1000 < Date.now();
        return !isExpired;
    } catch {
        return false;
    }
};

export const logout = (): void => {
    removeToken();
    window.location.href = "/login";
};