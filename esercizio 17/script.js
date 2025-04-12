/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#1E40AF",
                secondary: "#FACC15",
                cardBg: "#FFFFFF",
                cardBorder: "#E5E7EB",
            },
            borderRadius: {
                card: "12px",
                button: "8px",
            },
        },
    },
    plugins: [],
};