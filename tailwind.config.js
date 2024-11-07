/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: 'Poppins, sans-serif',
            sono: 'Sono, monospace;',
        },
        extend: {
            colors: {
                primaryColor: '#FF453A',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-in forwards',
                fadeOut: 'fadeOut 1s ease-out forwards',
            },
        },
    },
    plugins: [],
}
