/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['"Bebas Neue"', "sans-serif"],
                sans: ["Outfit", "sans-serif"],
            },
            colors: {
                accent: "#e8ff47",
            },
        },
    },
    plugins: [],
};