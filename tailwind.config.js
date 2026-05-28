/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a', // Primary Industrial Slate Steel
          950: '#090d16', // Industrial Dark Iron
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdbb74',
          400: '#f97316', // Accent Safety Orange
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          850: '#9a3412',
          900: '#7c2d12',
        },
        offwhite: '#F9FAFB',
        charcoal: '#1C1C1E',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['"Noto Sans"', 'sans-serif'],
      },
      boxShadow: {
        'weightless': '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
        'weightless-hover': '0 30px 60px -15px rgba(15, 23, 42, 0.15)',
        'orange-glow': '0 10px 25px -5px rgba(249, 115, 22, 0.3)',
      },
    },
  },
  plugins: [],
}
