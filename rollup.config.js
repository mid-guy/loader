const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');

module.exports = {
	input: 'src/index.ts', // Entry point of your library
	output: [
		{
			file: 'dist/index.cjs.js', // CommonJS format
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: 'dist/index.esm.js', // ES Module format
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		resolve(), // Helps Rollup resolve node_modules dependencies
		commonjs(), // Converts CommonJS modules to ES6
		typescript({ tsconfig: './tsconfig.json' }), // Integrates TypeScript
		terser(), // Optional: Minifies the output for better performance
	],
	external: [
		/* List your external dependencies here */
	],
};
