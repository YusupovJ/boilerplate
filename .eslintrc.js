module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
		tsconfigRootDir: __dirname,
		project: [
			"./api/tsconfig.json",
			"./client/tsconfig.json",
			"./client/tsconfig.app.json",
			"./client/tsconfig.node.json",
		],
	},
	plugins: ["@typescript-eslint", "prettier", "import", "simple-import-sort", "react-hooks", "react-refresh"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:react-hooks/recommended",
	],
	rules: {
		"prettier/prettier": "error",
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",
		"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"@typescript-eslint/no-explicit-any": "warn",
	},
	overrides: [
		{
			files: ["api/**/*.ts"],
			rules: {
				"@typescript-eslint/no-explicit-any": "warn",
				"@typescript-eslint/explicit-module-boundary-types": "off",
			},
		},
		{
			files: ["client/**/*.ts", "client/**/*.tsx"],
			env: {
				browser: true,
			},
			rules: {
				"@typescript-eslint/explicit-function-return-type": "off",
				"react-hooks/rules-of-hooks": "error",
				"react-hooks/exhaustive-deps": "warn",
			},
		},
	],
};
