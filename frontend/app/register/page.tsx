"use client";

import { useState } from "react";
import { apiRequest } from "@/lib/api";
import Link from "next/link";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        setError("");

        // Basic validation
        if (!name || !email || !password) {
            setError("All fields are required.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setLoading(true);
        try {
            await apiRequest("/auth/register", {
                method: "POST",
                body: { name, email, password },
                auth: false,
            });

            window.location.href = "/login";
        } catch (err: any) {
            setError(err.message || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-black">
            <div className="bg-zinc-900 p-10 rounded-2xl w-full max-w-md shadow-2xl">

                <h1 className="text-4xl font-bold text-white mb-8 text-center">
                    TraCro
                </h1>

                <p className="text-gray-400 text-center mb-8">
                    Start your journey
                </p>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-xl mb-6 text-center">
                        {error}
                    </div>
                )}

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-4 rounded-xl bg-zinc-800 text-white outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-4 rounded-xl bg-zinc-800 text-white outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-4 rounded-xl bg-zinc-800 text-white outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        onClick={handleRegister}
                        disabled={loading}
                        className="w-full bg-white text-black p-4 rounded-xl font-semibold hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Creating account..." : "Create Account"}
                    </button>
                </div>

                <p className="text-gray-500 text-sm text-center mt-6">
                    Already have an account?{" "}
                    <Link href="/login" className="text-white hover:underline">
                        Log in
                    </Link>
                </p>

            </div>
        </main>
    );
}