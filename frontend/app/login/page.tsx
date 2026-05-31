"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async () => {

        try {

            const response = await axios.post(
                "http://localhost:8080/api/auth/login",
                {
                    email,
                    password,
                }
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            window.location.href = "/dashboard";

        } catch (error: any) {

            console.log(error.response?.data);
        }
    };

    return (

        <main className="min-h-screen flex items-center justify-center bg-black">

            <div className="bg-zinc-900 p-10 rounded-2xl w-full max-w-md shadow-2xl">

                <h1 className="text-4xl font-bold text-white mb-8 text-center">
                    TraCro
                </h1>

                <p className="text-gray-400 text-center mb-8">
                    Define your peak
                </p>

                <div className="space-y-4">

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
                        onClick={handleLogin}
                        className="w-full bg-white text-black p-4 rounded-xl font-semibold hover:bg-gray-200 transition"
                    >
                        Login
                    </button>

                    <p className="text-gray-500 text-sm text-center mt-6">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-white hover:underline">
                            Register
                        </Link>
                    </p>

                </div>

            </div>

        </main>
    );
}