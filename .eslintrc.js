module.exports = {
	parser: `@typescript-eslint/parser`,
	plugins: [`@typescript-eslint`, `react`, `prettier`],
	extends: [
		`plugin:react/recommended`,
		`plugin:@typescript-eslint/recommended`,
		`prettier`
	],
	settings: {
		react: {
			version: `detect`
		}
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		// Allows for the parsing of modern ECMAScript features
		ecmaVersion: 2018,
		// Allows for the use of imports
		sourceType: `module`
	},
	rules: {
		"react/prop-types": `off`, // Disable prop-types as we use TypeScript for type checking
		"@typescript-eslint/explicit-function-return-type": `off`,
		"@typescript-eslint/no-unused-vars": `error`,
		"prettier/prettier": `error`,
		"@typescript-eslint/ban-ts-ignore": `off`,
		"no-console": [
			`error`,
			{
				allow: [`warn`, `error`]
			}
		],
		"@typescript-eslint/quotes": [
			2,
			`backtick`,
			{
				avoidEscape: true
			}
		],
		indent: [`error`, `tab`],
		"sort-imports": [
			`error`,
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: [`none`, `all`, `multiple`, `single`],
				allowSeparatedGroups: true
			}
		]
	}
};
