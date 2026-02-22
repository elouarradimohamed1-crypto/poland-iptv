import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        foreground: '#ffffff',
        accent: {
          primary: '#38bdf8',
          secondary: '#dc2626',
        },
        neutral: {
          900: '#020617',
          800: '#0f172a',
          700: '#1e293b',
          600: '#334155',
          500: '#64748b',
          400: '#cbd5e1',
          300: '#e2e8f0',
          200: '#f1f5f9',
          100: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
}

export default config
