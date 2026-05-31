const features = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2L13.5 8.5H20L14.5 12.5L16.5 19L11 15L5.5 19L7.5 12.5L2 8.5H8.5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
        ),
        title: "AI Performance Engine",
        description:
            "Our machine learning model analyses your training patterns, adapts to your recovery, and predicts your peak performance windows.",
        tag: "Core",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 16L8 10L12 14L17 8L20 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="11" r="1.5" fill="currentColor"/>
                <circle cx="2" cy="16" r="1.5" fill="currentColor"/>
            </svg>
        ),
        title: "Real-Time Analytics",
        description:
            "Live biometric dashboards. Monitor volume, intensity, velocity, and recovery metrics with sub-second precision.",
        tag: "Analytics",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="13" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="3" y="13" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M16 13v6M13 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
        title: "Smart Programming",
        description:
            "Dynamic periodisation that adjusts weekly. Auto-generate mesocycles, deloads, and progressive overload plans tailored to your goal.",
        tag: "Planning",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M11 7v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
        title: "Recovery Intelligence",
        description:
            "Sleep quality, HRV, and soreness data combined into a single daily readiness score. Know exactly when to push and when to rest.",
        tag: "Recovery",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7h16M3 11h16M3 15h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
        title: "Exercise Library",
        description:
            "340+ exercises with 3D motion overlays. Technique scoring powered by pose estimation ensures every rep counts.",
        tag: "Library",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 8a5 5 0 0 0-10 0c0 4 5 10 5 10s5-6 5-10Z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
            </svg>
        ),
        title: "Wearable Sync",
        description:
            "Native integrations with Apple Watch, Garmin, Polar, and Whoop. All your data in one unified platform.",
        tag: "Integrations",
    },
];

export default function Features() {
    return (
        <section className="relative py-24 lg:py-36" id="features">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Section header */}
                <div className="max-w-xl mb-16 lg:mb-24">
                    <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#e8ff47] mb-4">
                        Platform Features
                    </p>
                    <h2 className="font-display text-5xl lg:text-7xl text-white leading-[0.92] mb-6">
                        BUILT FOR<br />
                        <span className="text-white/25">SERIOUS</span><br />
                        ATHLETES.
                    </h2>
                    <p className="text-white/45 text-base lg:text-lg leading-relaxed font-light">
                        Every feature is engineered around one goal: helping you reach your
                        genetic ceiling faster.
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`card-hover rounded-2xl border border-white/[0.07] p-7 group cursor-pointer
                ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}
              `}
                            style={{ background: "linear-gradient(145deg, #111111, #0d0d0d)" }}
                        >
                            {/* Top row */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/[0.08] text-white/40 group-hover:text-[#e8ff47] group-hover:border-[#e8ff47]/20 transition-all duration-300"
                                     style={{ background: "rgba(255,255,255,0.03)" }}
                                >
                                    {feature.icon}
                                </div>
                                <span className="text-[10px] font-medium tracking-widest uppercase text-white/20 border border-white/[0.07] rounded-full px-2.5 py-1">
                  {feature.tag}
                </span>
                            </div>

                            {/* Content */}
                            <h3 className="font-semibold text-white text-base mb-3 leading-snug">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-white/40 leading-relaxed font-light">
                                {feature.description}
                            </p>

                            {/* Hover arrow */}
                            <div className="mt-6 flex items-center gap-1.5 text-[#e8ff47] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xs font-medium">Learn more</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}