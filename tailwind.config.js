/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{ts,tsx,html}',
    './node_modules/goldex-ui-library/**/*.{js,ts,tsx,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#1F1F24',
        'bg-secondary': '#FFFFFF0A',
        'avatar-green': '#A8F1E3',
        'avatar-lightPurple': '#BE9DF1',
        'avatar-yellow': '#F29C37',
        'avatar-blue': '#3782F2',
        'avatar-purple': '#8937F2',
        'avatar-pink': '#F94FB5',
        'text-secondary': '#FFFFFF66',
        'text-white': '#fff',
        'text-accent': '#73E5CF',
      },
      padding: {
        18: '4.750rem',
      },
      borderRadius: {
        circle: '50%',
        x: '0.625rem',
      },
      maxWidth: {
        container: '73.1875rem',
        table: '70.6875rem',
      },
      width: {
        85: '22.6875rem',
        'default-popup': '31.25rem',
        form: '31.25rem',
      },
      fontFamily: {
        body: ['Roboto Mono'],
      },
    },
  },
  plugins: [],
}
