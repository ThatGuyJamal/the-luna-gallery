/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: ["Arial", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"niamey-pink": "rgb(236, 37, 203)",
				"niamey-purple": "rgb(37, 37, 203)",
				"niamey-blue": "rgb(37, 203, 203)",
				"niamey-black": "rgb(37, 37, 37)",
			},
		},
	},
	plugins: [],
};
