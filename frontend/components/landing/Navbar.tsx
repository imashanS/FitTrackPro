"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { isLoggedIn, logout } from "@/lib/auth";

const loggedOutLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const loggedInLinks = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Workouts", href: "/workouts" },
    { label: "Profile", href: "/profile" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setAuthenticated(isLoggedIn());
    }, []);

    const navLinks = authenticated ? loggedInLinks : loggedOutLinks;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/[0.06]"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between h-16 lg:h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-[#e8ff47] rounded-sm rotate-12 group-hover:rotate-45 transition-transform duration-500" />
                            <span className="relative font-display text-black text-sm leading-none z-10">T</span>
                        </div>
                        <span className="font-display text-2xl tracking-widest text-white">
              TRA<span style={{ color: "var(--accent)" }}>CRO</span>
            </span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium tracking-wide text-white/50 hover:text-white transition-colors duration-200 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#e8ff47] group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA — Desktop */}
                    <div className="hidden md:flex items-center gap-4">
                        {authenticated ? (
                            <button
                                onClick={logout}
                                className="text-sm font-medium text-white/60 hover:text-red-400 transition-colors duration-200 tracking-wide"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="/register"
                                    className="btn-primary px-5 py-2.5 rounded-full bg-[#e8ff47] text-black text-sm font-semibold tracking-wide"
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${
                    menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } bg-[#0c0c0c] border-t border-white/[0.06]`}
            >
                <div className="px-6 py-6 flex flex-col gap-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-base font-medium text-white/60 hover:text-white transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-2 flex flex-col gap-3">
                        {authenticated ? (
                            <button
                                onClick={logout}
                                className="text-sm font-medium text-white/60 hover:text-red-400 transition-colors duration-200 tracking-wide text-left"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="/register"
                                    className="btn-primary w-full py-3 rounded-full bg-[#e8ff47] text-black text-sm font-semibold tracking-wide text-center"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}