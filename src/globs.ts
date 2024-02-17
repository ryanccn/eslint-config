export const globs = {
	javascript: ['**/*.{js,mjs,cjs}'],
	typescript: ['**/*.{ts,mts,cts}'],

	svelte: ['**/*.svelte'],

	ignore: [
		'**/node_modules',
		'**/dist',

		'**/package-lock.json',
		'**/yarn.lock',
		'**/pnpm-lock.yaml',
		'**/bun.lockb',

		'**/.next',
		'**/.nuxt',
		'**/.vercel',
		'**/.changeset',
		'**/.cache',
		'**/.output',

		'**/.vscode',
		'**/.idea',

		'**/LICENSE*',
	],
};
