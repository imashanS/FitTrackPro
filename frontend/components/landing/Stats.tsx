const stats = [
    { value: "12K+", label: "Active Athletes" },
    { value: "98M+", label: "Reps Tracked" },
    { value: "4.9★", label: "App Rating" },
    { value: "340+", label: "Workout Types" },
];

export default function Stats() {
    return (
        <section className="relative border-y border-white/[0.05]" id="about">
            <div className="accent-line absolute top-0 left-0 right-0" />
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-1 group">
              <span className="font-display text-4xl lg:text-5xl text-white group-hover:text-[#e8ff47] transition-colors duration-300">
                {stat.value}
              </span>
                            <span className="text-xs text-white/35 tracking-widest uppercase font-medium">
                {stat.label}
              </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="accent-line absolute bottom-0 left-0 right-0" />
        </section>
    );
}