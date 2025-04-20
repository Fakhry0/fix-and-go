import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366', // Brand Dark Blue
        secondary: '#FFD700', // Brand Lemon Yellow
        'light-gray': '#f3f4f6', // For alternating sections
        'medium-gray': '#6b7280', // Default body text
        'dark-gray': '#374151', // Stronger body text
        'near-black': '#111827', // Footer, dark buttons
        'text-normal': '#374151', // Normal text color
        'text-muted': '#6b7280', // Secondary text color
      },
      fontFamily: {
        cairo: ['var(--font-cairo)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config