const footerLinks = {
    Product: ["Features", "Pricing", "Changelog", "Roadmap"],
    Company: ["About", "Blog", "Careers", "Press"],
    Support: ["Documentation", "Community", "Contact", "Status"],
    Legal: ["Privacy", "Terms", "Cookies", "Security"],
};

export default function Footer() {
    return (
        <footer className="border-t border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
                <div className="grid lg:grid-cols-5 gap-12">

                    {/* Brand col */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-7 bg-[#e8ff47] rounded-sm rotate-12 flex items-center justify-center">
                                <span className="font-display text-black text-xs">T</span>
                            </div>
                            <span className="font-display text-xl tracking-widest">
                TRA<span style={{ color: "var(--accent)" }}>CRO</span>
              </span>
                        </div>
                        <p className="text-sm text-white/35 leading-relaxed mb-6">
                            Define your peak. The intelligent fitness platform for serious athletes.
                        </p>
                        <div className="flex gap-3">
                            {/* Social icons */}
                            {["twitter", "instagram", "linkedin"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all duration-200"
                                    aria-label={social}
                                >
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                                        <circle cx="6" cy="6" r="3"/>
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link cols */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-white/30 mb-5">
                                {category}
                            </p>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/25">
                        © 2025 TraCro Technologies Ltd. All rights reserved.
                    </p>
                    <p className="text-xs text-white/20">
                        Built for athletes. Designed for precision.
                    </p>
                </div>
            </div>
        </footer>
    );
}