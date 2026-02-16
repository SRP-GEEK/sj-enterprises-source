/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0a2540',
          blue: '#1565c0',
        },
        accent: {
          orange: '#ff6b35',
          teal: '#00bfa5',
          gold: '#ffa726',
        },
        neutral: {
          light: '#f8f9fa',
          white: '#ffffff',
        },
        text: {
          dark: '#1a1a1a',
          gray: '#546e7a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0,0,0,0.08)',
        'md': '0 4px 16px rgba(0,0,0,0.12)',
        'lg': '0 8px 32px rgba(0,0,0,0.16)',
      },
    },
  },
  plugins: [],
}
