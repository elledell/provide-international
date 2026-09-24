import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          50: '#F0F3FA',  
          100: '#D5DEEF', 
          300: '#8AAEE0', 
          500: '#628ECB', 
          700: '#395886', 
        },
        brandGold: {
          500: '#FFA000', 
        }
      }
    },
  },
  plugins: [],
}
export default config