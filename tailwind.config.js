/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      bgColor:'#131A21',
      textColor:'#131A21',
      logoColor:'#EE51B2',
      modalbg:'#F0F0F0',
      modalbtntext:'#2C7FD2',
      modalbtnredbg:'#E22727',
      white:'#ffffff',
      black:'#0f0f0f',
      paymenttext:'#666666',
      green:'#006F1F',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        "dark-logo":"url(/image/scripty-logo.png)",
        "light-logo":"url(/image/scripty-light-logo.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      blur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['var(--poppins-font)'],
      },
    },
    borderRadius:{
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl':'20px',
      'large':"45px",
      'full': '9999px'
    }
  },
  plugins: [],
};
