const buildHelper = require("@egjs/build-helper");
const name = "DeviewRecycle";

export default buildHelper([
	{
		name,
		input: "./src/index.umd.ts",
		output: "./dist/recycle.cjs.js",
		exports: "named",
		format: "cjs",
	},
	{
		name,
		input: "./src/index.ts",
		output: "./dist/recycle.esm.js",
		exports: "named",
		format: "es",
	},
	{
		name,
		input: "./src/index.umd.ts",
		output: "./dist/recycle.js",
		format: "umd",
		exports: "default",
		resolve: true,
	},
	{
		name,
		input: "./src/index.umd.ts",
		output: "./dist/recycle.min.js",
		format: "umd",
		exports: "default",
		resolve: true,
		uglify: true,
	},
]);