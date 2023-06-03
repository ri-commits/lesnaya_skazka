/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pattaya: ["var(--font-sans-serif)"],
        amatic: ["var(--font-cursive)"],
        caveat: ["var(--font-heading)"],
        merri: ["var(--font-normal)"],
      },
    },
  },
  plugins: [],
};
