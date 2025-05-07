export const globs = {
	javascript: ['**/*.{js,mjs,cjs}'],
	typescript: ['**/*.{ts,mts,cts}'],
	svelte: ['**/*.svelte', '**/*.svelte.{js,mjs,cjs,ts,mts,cts}'],

	ignore: [
		'**/node_modules',
		'**/dist',

		'**/package-lock.json',
		'**/yarn.lock',
		'**/pnpm-lock.yaml',
		'**/bun.lock',
		'**/bun.lockb',

		'**/.next',
		'**/.nuxt',
		'**/.svelte-kit',
		'**/.changeset',
		'**/.vercel',
		'**/.wrangler',
		'**/.cache',
		'**/.output',
		'**/coverage',
	],
};
