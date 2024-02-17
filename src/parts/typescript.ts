import type { ConfigPart } from './_types.js';
import type { ParserOptions } from '@typescript-eslint/utils/ts-eslint';
import type { FlatESLintConfig } from 'eslint-define-config';

import { ensurePackages, interopDefault } from '../utils.js';

import { globs } from '../globs.js';

interface TypeScriptOptions extends ParserOptions {}

const typescript: ConfigPart = async (options) => {
	ensurePackages('typescript-eslint');

	const plugin = await interopDefault(import('typescript-eslint'));

	const project = typeof options.typescript === 'boolean' ? true : options.typescript.project ?? true;
	const tsconfigRootDir = typeof options.typescript === 'boolean' ? undefined : options.typescript.tsconfigRootDir;

	const extraFileExtensions = [];
	if (options.svelte === true) extraFileExtensions.push('.svelte');

	return [
		...plugin.configs.recommendedTypeChecked as FlatESLintConfig[],

		{
			languageOptions: {
				parserOptions: {
					project,
					tsconfigRootDir,
					extraFileExtensions,
				},
			},
		},

		{
			files: globs.javascript,
			rules: plugin.configs.disableTypeChecked.rules,
		},
	];
};

export { typescript, TypeScriptOptions };
