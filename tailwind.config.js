/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': 'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)',
        'hospital-bg': 'linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)',
        'hospital-cardholder-bg': 'linear-gradient(81deg, #EFF5FE 9.01%, rgba(241, 247, 255, 0.47) 89.11%)'
      },
      boxShadow : {
        'hero-shadow': '6px 6px 35px 0px #1028511C',
        'faq-shadow-stats': '0px 15px 35px -5px #00000012',
        'faq-shadow-icon': '0px 15px 25px 0px #0000000F',
        'faq-poster' : '0px 15px 55px -10px #00000017',
        'family-card' : '0px 15px 45px -5px #00000012',
        'specialisation-card': '0px 34px 44px 0px #D5DBE470',
        'specialist-card': '0px 15px 55px -10px #00000017',
        'hospital-searchbar': '6px 6px 35px 0px #1028511C',
        'navlink': 'inset  0 -6px 0px -1px #2AA7FF'
}
    },
    fontFamily: { Poppins: ["Poppins", "sans-serif"],
                  Roboto : ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
