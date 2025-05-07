import type { ConfigPart } from './_types.js';

import { ensurePackages, interopDefault } from '../utils.js';
import { globs } from '../globs.js';

const svelte: ConfigPart = async () => {
	ensurePackages(['eslint-plugin-svelte', 'typescript-eslint', 'svelte']);

	const plugin = await interopDefault(import('eslint-plugin-svelte'));

	const typescriptPlugin = await interopDefault(import('typescript-eslint'));

	return [
		...plugin.configs.recommended,
		{
			files: globs.svelte,
			languageOptions: {
				parserOptions: {
					parser: typescriptPlugin.parser,
					projectService: true,
					extraFileExtensions: ['.svelte'],
				},
			},
		},
	];
};

export { svelte };
