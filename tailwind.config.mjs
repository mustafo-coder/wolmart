/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#1E5CEA',
				secondary: '#E6EFFD',
			},
			container: {
				padding: 10,
				center: true,
			},
		},
	},
	plugins: [],
};
