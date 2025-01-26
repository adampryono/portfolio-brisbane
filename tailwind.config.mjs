module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
      screens: { md: { max: "1050px" }, sm: { max: "559px" } },
      extend: {
          colors: {
              black: { 900: "var(--black_900)", "900_33": "var(--black_900_33)" },
              gray: {
                  900: "var(--gray_900)",
                  "900_4c": "var(--gray_900_4c)",
                  "900_01": "var(--gray_900_01)",
                  "900_02": "var(--gray_900_02)",
              },
              indigo: { 900: "var(--indigo_900)" },
              linear_1: "var(--linear_1)",
              primary_colors: { white_1: "var(--primary_colors_white_1)" },
              teal: { 300: "var(--teal_300)", "300_01": "var(--teal_300_01)" },
              white: { a700_7f: "var(--white_a700_7f)", a700_99: "var(--white_a700_99)" },
          },
          boxShadow: {},
          backgroundImage: { gradient: "linear-gradient(123deg, #62bdae, #44babd, #3ba2c3, #2b2b67)" },
          fontFamily: { inter: "Inter", plusjakartasans: "Plus Jakarta Sans" },
      },
  },
  plugins: [require("@tailwindcss/forms")],
};
