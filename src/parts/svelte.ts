import type { ConfigPart } from './_types.js';

import { globs } from '../globs.js';
import { ensurePackages, interopDefault } from '../utils.js';

const svelte: ConfigPart = async () => {
	ensurePackages(['eslint-plugin-svelte', 'svelte-eslint-parser', 'typescript-eslint', 'svelte']);

	const plugin = await interopDefault(import('eslint-plugin-svelte'));
	const svelteParser = await interopDefault(import('svelte-eslint-parser'));

	const tsPlugin = await interopDefault(import('typescript-eslint'));

	return [
		{
			files: globs.svelte,

			plugins: {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
				svelte: plugin as any,
			},

			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			rules: {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				...(plugin.configs.recommended.rules as any),
			},

			languageOptions: {
				parser: svelteParser,
				parserOptions: {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
					parser: tsPlugin.parser as any,
				},
			},
		},
	];
};

export { svelte };
