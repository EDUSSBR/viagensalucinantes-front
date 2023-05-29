/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/assets/*.{svg,png,jpeg,jpg}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: '400px',
        cr: '700px',
        md: '740px',
        lg: '1135px',
        xl: '1500px',
      },

    },
  },
  daisyui: {
    theme: true,
    themes: [
      {
        mytheme: {
          "primary": "#77c459",
          "secondary": "#e68f56",
          "accent": "#5EA4A3",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
}
