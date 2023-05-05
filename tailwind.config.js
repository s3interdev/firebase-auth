/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {},
		fontFamily: {
			ubuntu: 'Ubuntu, sans-serif',
		},
	},
	plugins: [require('flowbite/plugin')],
};
