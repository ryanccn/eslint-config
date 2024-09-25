import type { ConfigPart } from './_types.js';

import { ensurePackages, interopDefault } from '../utils.js';

const svelte: ConfigPart = async () => {
	ensurePackages(['eslint-plugin-svelte', 'svelte-eslint-parser', 'typescript-eslint', 'svelte']);

	const plugin = await interopDefault(import('eslint-plugin-svelte'));

	const svelteParser = await interopDefault(import('svelte-eslint-parser'));
	const tsParser = await interopDefault(import('@typescript-eslint/parser'));

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return [
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
		...(plugin.configs['flat/recommended'] as any),
		{
			files: ['*.svelte', '**/*.svelte'],
			languageOptions: {
				parser: svelteParser,
				parserOptions: {
					parser: tsParser,
				},
			},
		},
	];
};

export { svelte };
