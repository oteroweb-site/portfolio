/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: '#020617', // Slate 950
                secondary: '#0f172a', // Slate 900
                accent: '#2dd4bf', // Teal 400
                accentHover: '#0d9488',
                whatsapp: '#25d366',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Lexend', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
