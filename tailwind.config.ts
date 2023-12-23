import type { Config } from 'tailwindcss'

const {colors : defaultColors }  = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(193, 38%, 86%)",
      "200" : "hsl(150, 100%, 66%)",
      "300" : "hsl(217, 19%, 38%)",
      "400" : "hsl(217, 19%, 24%)",
      "500" : "hsl(218, 23%, 16%)",
    }
  }
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : colors,
    },
  },
  plugins: [],
}
export default config
