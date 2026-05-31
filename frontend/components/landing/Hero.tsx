"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Subtle parallax on mouse move
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth - 0.5) * 20;
            const y = (clientY / innerHeight - 0.5) * 20;

            const visual = container.querySelector<HTMLElement>(".hero-visual");
            if (visual) {
                visual.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center grid-bg overflow-hidden pt-20"
            id="home"
        >
            {/* Background radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
            >
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-10"
                     style={{ background: "radial-gradient(circle, #e8ff47 0%, transparent 70%)" }}
                />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-5"
                     style={{ background: "radial-gradient(circle, #e8ff47 0%, transparent 70%)" }}
                />
            </div>

            {/* Vertical accent lines */}
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" aria-hidden="true" />
            <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center min-h-[calc(100vh-80px)]">

                    {/* Left — Content */}
                    <div className="flex flex-col justify-center py-16 lg:py-0">

                        {/* Badge */}
                        <div className="opacity-0 animate-fade-up delay-100 inline-flex items-center gap-2 mb-8 w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e8ff47] animate-pulse" />
                            <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/50 border border-white/10 rounded-full px-3 py-1">
                AI-Powered Fitness Intelligence
              </span>
                        </div>

                        {/* Headline */}
                        <div className="opacity-0 animate-fade-up delay-200 mb-6">
                            <h1 className="font-display text-[clamp(4rem,10vw,8.5rem)] leading-[0.9] tracking-wide">
                                <span className="block text-white">DEFINE</span>
                                <span className="block text-white">YOUR</span>
                                <span className="block text-gradient">PEAK.</span>
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <div className="opacity-0 animate-fade-up delay-300 mb-10 max-w-md">
                            <p className="text-base lg:text-lg text-white/50 leading-relaxed font-light">
                                Track every rep, analyse every metric, and unlock the science
                                behind your performance. TraCro turns raw effort into
                                structured progress.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="opacity-0 animate-fade-up delay-400 flex flex-wrap gap-4 mb-14">
                            <button className="btn-primary flex items-center gap-2 px-8 py-4 rounded-full bg-[#e8ff47] text-black font-semibold text-sm tracking-wide animate-pulse-glow">
                                Get Started
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white text-sm font-medium tracking-wide hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300">
                                Explore Features
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>

                        {/* Social proof */}
                        <div className="opacity-0 animate-fade-up delay-500 flex items-center gap-4">
                            <div className="flex -space-x-2.5">
                                {["bg-orange-400", "bg-sky-400", "bg-violet-400", "bg-emerald-400"].map((color, i) => (
                                    <div
                                        key={i}
                                        className={`w-8 h-8 rounded-full ${color} border-2 border-[#080808]`}
                                    />
                                ))}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">12,000+ athletes</p>
                                <p className="text-xs text-white/40">already training smarter</p>
                            </div>
                        </div>
                    </div>

                    {/* Right — Visual */}
                    <div className="relative flex items-center justify-center hero-visual transition-transform duration-700 ease-out">
                        {/* Outer glow ring */}
                        <div className="absolute w-[420px] h-[420px] lg:w-[520px] lg:h-[520px] rounded-full border border-white/[0.04]"
                             style={{ boxShadow: "0 0 120px rgba(232,255,71,0.08)" }}
                        />
                        <div className="absolute w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full border border-white/[0.06]" />
                        <div className="absolute w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] rounded-full border border-[#e8ff47]/[0.08]" />

                        {/* Main visual card */}
                        <div className="relative z-10 w-72 lg:w-96 animate-float">
                            {/* Athlete silhouette SVG */}
                            <div
                                className="w-full aspect-[3/4] rounded-3xl overflow-hidden relative border border-white/[0.08]"
                                style={{ background: "linear-gradient(160deg, #141414 0%, #0a0a0a 100%)" }}
                            >
                                {/* Accent corner glow */}
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 opacity-30"
                                    style={{ background: "radial-gradient(circle at top right, #e8ff47, transparent 70%)" }}
                                />
                                <div
                                    className="absolute bottom-0 left-0 w-24 h-24 opacity-20"
                                    style={{ background: "radial-gradient(circle at bottom left, #e8ff47, transparent 70%)" }}
                                />

                                {/* SVG Athlete Silhouette */}
                                <svg
                                    viewBox="0 0 300 400"
                                    className="w-full h-full"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Background subtle grid */}
                                    <defs>
                                        <pattern id="miniGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                                        </pattern>
                                        <linearGradient id="athleteGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#e8ff47" stopOpacity="0.9"/>
                                            <stop offset="100%" stopColor="#b8cc20" stopOpacity="0.6"/>
                                        </linearGradient>
                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                            <feMerge>
                                                <feMergeNode in="coloredBlur"/>
                                                <feMergeNode in="SourceGraphic"/>
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    <rect width="300" height="400" fill="url(#miniGrid)"/>

                                    {/* Athlete Silhouette — Overhead press pose */}
                                    {/* Head */}
                                    <circle cx="150" cy="68" r="24" fill="url(#athleteGrad)" filter="url(#glow)"/>

                                    {/* Neck */}
                                    <rect x="143" y="88" width="14" height="16" rx="5" fill="url(#athleteGrad)"/>

                                    {/* Torso — muscular wide */}
                                    <path d="M 108 104 Q 100 110 98 130 L 100 175 Q 102 185 150 185 Q 198 185 200 175 L 202 130 Q 200 110 192 104 Q 175 100 150 100 Q 125 100 108 104Z" fill="url(#athleteGrad)" filter="url(#glow)"/>

                                    {/* Left arm — raised */}
                                    <path d="M 108 104 L 82 80 Q 75 70 70 58 L 60 48 Q 56 44 58 42 L 66 50 Q 72 60 82 72 L 98 92Z" fill="url(#athleteGrad)"/>
                                    {/* Left forearm extension */}
                                    <path d="M 60 48 L 46 34 Q 42 28 44 26 L 50 32 Q 54 36 62 44Z" fill="url(#athleteGrad)"/>

                                    {/* Right arm — raised */}
                                    <path d="M 192 104 L 218 80 Q 225 70 230 58 L 240 48 Q 244 44 242 42 L 234 50 Q 228 60 218 72 L 202 92Z" fill="url(#athleteGrad)"/>
                                    {/* Right forearm extension */}
                                    <path d="M 240 48 L 254 34 Q 258 28 256 26 L 250 32 Q 246 36 238 44Z" fill="url(#athleteGrad)"/>

                                    {/* Barbell */}
                                    <rect x="32" y="22" width="236" height="8" rx="4" fill="url(#athleteGrad)" filter="url(#glow)"/>
                                    {/* Weights left */}
                                    <rect x="18" y="14" width="18" height="24" rx="3" fill="url(#athleteGrad)"/>
                                    <rect x="10" y="17" width="10" height="18" rx="2" fill="rgba(232,255,71,0.4)"/>
                                    {/* Weights right */}
                                    <rect x="264" y="14" width="18" height="24" rx="3" fill="url(#athleteGrad)"/>
                                    <rect x="280" y="17" width="10" height="18" rx="2" fill="rgba(232,255,71,0.4)"/>

                                    {/* Waist / shorts */}
                                    <path d="M 100 175 L 95 230 L 115 230 L 140 195 L 160 195 L 185 230 L 205 230 L 200 175Z" fill="rgba(232,255,71,0.25)"/>

                                    {/* Left leg */}
                                    <path d="M 95 230 L 88 310 Q 87 325 96 330 L 110 330 Q 118 325 118 310 L 115 230Z" fill="url(#athleteGrad)"/>
                                    {/* Right leg */}
                                    <path d="M 205 230 L 212 310 Q 213 325 204 330 L 190 330 Q 182 325 182 310 L 185 230Z" fill="url(#athleteGrad)"/>

                                    {/* Shoes */}
                                    <ellipse cx="103" cy="335" rx="20" ry="8" fill="rgba(232,255,71,0.7)"/>
                                    <ellipse cx="197" cy="335" rx="20" ry="8" fill="rgba(232,255,71,0.7)"/>

                                    {/* Scan line effect */}
                                    <rect x="0" y="0" width="300" height="6" fill="rgba(232,255,71,0.08)" className="scan-line" style={{position: "absolute"}}/>

                                    {/* Decorative circuit lines */}
                                    <line x1="30" y1="360" x2="90" y2="360" stroke="rgba(232,255,71,0.15)" strokeWidth="1"/>
                                    <line x1="30" y1="360" x2="30" y2="380" stroke="rgba(232,255,71,0.15)" strokeWidth="1"/>
                                    <circle cx="30" cy="380" r="2" fill="rgba(232,255,71,0.4)"/>

                                    <line x1="210" y1="360" x2="270" y2="360" stroke="rgba(232,255,71,0.15)" strokeWidth="1"/>
                                    <line x1="270" y1="360" x2="270" y2="380" stroke="rgba(232,255,71,0.15)" strokeWidth="1"/>
                                    <circle cx="270" cy="380" r="2" fill="rgba(232,255,71,0.4)"/>

                                    {/* Corner markers */}
                                    <path d="M 12 12 L 12 26 M 12 12 L 26 12" stroke="rgba(232,255,71,0.5)" strokeWidth="1.5"/>
                                    <path d="M 288 12 L 288 26 M 288 12 L 274 12" stroke="rgba(232,255,71,0.5)" strokeWidth="1.5"/>
                                    <path d="M 12 388 L 12 374 M 12 388 L 26 388" stroke="rgba(232,255,71,0.5)" strokeWidth="1.5"/>
                                    <path d="M 288 388 L 288 374 M 288 388 L 274 388" stroke="rgba(232,255,71,0.5)" strokeWidth="1.5"/>
                                </svg>

                                {/* Live metric badge */}
                                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8ff47] animate-pulse" />
                                    <span className="text-[10px] font-medium text-white/70 tracking-wide">LIVE TRACKING</span>
                                </div>

                                {/* HR badge */}
                                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm border border-white/10 rounded-2xl p-3">
                                    <p className="text-[9px] text-white/40 tracking-widest uppercase mb-0.5">Heart Rate</p>
                                    <p className="text-2xl font-display text-[#e8ff47] leading-none">142 <span className="text-xs text-white/40 font-sans">bpm</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Floating metric chips */}
                        <div
                            className="absolute -left-4 lg:-left-8 top-1/3 bg-[#111] border border-white/[0.08] rounded-2xl px-4 py-3 opacity-0 animate-fade-up delay-600"
                            style={{ animationFillMode: "forwards" }}
                        >
                            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Weekly Volume</p>
                            <p className="text-xl font-display text-white">24,800 <span className="text-xs font-sans text-white/40">kg</span></p>
                            <p className="text-[10px] text-[#e8ff47] mt-0.5">▲ 12% vs last week</p>
                        </div>

                        <div
                            className="absolute -right-4 lg:-right-8 bottom-1/3 bg-[#111] border border-white/[0.08] rounded-2xl px-4 py-3 opacity-0 animate-fade-up delay-500"
                            style={{ animationFillMode: "forwards" }}
                        >
                            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Recovery Score</p>
                            <p className="text-xl font-display text-white">87<span className="text-xs font-sans text-white/40"> / 100</span></p>
                            <div className="mt-1.5 w-full h-1 rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full rounded-full bg-[#e8ff47]" style={{ width: "87%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" aria-hidden="true" />
        </section>
    );
}