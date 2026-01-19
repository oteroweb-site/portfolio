/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                primary: '#020617',
                secondary: '#0f172a',
                accent: '#2dd4bf',
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
