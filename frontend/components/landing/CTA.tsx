export default function CTA() {
    return (
        <section className="relative py-24 lg:py-36 overflow-hidden" id="contact">
            {/* Background */}
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(232,255,71,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
                {/* Label */}
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#e8ff47] mb-6">
                    Start Today — Free
                </p>

                {/* Headline */}
                <h2 className="font-display text-6xl lg:text-9xl text-white leading-[0.88] mb-8">
                    YOUR PEAK<br />
                    <span className="text-white/20">AWAITS.</span>
                </h2>

                {/* Subtext */}
                <p className="text-white/45 text-base lg:text-lg max-w-xl mx-auto leading-relaxed mb-12 font-light">
                    Join over 12,000 athletes who are training with data, not guesswork.
                    Free to start. No credit card required.
                </p>

                {/* Email input + CTA */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-5 py-4 rounded-full bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#e8ff47]/40 transition-colors duration-200"
                    />
                    <button className="btn-primary px-8 py-4 rounded-full bg-[#e8ff47] text-black font-semibold text-sm tracking-wide whitespace-nowrap">
                        Get Early Access
                    </button>
                </div>

                <p className="text-xs text-white/25">
                    No spam. No credit card. Cancel anytime.
                </p>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-6 mt-12 flex-wrap">
                    {["256-bit encrypted", "GDPR compliant", "SOC 2 certified"].map((badge) => (
                        <div key={badge} className="flex items-center gap-2 text-xs text-white/30">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6l3 3 5-5" stroke="#e8ff47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {badge}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}