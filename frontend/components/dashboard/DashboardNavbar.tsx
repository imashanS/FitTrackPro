"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/lib/auth";

const navLinks = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Workouts", href: "/workouts" },
    { label: "Profile", href: "/profile" },
];

export default function DashboardNavbar() {
    const pathname = usePathname();

    return (
        <nav className="w-full bg-zinc-900 border-b border-white/[0.06] text-white px-8 py-4 flex justify-between items-center">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-7 h-7 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#e8ff47] rounded-sm rotate-12 group-hover:rotate-45 transition-transform duration-500" />
                    <span className="relative text-black text-xs font-bold z-10">T</span>
                </div>
                <span className="text-xl font-bold tracking-widest">
          TRA<span className="text-[#e8ff47]">CRO</span>
        </span>
            </Link>

            {/* Links */}
            <div className="flex gap-6 items-center">
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={`text-sm font-medium transition-colors duration-200 relative group ${
                            pathname === link.href
                                ? "text-white"
                                : "text-white/50 hover:text-white"
                        }`}
                    >
                        {link.label}
                        {pathname === link.href && (
                            <span className="absolute -bottom-1 left-0 w-full h-px bg-[#e8ff47]" />
                        )}
                    </Link>
                ))}

                <button
                    onClick={logout}
                    className="text-sm font-medium text-white/50 hover:text-red-400 transition-colors duration-200 ml-2"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}