/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./styles/**/*.{css,sass,scss,less}",
    ],
    theme: {
        extend: {},
        container: {
            center: true,
        },
    },
    plugins: [],
};
